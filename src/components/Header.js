import Logo from "./Ui/Logo"
import { useState } from "react";
import SubMenu from "./SubMenu";
export default function Header(props) {
  const [logo,setLogo] = useState(true)
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
        {props.logged || <button className="header__enter-btn">ВХОД</button>}
      </header>
    </>
  );
  
}