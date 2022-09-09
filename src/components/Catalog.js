import {  Link } from "react-router-dom";
import "../styles/catalog.css";
export default function Catalog(items) {
  return (
    <>
      <div className="slogan category-slogan">
        Подборка в различных сферах деятельности
      </div>
      <div className="catalog">
        <Link to="/education">
          <a href="#" alt="" className="catalog-category catalog-category-1">
            <div className="catalog-category-img-1" />
            Образование
          </a>
        </Link>
        <a href="#" alt="" className="catalog-category catalog-category-2">
          <div className="catalog-category-img-2" />
          творчество
        </a>
        <a href="#" alt="" className="catalog-category catalog-category-3">
          <div className="catalog-category-img-3" />
          досуг
        </a>
        <a href="#" alt="" className="catalog-category catalog-category-4">
          <div className="catalog-category-img-4" />
          спорт
        </a>
        <a href="#" alt="" className="catalog-category catalog-category-5">
          <div className="catalog-category-img-5" />
          соц. активность
        </a>
      </div>
    </>
  );
}
