import Try_Btn from "./Ui/Try_Btn.js";

export default function Education(params) {
  return (
    <div className="education-sub-page">
      <div className="exit-arrow" />
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
