import { useState } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = ()=>{
  const[islogin,setIsLogin] = useState(true);
    return(
      <div className="app">
    <div className="header">
          <img className="logo" src={LOGO} />
         <span>Kalaburagi</span>
        </div>
        <div className="nav-items">
          <ul>
          <li>
           <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <a>Contact</a>
            </li>
            <li>
            <a>Cart</a>
            </li>
            <li>
              {islogin ? <button className="login" onClick={()=>{setIsLogin(false)}}>Login</button> : <button onClick={()=>{setIsLogin(true)}} className="logout">Logout</button>}
              
              </li>
          </ul>
        </div>
        </div>
    )
  }

  export default Header;