import Cross from "./Ui/Cross"
import {Link, Route} from "react-router-dom"
export default function SubMenu({onClick}) {
  return (
    <>
      <div className="subMenu">
        <Cross onClick={onClick} className="cross" />
        <ul className="sub-list">
          <li className="subItem">
            <Link to="/" onClick={onClick}>
              Главная
            </Link>
          </li>
          <li className="subItem">
            <a  onClick={onClick} href="#ктоМы">
              Кто мы и что мы
            </a>
          </li>

          <a className="subItem" onClick={onClick} href="#компаниям">
            Родителям
          </a>
          <a className="subItem" onClick={onClick} href="#компаниям">
            Компаниям
          </a>
          <a className="subItem" onClick={onClick} href="#footer">
            Контакты
          </a>
          <a className="subItem" onClick={onClick} href="#">
            Личный кабинет
          </a>
        </ul>
      </div>
      <div className="bg_blur"></div>
    </>
  );
}