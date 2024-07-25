import Link from "next/link";
export default function handlers(){
    return(
        <div>
            <div className="handlersdiv1in1">
                    <h1 className="handtop">list of handlers</h1>
            </div>
            <div className="handlersdiv2in1">
                    <ul className="ulhandlers">
                        <li className="lihandlers">
                                <Link className="linn" href="handlers/abhay"> abhay</Link>
                        </li>
                        <li className="lihandlers">
                                <Link className="linn" href="handlers/skand"> skand</Link>
                            
                        </li>
                        <li className="lihandlers">
                                <Link className="linn" href="handlers/ramji">ramji </Link>
                            
                        </li>
                        <li className="lihandlers">
                                <Link className="linn" href="handlers/hanumanji">hanumanji </Link>
                            
                        </li>
                        <li className="lihandlers">
                                <Link className="linn" href="handlers/mahadev"> mahadev</Link>
                            
                        </li>
                    </ul>
            </div>
            
        </div>
    )
}