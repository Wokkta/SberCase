import Try_Btn from "./Try_Btn";

export default function Versions(params) {
  return (
    <>
      <div className="versions-list">
        <div className="option option-1">
          <h1 className="slogan">Бесплатная версия</h1>
          <ul className="version-benef">
            <li className="version-benef-item">
              Подборка кружков, секций, мероприятий, курсов в вашем городе и
              онлайн под интересы ребенка
            </li>
          </ul>
        </div>
        <Try_Btn content="Попробовать" />
        <div className="option option-2">
          <h1 className="slogan">За 79 руб./мес.</h1>
          <ul className="version-benef">
            <li className="version-benef-item">Возможности бесплатной</li>
            <li className="version-benef-item">
              Профориентация ребенка с помощью игры -погружения с возможностью
              ознакомиться с основными возможностями выбранной профессии;
            </li>
            <li className="version-benef-item">
              Подбор учебных заведений и программ обучения, сопровождение по
              олимпиадам, конкурсам, хакатонам, которые дают дополнительные
              баллы при поступлении;
            </li>
            <li className="version-benef-item">
              Подборка мероприятий для знакомства с учебным заведением.
            </li>
          </ul>
        </div>
        <Try_Btn content="Попробовать" />
      </div>
    </>
  );
}
