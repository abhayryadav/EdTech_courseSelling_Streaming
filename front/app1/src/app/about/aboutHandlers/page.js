'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
const aboutStudent=()=>{
    const router=useRouter();
  return (
    <main >
        <h1 className="subabout" > about Handlers </h1>
        <button className="btnabout" onClick={()=>router.back()}>
            back
        </button>
        <button className="btnabout" onClick={()=>router.push('./aboutHandlers/handlers')}>
            go
        </button>
      
    </main>
  );
}

export default aboutStudent;