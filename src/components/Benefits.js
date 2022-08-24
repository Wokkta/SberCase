import Try_Btn from "./Try_Btn";

export default function Benefits(params) {
  return(
    <section className="section-two benefits">
        <div className="slogan">
          Помогаем родителям сориентироваться в многообразии курсов, секций,
          мероприятий и сделать правильный выбор.
        </div>
        <div className="graphic"></div>
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
  )
}