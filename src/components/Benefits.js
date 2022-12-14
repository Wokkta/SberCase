import Try_Btn from "./Ui/Try_Btn";
import "../styles/benefits.css";
export default function Benefits(params) {
  return (
    <>
      <section className="section-two benefits section" id="ктоМы">
        {/*<BallsGenerator value={30} />*/}
        <div className="slogan slogan-sec-two">
          <span>Помогаем</span> родителям
          <br /> сориентироваться в многообразии
          <br /> курсов, секций, мероприятий и<span> сделать</span>
          <br /> <span>правильный выбор.</span>
        </div>
        <div className="image-2">
          <div className="graphic"></div>
        </div>

        <h2 className="sec-two__title">Вы получите:</h2>
        <ul className="benefits_list">
          <li className="benefits_list-item">
            подборку секций и кружков в вашем городе;
          </li>
          <li className="benefits_list-item">
            информацию о мероприятиях для развития вашего ребенка;
          </li>
          <li className="benefits_list-item">
            возможность попробовать профессию с помощью игры;
          </li>
          <li className="benefits_list-item">
            гайд по олимпиадам и конкурсам для успешного поступления;
          </li>
          <li className="benefits_list-item">траекторию развития.</li>
        </ul>
        <Try_Btn />
      </section>
    </>
  );
}