import "../styles/reg_pg_3.css";
import Header from "./Header";
import { Link } from "react-router-dom";
export default function Reg_pg_3(params) {
  return (
    <>
      <Header />
      <section className="reg-page-2">
        <div className="img">
          <img className="profile" />
        </div>
        <span className="reg-txt">
          Вы <br />
          успешно <br />
          зарегистрированы!
        </span>
        <Link to="/enter">
          <button className="reg-btn">ВХОД</button>
        </Link>
      </section>
    </>
  );
}
