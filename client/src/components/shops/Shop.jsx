import React from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import { useHistory } from 'react-router-dom';
const Shop = ({ addToCart, shopItems }) => {
  const history = useHistory();
  function redirect () {
    history.push('/produits');
  }
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          <Catg />

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Produits</h2>
              </div>
              <div className='heading-right row ' onClick={redirect} style={{ cursor:'pointer'}}>
              <span>Voir tout</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
