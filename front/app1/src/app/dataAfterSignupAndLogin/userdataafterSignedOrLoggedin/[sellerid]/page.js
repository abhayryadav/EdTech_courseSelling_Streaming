"use client";
import style from "./usdataafter.module.css";
import CircularIndeterminate from "@/app/loading";
import { useEffect, useState } from "react";
import Image from "next/image"; //for image optimization
import TextField from '@mui/material/TextField';

import { redirect } from "next/navigation";

export default function sellersAfterloginOrSignup({ params }) {
  console.log(params);
  let user = { name: "unknown" };
  const [session, setSession] = useState(null);
  const [selleruname, setselleruname] = useState(null);
  const [courses, setcourses] = useState([]);
  const [loading, setLoading] = useState(true); // this loading is for ssr loading
  // for csr like fetch requests we have to make some custom loadings
  // like if fetch request is in process we will make it true else false ;

  // regarding userdata for upload-----------------------
  const [name, setname] = useState(null);
  const [sellername, setsellername] = useState(null);
  const [cost, setcost] = useState(null);
  const [imglink, setimglink] = useState(null);
  const [clicks, setupclicks] = useState(0);


  //for edit----------------------------------------
  const [courseID, setcourseID] = useState(0);





  let username = null;
  let authtoken = null;

  useEffect(() => {
    const fetchData = async (username, authtoken) => {
        
      try {
        const response = await fetch(
          `http://127.0.0.1:4000/user/courses`,
          {
            method: "GET",
            headers: {
              authorization: "Bearer " + authtoken,
            },
          }
        );
        if (!response.ok) {
          alert("Failed to fetch courses");
          router.push("/");
          return; // Early return to stop further execution
        }
        const data = await response.json();
        setcourses(data.courses);
        console.log(courses);
      } catch (error) {
        console.log("00000000000000000000");
        console.error("Error fetching courses:", error);
      }
    };
    user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      username = parsedUser.name;
      authtoken = parsedUser.authtoken;
      console.warn("++++++++++++++"+authtoken)
      console.warn(username);
      setSession(parsedUser);
      setselleruname(username);
      fetchData(username, authtoken);
    } else {
      redirect("/");
    }
    // fetchData(username, authtoken);
    setLoading(false);
  }, [clicks]);










//   // async function load() {
//   //   user = localStorage.getItem("user");
//   //   const parsedUser = JSON.parse(user);
//   //   username = parsedUser.name;
//   //   authtoken = parsedUser.authtoken;
    

//   //   if (name==null || cost==null || imglink==null) {

//   //     alert("please fill all required data");
//   //   } else {
//   //     console.warn("=========="+name+" "+cost+" "+imglink)
//   //     try {
//   //       console.warn(authtoken)
//   //       const resp = await fetch("http://localhost:4000/seller/courses",{
//   //         method: "POST",
          
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           authorization: "Bearer " + authtoken,
//   //         },
         
//   //       body: JSON.stringify({
//   //         name : name,
//   //         sellername : selleruname,
//   //         cost : cost,
//   //         imglink : imglink
//   //       })
//   //       });
//   //       const respData = await resp.json();
//   //       console.warn(respData);
//   //       if(respData.message == "Course with this name already exists."){
//   //         alert("Course with this name already exists.")
//   //         setname(null) 
//   //         setcost(null)  
//   //         setimglink(null)
//   //         setcourseID(null)
//   //       }else if(respData.message=="course created successfully"){
//   //         setTimeout(() => {
//   //           setupclicks(clicks + 1);
//   //         }, 2000);
//   //         setname(null) 
//   //         setcost(null)  
//   //         setimglink(null)
//   //         setcourseID(null)
//   //       }
//   //     } catch (error) {
//   //       console.error("Error in uploading :", error);
//   //     }
//   //   }
//   // }




//   // const deleteCourse = async (courseId) => {
//   //   const user = JSON.parse(localStorage.getItem("user"));
//   //   const { authtoken } = user;
    
//   //   try {
//   //     const response = await fetch(
//   //       `http://localhost:4000/seller/courses/${courseId}`,
//   //       {
//   //         method: "DELETE",
//   //         headers: {
//   //           Authorization: "Bearer " + authtoken,
//   //         },
//   //       }
//   //     );
//   //     if (!response.ok) {
//   //       alert("Failed to delete course");
//   //       return;
//   //     }
//   //     // Remove course from state
//   //     setTimeout(() => {
//   //       setupclicks(clicks + 1);
//   //     }, 2000);
//   //     setCourses(courses.filter((course) => course.courseId !== courseId));
//   //     alert("Course deleted successfully");
//   //   } catch (error) {
//   //     console.error("Error deleting course:", error);
//   //   }
//   // };
//   // const handleDelete = (courseId) => {
//   //   if (confirm("Are you sure you want to delete this course?")) {
//   //     deleteCourse(courseId);
//   //   }
//   // };









// const removeeditconsole=() =>{
//     setname(null) 
//     setcost(null)  
//     setimglink(null)
//     setcourseID(null)

// document
// .querySelector(`.${style.overlay}`)
// .classList.remove(style.showoverlay);
// document
// .querySelector(`.${style.EditForm}`)
// .classList.remove(style.showEditForm);
// setcourseID(null);
// }










