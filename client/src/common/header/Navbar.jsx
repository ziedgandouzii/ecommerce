import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const style = {
    backgroundColor:'white'
  }
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex' style={style}>
           
   
          </div>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Acceuil</Link>
              </li>
              <li>
                <Link to='/produits'>Produits</Link>
              </li>
              <li>
                <Link to='/achats'>Mes achats</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

           
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
