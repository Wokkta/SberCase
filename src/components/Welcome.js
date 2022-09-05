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
        <section className="section-one">
          <div className="slogan slogan-sec-one">
            Создайте <span>подборку </span>мероприятий, секции и курсов{" "}
            <span>под интересы Вашего ребенка</span>
          </div>
          <Try_Btn />
          <div className="image">
            <div className="rocket-boy"></div>
          </div>
        </section>
        <Benefits />
        <section className="section-three">
          <Catalog />
          <Try_Btn />
        </section>
        <section className="section-four">
          <Versions />
        </section>
      </Layout>
    </>
  );
}
