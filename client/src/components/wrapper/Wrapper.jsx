import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Livraison Gratuit",
      decs: "Nous offrons des prix compétitifs sur nos plus de 1000 de produits, quelle que soit leur gamme.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Paiement sécurisé",
      decs: "Nous offrons des prix compétitifs sur nos plus de 1000 de produits, quelle que soit leur gamme.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Achetez en toute confiance",
      decs: " Nous offrons des prix compétitifs sur nos plus de 1000 de produits, quelle que soit leur gamme.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Assistance 24/7",
      decs: " Nous offrons des prix compétitifs sur nos plus de 1000 de produits, quelle que soit leur gamme.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
