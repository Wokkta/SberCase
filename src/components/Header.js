import Logo from "./Ui/Logo"
import { useState } from "react";
import {Link} from "react-router-dom"
import SubMenu from "./SubMenu";
export default function Header({logged,setLogged}) {
  const [logo,setLogo] = useState(true)
  console.log(logged);
  function handleLogin(params) {
    console.log(logged);
    setLogged(!logged)
  }
  function handleClick() {
    setLogo(!logo)
  }
  return (
    <>
      <header>
        {logo ? (
          <Logo onClick={handleClick} />
        ) : (
          <SubMenu onClick={handleClick} />
        )}
        {!logged || (
          <Link to="/reg1">
            <button className="header__enter-btn" onClick={handleLogin}>ВХОД</button>
          </Link>
        )}
      </header>
    </>
  );
  
}