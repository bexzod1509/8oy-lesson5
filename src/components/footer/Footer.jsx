import React from "react";
import "./Footer.css";
import burger from "../../assets/burger.png";
import truck from "../../assets/truck.png";
import flour from "../../assets/flour.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import wk from "../../assets/wk.png";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="d">
          <div>
            <div className="d1">
              <div className="d2">
                <img src={burger} alt="" />
                <p>Готовим вручную и с любовью</p>
              </div>
              <div className="d2">
                <img src={truck} alt="" />
                <p>Доставимв день заказа</p>
              </div>
              <div className="d2">
                <img src={flour} alt="" />
                <p>100 процунтов миндальная мукаи натуральные ингредиенты</p>
              </div>
            </div>
            <span>
              © 2021 Макароншоп ООО "Квантум", Санкт-Петербург, улица Маршала
              Тухачевского, дом 22
            </span>
          </div>
          <div className="d3">
            <h1>Информация</h1>
            <p>О компании</p>
            <p>Гарантии вкуса и свежести</p>
            <p>Доставка и оплата</p>
            <p>Контакты</p>
          </div>
          <div className="d3">
            <h1>Каталог десертов</h1>
            <p>Готовые наборы</p>
            <p>Собрать свой набор</p>
            <p>Наборы с печатью</p>
            <p>Свадебные предложения</p>
            <p>Акции</p>
          </div>
          <div className="d3">
            <h1>ДЛЯ БИЗНЕСА</h1>
            <p>Корпоративные подарки</p>
            <p>Для юридических лиц</p>
            <p>Оповикам</p>
          </div>
          <div className="d4">
            <h1>+7 (812) 309 82 88</h1>
            <p>с 9:00 до 21:00</p>
            <div className="d5">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={wk} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
