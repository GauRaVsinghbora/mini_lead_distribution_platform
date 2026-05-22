import {connectDB} from "../../../lib/mongodb";

import Lead from "../../../models/Lead";

export async function POST(){

try{

await connectDB();


const requests=[];


for(let i=1;i<=10;i++){

requests.push(

fetch(
"http://localhost:3000/api/leads",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

name:`BulkUser${i}`,

phone:`88888${i}${Date.now()}`,

city:"Delhi",

serviceType:"Service1",

description:"Bulk lead"

})

}

)

);

}

const results= 
await Promise.all(
requests
);
console.log("Lead generation results:",results);


return Response.json({

success:true,
message:
"10 leads generated"

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