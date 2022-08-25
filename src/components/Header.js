import Logo from "./Logo"
import Cross from "./Cross";
import { useState } from "react";
import SubMenu from "./SubMenu";
export default function Header(props) {
  const [logo,setLogo] = useState(true)
  function handleClick() {
    setLogo(!logo)
  }
  return (
    <>
    {logo ? <Logo onClick={handleClick} /> : <SubMenu onClick={handleClick}/>}
    <header>
      {props.logged || <button className="header__enter-btn">ВХОД</button>}
    </header>
    </>
  );
  
}