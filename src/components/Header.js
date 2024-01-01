import { useState,useContext } from "react";
import { LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = ()=>{
  const[islogin,setIsLogin] = useState(true);

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=>store.cart.items);
 
  console.log(cartItems);
    return(
      <div className="flex justify-between items-center shadow-xl">
    <div className="header flex items-center px-5">
          <img className="w-8" src={LOGO} />
         <span className="px-6">Kalaburagi</span>
        </div>
        <div className="nav-items ">
          <ul className="flex p-5">
          <li className="px-3">
           <Link to="/">Home</Link>
            </li>
            <li className="px-3">
            <Link to="/about">About</Link>
            </li>
            <li className="px-3">
              <Link to="/contact">Contact</Link>
            
            </li>
            <li className="px-3">
              <Link to="/Cart">
              🛒<sup className="text-white bg-[#fd771e] h-[15px] w-[15px] inline-block rounded-[50px]" style={{padding:"7px 0px 0px 4px"}}>{cartItems.length}</sup>     
              </Link>
             </li>
            <li className="px-3">
            <Link to="/grocery">Insta Mart</Link>
            </li>
            <li className="px-3">
              {islogin ? <button className="login" onClick={()=>{setIsLogin(false)}}>Login</button> : <button onClick={()=>{setIsLogin(true)}} className="logout">Logout</button>}
              
              </li>
              <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
        </div>
    )
  }

  export default Header;