import Benefits from "./Benefits";
import Catalog from "./Catalog";
import Header from "./Header";
import Try_Btn from "./Try_Btn";
import { useState } from "react";
export default function Welcome(props) {
  return (
    <>
      <Header logged={props.logged} />
      <section className="section-one">
        <div className="slogan slogan-sec-one">
          Создайте <span>подборку </span>мероприятий, секции и курсов{" "}
          <span>под интересы Вашего ребенка</span>
        </div>
        <Try_Btn />
        <div className="rocket-boy"></div>
      </section>
      <Benefits />

      <section className="section-three">
        <Catalog />
        <Try_Btn />
      </section>
      <section className="section-four">
        
      </section>
    </>
  );
}
