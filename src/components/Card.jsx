import { useEffect, useState } from "react";
import "../App.css";

const Card = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((response) => setProducts(response));
  };

  return (
    <>
      {products.map((product) => (
        <div id={product.id}>
          <div>
            <img src={product.image} className="logo" alt="Vite logo" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{product?.title}</h2>{" "}
            <h2>
              *{product.rating.rate} {"(" + product.rating.count + ")"}
            </h2>{" "}
          </div>
          <p className="read-the-docs">{product.description}</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h2>Price</h2>
            {product.price}
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              {count != 0 && count}
              {" Add to Cart>"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
