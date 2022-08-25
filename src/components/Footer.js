export default function Footer(params) {
  return (
    <footer>
      <div className="footer-top">
        <h1 className="slogan">Наши контакты</h1>
        <div className="vk"></div>
        <div className="tg"></div>
      </div>
      <a href="tel:+79999897889" className="phone">
        8 (999) 989-78-89
      </a>
      <div className="mail">school@wr.ru</div>
      <a href="#" className="policy">
        Пользовательское соглашение
      </a>
      <a href="#" className="policy">
        Политика конфиденциальности
      </a>
    </footer>
  );
}
