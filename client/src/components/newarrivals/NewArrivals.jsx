import React from "react"
import Cart from "./Cart"
import "./style.css"
import { useHistory } from "react-router-dom"
const NewArrivals = () => {
  const history = useHistory();
  function redirect () {
    history.push('/produits');
  }
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt=''/>
              <h2>Nouvelles Arrivées</h2>
            </div> 
            <div className='heading-right row ' onClick={redirect} style={{ cursor:'pointer'}}>
              <span>Voir tout</span>
              <i className='fa-solid fa-caret-right'></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
