'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import hidbeforloginsign from "../privatecomponentviaHOC/privcomphoc";

import { usePathname } from "next/navigation"; 
import Link from "next/link";
import "./hidden.css"
const hidden=()=>{
    const router=useRouter();
    
  return (
    <main >
        <h1 className="hiddenh1">hidden</h1>
        
    </main>
  );
}
export default hidbeforloginsign(hidden)