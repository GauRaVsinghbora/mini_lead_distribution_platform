import { connectDB } from "../../../lib/mongodb";

import Provider from "../../../models/Provider";
import Service from "../../../models/Service";
import AllocationState from "../../../models/AllocationState";

export async function GET() {

    try{

        await connectDB();

        // remove old data

        await Provider.deleteMany({});
        await Service.deleteMany({});
        await AllocationState.deleteMany({});



        // services

        const services = [

            {name:"Service1"},
            {name:"Service2"},
            {name:"Service3"}

        ];

        await Service.insertMany(
            services
        );



        // providers

        const providers=[];

        for(let i=1;i<=8;i++){

            providers.push({

                name:`Provider${i}`,
                monthlyQuota:10,
                leadsReceived:0

            });

        }

        await Provider.insertMany(
            providers
        );



        // round robin state

        const allocationStates=[

            {
                serviceType:"Service1",
                currentIndex:0
            },

            {
                serviceType:"Service2",
                currentIndex:0
            },

            {
                serviceType:"Service3",
                currentIndex:0
            }

        ];

        await AllocationState.insertMany(
            allocationStates
        );



        return Response.json({

            success:true,
            message:"Seed completed"

        });

    }

    catch(error){

        return Response.json({

            success:false,
            error

        });

    }

}