//   // const editCourse = async () => {
//   //   if (name==null || cost==null) {

//   //     alert("please fill all required data");
//   //     return;
//   //   } else {
//   //     console.warn("=========="+name+" "+cost)
//   //     const user = JSON.parse(localStorage.getItem("user"));
//   //     const { authtoken } = user;
//   //     setTimeout(() => {
//   //       setupclicks(clicks + 1);
//   //     }, 2000);
//   //     try {
//   //       const response = await fetch(
//   //         `http://localhost:4000/seller/courses/${courseID}`,
//   //         {
//   //           method: "PUT",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //             Authorization: "Bearer " + authtoken,
//   //           },
//   //           body: JSON.stringify({
//   //             name : name,
//   //             courseId : courseID,
//   //             sellername : selleruname,
//   //             cost : cost,
//   //             imglink : imglink
//   //           })
//   //         }
//   //       );
//   //       if (!response.ok) {
//   //         alert("Failed to edit course");
//   //         return;
//   //       }
//   //       if(respData.message == "course doesent exist"){
//   //         alert("course doesent exist , for any queries contact admin")
//   //       }else if(respData.message=="updated"){
//   //         setTimeout(() => {
//   //           setupclicks(clicks + 1);
//   //         }, 2000);
//   //       }
//   //       removeeditconsole()
//   //       setCourses(
//   //         courses.map((course) =>
//   //           course.courseId === courseID
//   //             ? { ...course, name, cost, imglink }
//   //             : course
//   //         )
//   //       );
//   //     } catch (error) {
//   //       console.error("Error editing course:", error);
//   //     }
//   //   }

    
//   // };

//   const handleEdit=(courseId) =>{
//     document
//     .querySelector(`.${style.overlay}`)
//     .classList.add(style.showoverlay);
//   document
//     .querySelector(`.${style.EditForm}`)
//     .classList.add(style.showEditForm);
//   setcourseID(courseId);
//   console.log("Editing course with ID:", courseId); 
//   }

  















function resett(){
  document.getElementById("outlined-basic-1").value = '';
  document.getElementById("outlined-basic-2").value = '';
  document.getElementById("outlined-basic-3").value = '';
}





console.log(params.sellerid+"--=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-")


  if (loading) {
    return <CircularIndeterminate />; // Display the loading component while loading
  }
  return (
    <div>




      <div className={style.handlerslistdiv1in1}>
        <div>
          <h1 className={style.sellerdata}>
            &nbsp; Your dashboard - {selleruname}{" "}
          </h1>
        </div>
        <div>
          <h3 className={style.handlisttop}>
            &nbsp;&nbsp;&nbsp;&nbsp; {params.sellerid}
          </h3>
        </div>
      </div>

      <div className={style.datajimain}>
        <div className={style.lefteside}>
          <div className="data">
            {courses.map((item) => (
              <div
                className="courses"
                //onClick={() => router.push("/coursedetail/" + item.courseId)}
              >
                <div className="courseimage">
                  {/* //one way */}
                  {/* <img className="imagecourse" src={item.imglink}
                                width={100}
                                height={100}
                                
                                /> */}
                  {/* //second way */}
                  <Image
                    className="imagecourse"
                    src={item.imglink}
                    width={120}
                    height={120}
                  />
                </div>
                <div className="coursedetails">
                  <h4 style={{ fontFamily: "nunito" }} className="h4name">
                    Course Name: {item.name}
                  </h4>
                  <p className="p2">
                    Course Cost:{" "}
                    <span style={{ color: "wheat" }} className="rsspan">
                      {" "}
                      {item.cost} Rs{" "}
                    </span>
                  </p>
                  <p className="p3">Seller Name: {item.sellername} </p>
                  <p className="p1" style={{ fontFamily: "Roboto" }}>
                    Course Id: {item.courseId}
                  </p>
                  {/* <button className={style.dlt} onClick={() => handleDelete(item.courseId)}>Delete</button> */}
                  <button className={style.edt} onClick={() => handleEdit(item.courseId)}>Mark Complete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.rightside}>
          <div className={style.inn}>
            <style jsx>
              {`
                h1 {
                  text-align: center;
                  color: white;
                }
              `}
            </style>
            <h1>Generate querry</h1>
            <TextField
              className={style.muit1}
              idd="1"
              id="outlined-basic-1"
              label="name of course"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setname(e.target.value)}
            />
            {/* <TextField
              className={style.muit1}
              id="outlined-basic"
              label="sellername"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setsellername(e.target.value)}
            /> */}
            <TextField
              className={style.muit1}
              idd="2"
              id="outlined-basic-2"
              label="querry"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setcost(e.target.value)}
            />
            <TextField
              className={style.muit1}
              idd="3"
              id="outlined-basic-3"
              label="imglink"
              variant="outlined"
              type="text"
              // sx={{ input: { color: 'white' }, label: { color: 'white' } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // Change border color on focus
                  },
                },
                input: { color: "white" },
                label: { color: "white" },
              }}
              onChange={(e) => setimglink(e.target.value)}
            />
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" >
                Generate
              </button>
            </div>
            <div className={style.ubpdiv}>
              <button className={style.upb} type="button" onClick={resett}>
                reset
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
