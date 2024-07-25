'use client'
import { useState } from "react";
//import styles from "./page.module.css";
import { useRouter } from "next/navigation";
const loginStudent=()=>{
    const router=useRouter();
  return (
    <main className="mainuser">
      <div className="div1mainuser">
          <div className="div2mainuser">
              <div>
                    <h1 className="logininfo"> Login as Admin </h1>
              </div>
              
                <br>
                </br>
                <div className="div1in2mainuser">
                  <input  defaultValue="User Id" className="t1" id="adminid" name="adminkiid"  >
                      
                      </input>
                      <br>
                      </br>
                      <input  defaultValue="Password"className="t1" id="adminpass" name="adminkapassword" >
                          
                      </input>
                </div>
                
                <br>
                </br>
          </div>
          
          <div className="bttndiv">
                  <button className="bton" onClick={()=>xyz}>
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

export default loginStudent;