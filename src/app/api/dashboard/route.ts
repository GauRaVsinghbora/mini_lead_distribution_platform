import { connectDB } from "../../../lib/mongodb";

import Provider from "../../../models/Provider";
import Assignment from "../../../models/Assignment";
import Lead from "../../../models/Lead";

export async function GET(){

try{

await connectDB();


const providers=
await Provider.find();


const dashboardData=[];


for(
const provider
of providers
){

const assignments=
await Assignment.find({
    providerId:provider._id
})
.populate({
    path:"leadId",
    model:Lead
});



dashboardData.push({

providerId:
provider._id,

providerName:
provider.name,

monthlyQuota:
provider.monthlyQuota,

leadsReceived:
assignments.length,

remainingQuota:
provider.monthlyQuota-
assignments.length,

assignedLeads:
assignments
.map(
(item)=>item.leadId
)
.filter(Boolean)

});

}



return Response.json({

success:true,

data:
dashboardData

});

}

catch(error){

return Response.json({

success:false,

error:
error instanceof Error
? error.message
: "Error"

});

}

}   