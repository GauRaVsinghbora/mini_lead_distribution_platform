import Provider from "../models/Provider";
import AllocationState from "../models/AllocationState";

import {

MANDATORY_PROVIDERS,
PROVIDER_POOLS

} from "../lib/constants";


export async function allocateProviders(
serviceType:string,
session:any
){

const selectedProviders=[];



/*
---------------------
Mandatory Providers
---------------------
*/

const mandatoryNames=

MANDATORY_PROVIDERS[
serviceType as keyof typeof MANDATORY_PROVIDERS
];


const mandatoryProviders=

await Provider.find({

name:{$in:mandatoryNames},

$expr:{
$lt:[
"$leadsReceived",
"$monthlyQuota"
]
}

}).session(session);

selectedProviders.push(
...mandatoryProviders
);



/*
---------------------
Remaining slots
---------------------
*/

const remainingSlots=
3-selectedProviders.length;



if(remainingSlots<=0){

return selectedProviders;
}



/*
---------------------
Round Robin
---------------------
*/


const pool=

PROVIDER_POOLS[
serviceType as keyof typeof PROVIDER_POOLS
];


const state=

await AllocationState.findOne({
serviceType
}).session(session);


let index=
state.currentIndex;



const selectedIds=
selectedProviders.map(
(p)=>p._id.toString()
);


const availableProviders=
await Provider.find({

name:{
    $in:pool
},

_id:{
    $nin:selectedIds
},

$expr:{
$lt:[
"$leadsReceived",
"$monthlyQuota"
]
}

})
.sort({
name:1
})
.session(session);


let count=0;

while(
selectedProviders.length<3 &&
count<availableProviders.length
){

const provider=

availableProviders[
index %
availableProviders.length
];


selectedProviders.push(
provider
);

index++;

count++;

}



/*
---------------------
Save state
---------------------
*/

state.currentIndex=index;

await state.save({session});



return selectedProviders;

}