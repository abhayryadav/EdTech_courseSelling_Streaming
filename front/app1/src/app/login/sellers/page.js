'use client'
import { useEffect, useState } from "react";
//import styles from "./page.module.css";
import { redirect, useRouter } from "next/navigation";

const loginSeller=()=>{
  
  useEffect(()=>{
    let session = localStorage.getItem("user")
    if(session){
      redirect("/")
  }
  })
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const dologin = async()=>{
  
    console.warn(username,password);
    let loginresp=await fetch("http://localhost:4000/seller/login" ,{
      method: 'POST',
      headers:{
        'username':username,
        'password':password
      }
    })
    let logindata= await loginresp.json()
    console.warn(logindata);
    if(logindata.authtoken){
      console.warn('pushing')
      localStorage.setItem("user",JSON.stringify(logindata))
      router.push(`../dataAfterSignupAndLogin/sellerdataafterSignedOrLoggedin/${logindata.sellerid}`)
    }
  }


    const router=useRouter();
  return (
    <main className="mainuser">
      <div className="div1mainuser">
          <div className="div2mainuser">
              <div>
                    <h1 className="logininfo" > Login as Seller </h1>
              </div>
              
                <br>
                </br>
                <div className="div1in2mainuser">
                  <input  defaultValue="User Id" className="t2" id="sellerid" name="sellerkiid"  onChange={(text)=>setUsername(text.target.value)}>
                      
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="Password"className="t2" id="sellerpass" name="sellerkapassword" onChange={(text)=>setPassword(text.target.value)}>
                          
                      </input>
                </div>
                
                <br>
                </br>
          </div>
          
          <div className="bttndiv">
                  <button className="bton" onClick={()=>dologin()}>
                      Login
                  </button>
                  <button className="bton" onClick={()=>router.push("/")}>
                      Back
                  </button>
          </div>
      </div>
    </main>
  );
}

export default loginSeller;