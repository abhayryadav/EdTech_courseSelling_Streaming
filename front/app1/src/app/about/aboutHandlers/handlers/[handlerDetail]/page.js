export default function handlers({params}){
    console.log(params)
    return(
        
        <div>
            <div className="handlerslistdiv1in1">
                <div>
                    <h1 className= "hander_name">{params.handlerDetail}</h1>
                </div>
                <div>
                    <h3 className="handlisttop">details</h3>
                </div>
                    
           
            </div>
            
        </div>
    )
}