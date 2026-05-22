import {connectDB} from "../../../lib/mongodb";

import Provider from "../../../models/Provider";
import WebhookEvent from "../../../models/WebhookEvent";

export async function POST(
request:Request
){

try{

await connectDB();

const body=
await request.json();

const eventId=
body.eventId;



const existing=

await WebhookEvent.findOne({
eventId
});


if(existing){

return Response.json({

success:true,
message:
"Webhook already processed"

});

}



await WebhookEvent.create({

eventId

});



await Provider.updateMany(
{},
{
$set:{
    monthlyQuota:10,
leadsReceived:0
}
}
);



return Response.json({

success:true,
message:
"Quota reset successful"

});

}

catch(error){

return Response.json({

success:false,

error:
error instanceof Error
? error.message
:"Error"

});

}

}