"use client";

import {useState} from "react";

export default function RequestService(){

const [formData,setFormData]=
useState({

name:"",
phone:"",
city:"",
serviceType:"Service1",
description:""

});


const [loading,setLoading]=
useState(false);

const [message,setMessage]=
useState("");


function handleChange(
e:any
){

setFormData({

...formData,

[e.target.name]:
e.target.value

});

}


async function handleSubmit(
e:any
){

e.preventDefault();

try{

setLoading(true);

setMessage("");


const res=
await fetch(
"/api/leads",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:JSON.stringify(
formData
)

}
);

const data=
await res.json();


if(data.success){

setMessage(
"Lead submitted successfully"
);


setFormData({

name:"",
phone:"",
city:"",
serviceType:"Service1",
description:""

});

}
else{

setMessage(
data.error
);

}

}
catch(error){

setMessage(
"Something went wrong"
);

}

finally{

setLoading(false);

}

}



return(

<div className="max-w-xl mx-auto p-10">

<h1
className="text-3xl font-bold mb-6"
>

Request Service

</h1>


<form
onSubmit={handleSubmit}
className="space-y-4"
>


<input

name="name"

placeholder="Name"

value={formData.name}

onChange={handleChange}

className="w-full p-3 border rounded"
/>



<input

name="phone"

placeholder="Phone"

value={formData.phone}

onChange={handleChange}

className="w-full p-3 border rounded"
/>



<input

name="city"

placeholder="City"

value={formData.city}

onChange={handleChange}

className="w-full p-3 border rounded"
/>




<select

name="serviceType"

value={formData.serviceType}

onChange={handleChange}

className="w-full p-3 border rounded"

>

<option>
Service1
</option>

<option>
Service2
</option>

<option>
Service3
</option>

</select>




<textarea

name="description"

placeholder="Description"

value={formData.description}

onChange={handleChange}

className="w-full p-3 border rounded"

/>



<button

disabled={loading}

className="w-full p-3 border rounded"

>

{

loading
?

"Submitting..."

:

"Submit"

}

</button>


</form>


{

message && (

<p className="mt-4">

{message}

</p>

)

}

</div>

)

}