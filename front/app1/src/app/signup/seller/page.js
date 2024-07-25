'use client'
import { useLayoutEffect, useState } from "react";
//import styles from "./page.module.css";
import { redirect, useRouter } from "next/navigation";

const signStudent=()=>{
  let session = localStorage.getItem("user")
useLayoutEffect(()=>{
  if(session){
    redirect("/")
}
}

)
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [age,setAge]=useState("");

const dosign = async()=>{

  console.warn(username,password,age);

  if(username=="" || password=="" || age==""){
    alert("filll")
  }else{
      let signinresp=await fetch("http://localhost:4000/seller/signup" ,{
      method: 'post',
      body: JSON.stringify({username,password,age}),
      headers:{
        'Content-Type':'application/json'
      }
      })
      signinresp = await signinresp.json()
      console.warn(signinresp);
      console.warn(signinresp.sellerid)
      if(signinresp.sellerid){
        localStorage.setItem("user",JSON.stringify(signinresp))
        router.push(`../dataAfterSignupAndLogin/sellerdataafterSignedOrLoggedin/${signinresp.sellerid}`)
      }else{
        alert("seller already exist")
      }
  }
  

}
//

    const router=useRouter();

  return (
    <main className="mainuser">
      <div className="div1mainuser">
          <div className="div2mainuser">
              <div>
                    <h1 className="logininfo"> SignUp as seller </h1>
              </div>
              
                <br>
                </br>
                <div className="div1in2mainuser">
                  <input  defaultValue="seller Id" className="t1" id="sellerkiid" name="userkiid" onChange={(text)=>setUsername(text.target.value)} >
                      
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="Password"className="t1" id="userpass" name="userkapassword" onChange={(text)=>setPassword(text.target.value)}>
                          
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="age"className="t1" id="userage" name="userkiage" onChange={(text)=>setAge(text.target.value)}>
                          
                      </input>
                </div>
                
                <br>
                </br>
          </div>
          
          <div className="bttndiv">
                  <button className="bton" onClick={()=>dosign()}>
                      signup
                  </button>
                  <button className="bton" onClick={()=>router.push("/")}>
                      Back
                  </button>
          </div>
      </div>


    </main>
  );
}

export default signStudent;