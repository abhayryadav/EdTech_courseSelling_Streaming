"use client"
export default function notfound({params}){
    console.warn(params)
    return(
        <div>
            <h1 className="nfabt">
                this about page not exist
            </h1>
        </div>
    )
}