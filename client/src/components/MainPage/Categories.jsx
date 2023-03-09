import React from "react"
import { useHistory } from "react-router-dom";
const Categories = () => {
  const history = useHistory();
  const data = [
    {
      id:"1",
      cateImg: "./images/category/cat1.png",
      cateName: "voitures",
    },
    {
      id:"2",
      cateImg: "./images/category/cat2.png",
      cateName: "4x4",
    },
    {
      id:"3",
      cateName: "batteries",
      cateImg: "./images/category/cat3.png",
    },
    {
      id:"4",
      cateImg: "./images/category/cat4.png",
      cateName: "accessoires",
    },
    {
      id:"5",
      cateImg: "./images/category/cat5.png",
      cateName: "filtres",
    },
    {
      id:"6",
      cateImg: "./images/category/cat6.png",
      cateName: "lubrifiants",
    },
  ]
  function handleEvent(cateName) {
    history.push(`/produits/${cateName}`);
   }
  return (
    <>
      <div className='category'>
      <div className='catgrories d_flex'>
            <h4>
              Categories
            </h4>
          </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} onClick={()=>handleEvent(value.cateName)}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
