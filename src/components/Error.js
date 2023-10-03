import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h3 style={{fontSize:"24px"}}>Ooops...!</h3>
            <h4 style={{color:"red",fontSize:"18px"}}>{err.status} : {err.statusText}</h4>
        </div>
    )
}

export default Error;