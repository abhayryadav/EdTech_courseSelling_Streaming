'use client'
import "./coursedetail.css"
export default function handlers({params}){
    console.log(params)
    return(
        
        <div>
            <div>
                
                <div className="coursedit">
                    <div>
                        <h1 className= "courseh1">{params.id}</h1>
                    </div>
                    <div>
                        <h3 className="courseh3">course detail</h3>
                    </div>
                    
                </div>




                <div>
                    
                </div>

            </div>
            
        </div>
    )
}