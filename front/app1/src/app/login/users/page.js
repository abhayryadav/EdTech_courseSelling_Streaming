'use client'
import { useEffect, useState } from "react";
//import styles from "./page.module.css";
import TextField from '@mui/material/TextField';
import { redirect, useRouter } from "next/navigation";

const loginStudent=()=>{
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
      let login=await fetch("http://localhost:4000/user/login" ,{
        method: 'post',
        headers:{
          'username':username,
          'password':password
        }
      })
      const loginresp = await login.json()
      console.warn(loginresp.name);
      if(loginresp.name){
        localStorage.setItem("user",JSON.stringify(loginresp))
        router.push("/");
      }else{
        alert("invalid credentials / user doesn't exist")
        
      }

    }
    const router=useRouter();
    
  return (
    <main className="mainuser">
      <div className="div1mainuser">
          <div className="div2mainuser">
              <div>
                    <h1 className="logininfo"> Login as User </h1>
              </div>
              
                <br>
                </br>
                <div className="div1in2mainuser">
                  {/* <input  defaultValue="User Id" className="t1" id="userid" name="userkiid" onChange={(text)=>setUsername(text.target.value)} >
                      
                      </input> */}

                        <TextField
                            className="muit1"
                            id="outlined-basic"
                            label="UserId"
                            variant="outlined"
                            // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'black',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white', // Change border color on focus
                                },
                              },
                              input: { color: 'white' },
                              label: { color: 'white' },
                            }}
                            onChange={(e) => setUsername(e.target.value)}
                            
                          />
                      <br>
                      </br>
                      {/* <input  defaultValue="Password"className="t1" id="userpass" name="userkapassword" onChange={(text)=>setPassword(text.target.value)}>
                          
                      </input> */}
                      <TextField
                            className="muit1"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'black',
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white', // Change border color on focus
                                },
                              },
                              input: { color: 'white' },
                              label: { color: 'white' },
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                          />
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

export default loginStudent;








