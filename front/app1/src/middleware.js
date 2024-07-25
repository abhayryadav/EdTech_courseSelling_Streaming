
import { NextResponse } from "next/server";

export default function middlewareee( req ){
console.log("middlewareee")
//no one can access the hidden page  , it will redirect to login page
    if (req.nextUrl.pathname==="/hidden") {
        return NextResponse.redirect(new URL("/",req.url)) //x
    }
}













//i fyou want  x  to route on multiple urls use matcher and remove if else from above
// export const config ={
//     matcher :[ "/about/aboutHandlers/:path*","/hidden"]
// }

// dem0 down 

// import { NextResponse } from "next/server";
// export default function middlewareee( req ){
// console.log("middlewareee")

//         return NextResponse.redirect(new URL("/",req.url)) //x
   
// }
//  export const config ={
//      matcher :[ "/about/aboutHandlers/:path*","/hidden"]
//  }