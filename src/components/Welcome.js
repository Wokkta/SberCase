import Benefits from "./Benefits";
import Catalog from "./Catalog";
import Header from "./Header";
import Try_Btn from "./Ui/Try_Btn";
import Versions from "./Versions";
import Footer from "./Footer";
import Layout from "./Layout";
export default function Welcome(props) {
  return (
    <>
      <Layout logged={props.logged}>
        <section className="section-one section">
          {props.balls}
          <div className="slogan slogan-sec-one">
            Создайте <span>подборку </span>мероприятий, секции и курсов{" "}
            <span>под интересы Вашего ребенка</span>
          </div>
          <Try_Btn />
          <div className="image">
            <div className="rocket-boy"></div>
          </div>
        </section>
        {props.balls}
        <Benefits />
        <section className="section-three section">
          {props.balls}
          <Catalog />
          <Try_Btn />
        </section>
        <section className="section-four section">
          {props.balls}
          <Versions />
        </section>
      </Layout>
    </>
  );
}
