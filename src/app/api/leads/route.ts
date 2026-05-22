import {connectDB} from "../../../lib/mongodb";
import Assignment from "../../../models/Assignment";
import Provider from "../../../models/Provider";
import mongoose from "mongoose";


import Lead from "../../../models/Lead";

import {allocateProviders} from "../../../services/allocationService";


export async function POST(
request:Request
){

let session=null;

try{

    await connectDB();

    session=
    await mongoose.startSession();

    session.startTransaction();


    const body=
    await request.json();


    const lead=
    await Lead.create(
        [body],
        {session}
    );


    const providers=
    await allocateProviders(
        body.serviceType,
        session
    );


    for(const provider of providers){

        await Assignment.create(
        [{
            leadId:lead[0]._id,
            providerId:provider._id
        }],
        {
            session
        }
        );


        await Provider.findByIdAndUpdate(

        provider._id,

        {
            $inc:{
                leadsReceived:1
            }
        },

        {
            session
        }

        );

    }


    await session.commitTransaction();

    session.endSession();



    const updatedProviders=
    await Provider.find({

        _id:{
            $in:providers.map(
            p=>p._id
            )
        }

    });


    return Response.json({

        success:true,

        lead:lead[0],

        assignedProviders:
        updatedProviders

    });

}
catch(error){

    if(session){

        await session.abortTransaction();

        session.endSession();

    }

    return Response.json({

        success:false,
        error:
        error instanceof Error
        ? error.message
        : "Unknown Error"

    });

}

}