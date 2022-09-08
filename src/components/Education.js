import Try_Btn from "./Ui/Try_Btn.js";
import {  Link } from "react-router-dom";
export default function Education(params) {
  return (
    <div className="education-sub-page">
      <Link to="/#компаниям">
        <div className="exit-arrow" />
      </Link>
      <div className="slogan category-slogan">Образование</div>
      <div className="desc">
        Здесь Вы найдете всевозможные секции, мероприятия, курсы и олимпиады по
        интересующим Вас школьным предметам, проводимые в вашем городе <br />
        или онлайн.
      </div>
      <Try_Btn />
      <div className="image">
        <div className="reading"></div>
      </div>
    </div>
  );
}
