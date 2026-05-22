"use client";

import {useState} from "react";

export default function TestTools(){

const [message,setMessage]=
useState("");

const [loading,setLoading]=
useState(false);



async function generateLeads(){

try{

setLoading(true);

const res=
await fetch(
"/api/generate-leads",
{
method:"POST"
}
);

const data=
await res.json();

setMessage(
data.message
);

}
catch(error){

setMessage(
"Failed generating leads"
);

}

finally{

setLoading(false);

}

}



async function resetQuota(){

try{

setLoading(true);

const res=
await fetch(
"/api/webhook",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify({

eventId:
`reset-${Date.now()}`

})

}
);

const data=
await res.json();

setMessage(
data.message
);

}
catch(error){

setMessage(
"Reset failed"
);

}

finally{

setLoading(false);

}

}




async function refreshDashboard(){

window.open(
"/dashboard",
"_blank"
);

}



return(

<div
className="max-w-xl mx-auto p-10"
>

<h1
className="text-3xl font-bold mb-6"
>

Test Tools

</h1>



<div
className="space-y-4"
>


<button

onClick={
generateLeads
}

disabled={loading}

className="w-full border p-3 rounded"
>

Generate 10 Leads

</button>




<button

onClick={
resetQuota
}

disabled={loading}

className="w-full border p-3 rounded"
>

Reset Quota

</button>




<button

onClick={
refreshDashboard
}

className="w-full border p-3 rounded"
>

Open Dashboard

</button>


</div>


{

message && (

<p
className="mt-5"
>

{message}

</p>

)

}


</div>

);

}