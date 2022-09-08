import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/reg_pg_2.css";
export default function Reg_pg_2(params) {
  const [code, setCode] = useState("");
  const [resend, setResend] = useState(true);
  function handleResend(params) {
    setResend(false);
    setTimeout(() => {
      setResend(true);
    }, 30000);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCode("")
  }
  return (
    <>
      <Header />
      <section className="reg-page-2">
        <div className="img">
          <img className="profile" />
        </div>
        <span>На указанную почту отправлен код регистрации</span>
        <form className="reg-form-1" onSubmit={handleSubmit}>
          <input
            type="text"
            className="code"
            placeholder="Введите код"
            onChange={(e) => setCode(e.target.value)}
          />
          {resend ? (
            <button className="resend" onClick={handleResend}>Отправить код повторно</button>
          ) : (
            <span>Повторная отправка через 30 секунд</span>
          )}
          <button className="registred-btn" disabled={!code}>
            <Link to="/registred">готово</Link>
          </button>
        </form>
      </section>
    </>
  );
}
