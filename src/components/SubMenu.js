import Cross from "./Cross"
import {Link} from "react-router-dom"
export default function SubMenu({onClick}) {
  return (
    <>
    <div className="subMenu">
      <Cross onClick={onClick} className="cross" />
      <ul className="sub-list">
        <li className="subItem">
          <a href="/">Главная</a>
        </li>
        <li className="subItem">Кто мы и что мы</li>
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