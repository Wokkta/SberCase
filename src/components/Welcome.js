import Header from "./Header";
import Try_Btn from "./Try_Btn";
export default function Welcome(props) {
  return (
    <>
      <Header logged={props.logged} />
      <section className="section-one">
        <div className="slogan">
          Создайте подборку мероприятий, секции и курсов под интересы Вашего
          ребенка
        </div>
        <Try_Btn />
        <div className="rocket-boy"></div>
      </section>
      <section className="section-two">
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
      <section className="section-three">
        <div className="slogan">Подборка в различных сферах деятельности</div>
        <div className="catalog">
          <div className="catalog-category catalog-category-1">
            <img src="#" alt="" className="catalog-category-img-1" />Образование
          </div>
          <div className="catalog-category catalog-category-2">
            <img src="#" alt="" className="catalog-category-img-2" />творчество
          </div>
          <div className="catalog-category catalog-category-3">
            <img src="#" alt="" className="catalog-category-img-3" />досуг
          </div>
          <div className="catalog-category catalog-category-4">
            <img src="#" alt="" className="catalog-category-img-4" />спорт
          </div>
        </div>
      </section>
    </>
  );
}
