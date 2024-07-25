'use client'
import { useState } from "react";
import hidbeforloginsign from "../privatecomponentviaHOC/privcomphoc";





//import like down here when ---------x
// import {hidbeforloginsign} from "../privatecomponentviaHOC/privcomphoc";
//---------x exported like down here in file - /privatecomponentviaHOC/privcomphoc
// const x=function(){
//   console.log("x")
// }
// export {hidbeforloginsign,x}





import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation"; 

import Link from "next/link";
import "./about.css"
const about=()=>{
    const router=useRouter();
    
  return (
    <main >
        <div className="divabout">
              <h1 className="mainabout"> about </h1>
              <li>
              <Link className="brackets" href="/about/aboutStudent">about Students </Link>
              </li>
              <br>
              </br>
              
              <li>
              <Link className="brackets" href="/about/aboutteachers">about teachers </Link>
              </li>
              <br>
              </br>
              <li>
              <Link className="brackets" href="/about/aboutHandlers">about Handlers </Link>
              </li>
             
        </div>
        <div>
              <button className="btnabout" onClick={()=> router.back()}>
                  back
              </button>
        </div>

 
       
        
        
    </main>
  );
}
export default hidbeforloginsign(about)











