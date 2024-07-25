"use client";
import hidbeforloginsign from "./privatecomponentviaHOC/privcomphoc";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";//for image optimization
import { Margarine, Roboto } from "next/font/google";
//import Loader from './loading'; 
import { lazy } from "react";
import CircularIndeterminate from './loading';

///////////////////////// this home file is for 3rd code of page.js which support ssr and csr  


export default function Home() {
    const router = useRouter();
     function logout() {
      localStorage.removeItem("user");
      router.push("/");
      router.refresh();  //not necessary
    }
    function signout () {
      localStorage.removeItem("user");
      router.push("/");
      router.refresh();  //not necessary
    }
    
    
    const [courses, setcourses] = useState([]);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true); // this loading is for ssr loading 
    // for csr like fetch requests we have to make some custom loadings 
    // like if fetch request is in process we will make it true else false ;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://127.0.0.1:4000/courses/");
          if (!response.ok) {
            alert("Failed to fetch courses")
            router.push("/")
          }
          const data = await response.json();
          setcourses(data.courses); 
          // console.warn(data);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      };
      
        fetchData();
      
      
    }, []);
  
    // const session = localStorage.getItem("user");
    useEffect(() => {
      if (typeof window === 'undefined') {
        //if window is undefined means ssr is running and not csr, so don't access localstorage
        // and keep loading true
        ////// but due to loading we wont get the ssr loaded page (which is the advantage of Next.js's ssr)   
        ////// to get that advantage we have to remove loading logic but loading is good as ssr return generic data only if we use headers instead of cookies
        ////// but if we will use cookies in upcomming modifications we will use ssr rendered pages instaed of loading page 
      }else{
        const user = localStorage.getItem("user");
        setSession(user);
        setLoading(false);
      }
      
    
      // explainantion
  
      // useEffect(() => {
      //   // effect logic
      // }, []);
      // The first argument is a function (the effect) that contains the logic you want to run.
      // The second argument is an array of dependencies. An empty array [] means the effect runs only once, after the initial render.
  
      // if (typeof window !== 'undefined') {
      //   // client-side logic
      // }
      // typeof window !== 'undefined' is a check to determine if the code is running in a browser environment (client-side) rather than on the server.
      // In server-side rendering (SSR) or during the initial server-side rendering in Next.js, window is not defined. This check ensures that the code inside the if block runs only on the client side.
  
      // const user = localStorage.getItem("user");
      // localStorage is a Web API available only in the browser.
      // localStorage.getItem("user") retrieves the value associated with the key "user" from localStorage. If there is no such key, it returns null.
  
  
      // setSession(user);
      // setSession is a state setter function returned by useState.
      // It updates the session state variable with the value retrieved from localStorage.
      // If a user is found in localStorage, session will be set to that value. Otherwise, it will be set to null.
      
    },[]);
  
  
    // if (loading) {
    //   return <Loader />;  // Display the loading component while loading
    // }
  
  
    if (loading) {
      return <CircularIndeterminate />;  // Display the loading component while loading
    }
  
  
    // console.warn(courses)
  
    return (
      <main>
        <div className="nav">
          <div className="divhomemain">
            <div className="divhome1" id="inner1">
              <div className="divhome2" id="inner2">
                <h2 className="cheading" style={{ fontFamily: "Rubik Scribble" }}>
                  {" "}
                  CourseOnn
                </h2>
                <p className="cbheading" style={{ fontFamily: "Rubik Scribble" }}>
                  {" "}
                  A abhay & son's Company{" "}
                </p>
              </div>
              <ul>
                <li>
                  {!session ? (
                    <button
                      className="btonhome"
                      onClick={() => router.push("/login/users")}
                    >
                      login
                    </button>
                  ) : (
                    <button className="btonhome" onClick={() => logout()}>
                      logOut
                    </button>
                  )}
                </li>
                <li>
                  {!session ? (
                    <button
                      className="btonhome"
                      onClick={() => router.push("/signup/user")}
                    >
                      signup
                    </button>
                  ) : (
                    <button className="btonhome" onClick={() => signout()}>
                      signOut
                    </button>
                  )}
                </li>
                <li>
                  {session ? (
                    <button
                      className="btonhome"
                      onClick={() => router.push("/about")}
                    >
                      about
                    </button>
                  ) : (
                    <></>
                  )}
                </li>
                <li>
                  {session ? (
                    <div className="Searchhome">
                      <SearchBar/>
                    </div>
                    
                  ) : (
                    <></>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="pagemain">
          <div className="leftside">
            {session ? (
              <div className="sideNav">
                <div className="user">
                  <Image
                    className="userimg"
                    src="/images/profile-user.png"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h2 className="usernavname"> name </h2>
                    <p className="usernavemail"> mail </p>
                  </div>
                </div>
  
                <ul className="ulnav">
                  <li className="iconnav">
                    {" "}
                    <Image
                      src={"/images/icons8-home-64.png"}
                      width={30}
                      height={30}
                    />
                    <p>home</p>
                  </li>
                  <li className="iconnav">
                    <Image
                      src={"/images/icons8-info-48.png"}
                      width={30}
                      height={30}
                    />
                    <p>info</p>
                  </li>
                  <li className="iconnav">
                    {" "}
                    <Image
                      src={"/images/icons8-home-64.png"}
                      width={30}
                      height={30}
                    />
                    <p>home</p>
                  </li>
                  <li className="iconnav">
                    <Image
                      src={"/images/icons8-info-48.png"}
                      width={30}
                      height={30}
                    />
                    <p>info</p>
                  </li>
                  <li className="iconnav">
                    {" "}
                    <Image
                      src={"/images/icons8-home-64.png"}
                      width={30}
                      height={30}
                    />
                    <p>home</p>
                  </li>
                  <li className="iconnav">
                    <Image
                      src={"/images/icons8-info-48.png"}
                      width={30}
                      height={30}
                    />
                    <p>info</p>
                  </li>
                </ul>
                <ul className="ulnav">
                  <li className="iconnav">
                    <Image
                      src={"/images/user-logout.png"}
                      width={30}
                      height={30}
                    />
                    <p>logout</p>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          
          {session ? <div className="rightside">
                <article class="scroller">
                   
                          {/* <h1 className="h1scroll">Live</h1> */}
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section one</h2>
                            </div>
                            
                          </section>
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section two</h2>
                            </div>
                          </section>
                         
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section one</h2>
                            </div>
                            
                          </section>
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section two</h2>
                            </div>
                          </section>
                          
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section one</h2>
                            </div>
                            
                          </section>
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section two</h2>
                            </div>
                          </section>
                          
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section one</h2>
                            </div>
                            
                          </section>
                          <section className="sec">
                            <div className="divscroll">
                            <h2>Section two</h2>
                            </div>
                          </section>
                          
                </article>
          </div> : <></>}
        </div>
      </main>
    );
  }
  
  const SearchBar=()=>{
    return(
      <>
        <div>
            <input className="searchinput" type="text" placeholder="search"
            // value={  }
            // onChange={}
            /> 
          </div>
      </>
    )
  }
  
  
  
  
  
  