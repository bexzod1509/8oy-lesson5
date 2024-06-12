import React from "react";
import "./Navbar.css";
import location from "../../assets/location.png";
import down from "../../assets/down.png";
import phone from "../../assets/phone.png";
import cart from "../../assets/cart.png";
import links from "../../assets/links.png";
import discount from "../../assets/discount.png";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="a">
        <div className="container">
          <div className="a1">
            <div className="a2">
              <p>Гарантия свежести</p>
              <p>Доставка и оплата</p>
              <p>Оптовые поставки</p>
              <p>Контакты</p>
            </div>
            <div className="a3">
              <div className="a4">
                <img src={location} alt="" />
                <p>Санкт-Петербург</p>
                <img src={down} alt="" />
              </div>
              <div className="a4">
                <img src={phone} alt="" />
                <p>8 812 309-82-88</p>
              </div>
              <div className="a4">
                <img src={cart} alt="" />
                <p>В корзине (4 товара)</p>
              </div>
              <img src={links} alt="" />
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="a5">
            <div className="a6">
              <p>СЛАДКИЕ ДНИ</p>
              <img src={discount} alt="" />
            </div>
            <div className="a6">
              <p>подарочные наборы</p>
              <img src={down} alt="" />
            </div>
            <p>Собрать набор</p>
            <img src={logo} alt="" />
            <p>Создать дизайн</p>
            <div className="a6">
              <p>КОМПАНИЯМ</p>
              <img src={down} alt="" />
            </div>
            <div className="a6">
              <p>ВЕСЬ КАТАЛОГ</p>
              <img src={down} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
