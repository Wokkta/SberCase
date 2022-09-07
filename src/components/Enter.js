import Header from "./Header";
import "../styles/reg_pg_1.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Enter(params) {
  const [mail,setMail] = useState('');
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setMail("")
    setPassword("")
  }
  return (
    <>
      <Header />
      <section className="reg-page-1">
        <div className="img">
          <img className="profile" />
        </div>

        <span>Укажите, пожалуйста, данные для регистрации</span>
        <form className="reg-form-1" onSubmit={handleSubmit}>
          <input
            type="text"
            className="mail"
            placeholder="Ваш E-mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="text"
            className="password"
            placeholder="Придумайте пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/">
            <button className="reg-btn">Войти</button>
          </Link>
        </form>
        
      </section>
    </>
  );
  }
