import React from "react"
import ProductCard from "./ProductCard"
import "./style.css"
import { useParams } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const { id } = useParams();
  return (
    <>
      <section className='products background'>
        <div className='container d_flex'>
          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                {id ?(
                  <h2>{id}</h2>
                ):(
                <h2>Produits</h2>
                )}
              </div>
            </div>
            <div className='product-content  grid1'>
              <ProductCard name={id} addtoCard={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
