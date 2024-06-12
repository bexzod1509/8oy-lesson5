import React, { useState, useEffect } from "react";
import "./Products.css";
import cart from "../../assets/cart.png";
import product from "../../assets/product.png";
import axios from "axios";
import Model from "../model/Model";
import { useSearchParams } from "react-router-dom";
function Products() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(6);
  const [model, setModel] = useState(null);
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    let id = params.get("detail");
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => setModel(res.data))
        .catch((err) => console.log(err));
    } else {
      setModel(null);
    }
  }, [params]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products?limit=${count}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [count]);
  let products = data?.map((el) => (
    <div key={el.id} className="c3">
      <img
        onClick={() => setParams({ detail: el.id })}
        style={{ width: "370px", height: "300px" }}
        src={el.images[0]}
        alt=""
      />
      <h1>{el.title}</h1>
      <p>{el.description}</p>
      <div className="c4">
        <span>{Math.round(el.price * 89)} руб</span>
        <div className="c5">
          <img src={cart} alt="" />
          <h2>В корзину</h2>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="b">
      <div className="container">
        <div className="c">
          <p>
            Главная / Каталог / <b>Готовые наборы</b>
          </p>
          <h1>Готовые наборы</h1>
        </div>
        <div className="c1">
          <p>Свадьба</p>
          <p>Девичник</p>
          <p>День рождения </p>
          <p>8 марта</p>
          <p>23 февраля</p>
          <p>Новый год</p>
          <p>День учителя</p>
          <p>День тренера</p>
          <p>1 сентября</p>
          <p>Пасха</p>
          <p>Без печати</p>
        </div>
        <div className="c2">{products}</div>
        <div className="c6">
          <button disabled={count >= 30} onClick={() => setCount((p) => p + 3)}>
            Показать ещё
          </button>
        </div>
      </div>
      <Model model={model}>
        <div onClick={() => setParams({})} className="over"></div>
        <div className="m">
          <img src={model?.images[0]} alt="" />
          <div>
            <h1>{model?.title}</h1>
            <p>{model?.description}</p>
            <h3>{model?.brand}</h3>
            <h4>{model?.warrantyInformation}</h4>
            <h2>{Math.round(model?.price * 89)} руб</h2>
            <button onClick={() => setParams({})}>Cancel</button>
          </div>
        </div>
      </Model>
    </section>
  );
}

export default Products;
