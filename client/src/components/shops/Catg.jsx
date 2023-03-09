import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "MATADOR",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "DUNLOP ",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "LIQUI MOLY ",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "CASTROL ",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "ASSAD ",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "FULDA",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Marques</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Voir tous les marques</button>
        </div>
      </div>
    </>
  )
}

export default Catg
