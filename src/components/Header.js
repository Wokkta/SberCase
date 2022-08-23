import Logo from "./Logo"
export default function Header(props) {
  return (
    <header>
      <a href="#" className="logo">
        <Logo />
      </a>
      {props.logged || <button className="header__enter-btn">ВХОД</button>}

    </header>
  )
  
}