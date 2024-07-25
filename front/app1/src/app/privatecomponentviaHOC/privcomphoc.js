
import Router from "next/router";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import CircularIndeterminate from './loading';



export default function hidbeforloginsign(Component) {
  return function (props) {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem("user");
        console.warn(user);
        setSession(user);
        setLoading(false);
        if (!user) {// i was checking (!session) which was wrong 
            //as pointer reached here before setting of session and
            // session was null at that point of time
          redirect("/");
        }
      }
    }, []);
    if (loading) {
        return <CircularIndeterminate />;  // Display the loading component while loading
      }
    if (!session) {
      return null; // Render nothing or a loading indicator while checking session
    }

    return <Component {...props} />;
  };
}
// const x=function(){
//   console.log("x")
// }
// export {hidbeforloginsign,x}








