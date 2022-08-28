import Cross from "./Cross"
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
            <Link to="/education" onClick={onClick}>
              Кто мы и что мы
            </Link>
          </li>
          <li className="subItem">Родителям</li>
          <li className="subItem">Компаниям</li>
          <li className="subItem">Контакты</li>
          <li className="subItem">Личный кабинет</li>
        </ul>
      </div>
      <div className="bg_blur"></div>
    </>
  );
}