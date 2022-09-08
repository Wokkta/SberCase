import Benefits from "./Benefits";
import Catalog from "./Catalog";
import Header from "./Header";
import Try_Btn from "./Ui/Try_Btn";
import Versions from "./Versions";
import Footer from "./Footer";
import Layout from "./Layout";
import "../styles/Welcome.css"
export default function Welcome({logged,setLogged,balls}) {
  return (
    <>
      <Layout logged={logged} setLogged={setLogged}>
        <section className="section-one section" id="">
          {balls}
          <div className="slogan slogan-sec-one">
            Создайте <span>подборку </span>мероприятий, секции и курсов{" "}
            <span>под интересы Вашего ребенка</span>
          </div>
          <Try_Btn />
          <div className="image-1">
            <div className="rocket-boy"></div>
          </div>
          <div className="balls">
            <div className="ball-11"></div>
            <div className="ball-22"></div>
            <div className="ball-33"></div>
          </div>
        </section>
        {balls}
        <Benefits id="ктоМы" />
        <section className="section-three section" id="1">
          {balls}
          <Catalog />
          <Try_Btn />
        </section>
        <section className="section-four section" id="компаниям">
          {balls}
          <Versions />
        </section>
      </Layout>
    </>
  );
}
