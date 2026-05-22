"use client";

import { useEffect, useState } from "react";

export default function Dashboard(){

const [providers,setProviders]=
useState<any[]>([]);

const [loading,setLoading]=
useState(true);


async function fetchDashboard(){

try{

const res=
await fetch(
"/api/dashboard"
);

const data=
await res.json();

setProviders(
data?.data ||[]
);

setLoading(false);

}

catch(error){

console.log(error);

}

}


useEffect(()=>{

fetchDashboard();

const interval=
setInterval(
fetchDashboard,
3000
);

return ()=>{

clearInterval(
interval
);

};

},[]);


if(loading){

return(
<h1>
Loading...
</h1>
)
}


return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-5">

Provider Dashboard

</h1>


<div className="grid gap-5">

{providers?.map(
(provider:any)=>(
<div
key={provider.providerId}
className="border p-5 rounded"
>

<h2 className="font-bold">

{provider.providerName}

</h2>

<p>

Remaining Quota:

{provider.remainingQuota}

</p>

<p>

Leads Received:

{provider.leadsReceived}

</p>


<div>

<h3 className="mt-3 font-bold">

Assigned Leads

</h3>

<ul>

{provider.assignedLeads.map(
(lead:any)=>(
<li
key={lead._id}
>

{lead.name}

</li>
)
)}

</ul>

</div>

</div>
)
)}

</div>

</div>

)

}