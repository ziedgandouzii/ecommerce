import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  const history = useHistory();
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  const commander = () => {
    localStorage.setItem("cart", JSON.stringify(CartItem));
    history.push("/delivery");
  };
  // prodcut qty total
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">
                Aucun article n'est ajouté au panier
              </h1>
            )}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00 DT* {item.qty}
                      <span>{productQty}.00 DT</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button className="removeCart">
                        <i
                          className="fa-solid fa-xmark"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>RÉSUMÉ DU PANIER</h2>
            <div className=" d_flex">
              <h4>Prix Totale :</h4>
              <h3>{totalPrice}.00 DT</h3>
              <div className=" d_flex">
                <Button
                  variant="primary"
                  onClick={commander}
                  style={{ cursor: "pointer" }}
                >
                  Commander
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
