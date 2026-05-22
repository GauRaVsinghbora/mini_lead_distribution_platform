"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Navbar(){

const pathname=
usePathname();

const links=[

{
name:"Dashboard",
path:"/dashboard"
},

{
name:"Request Service",
path:"/request-service"
},

{
name:"Test Tools",
path:"/test-tools"
}

];


return(

<nav
className="
border-b
px-10
py-4
flex
justify-between
items-center
"
>

<h1
className="
font-bold
text-xl
"
>

Lead Distribution System

</h1>


<div
className="
flex
gap-6
"
>

{
links.map(
(link)=>(
<Link

key={link.path}

href={link.path}

className={`

${
pathname===link.path

?

"text-blue-500 font-bold"

:

"text-gray-400"

}

hover:text-white
transition

`}

>

{link.name}

</Link>
)
)
}

</div>

</nav>

);

}