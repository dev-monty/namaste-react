import { LOGO } from "../utils/constant";

const Header = ()=>{
    return(
      <div className="app">
    <div className="header">
          <img className="logo" src={LOGO} />
         <span>Kalaburagi</span>
        </div>
        <div className="nav-items">
          <ul>
          <li>
            <a>Home</a>
            </li>
            <li>
            <a>About</a>
            </li>
            <li>
            <a>Contact</a>
            </li>
            <li>
            <a>Cart</a>
            </li>
          </ul>
        </div>
        </div>
    )
  }

  export default Header;