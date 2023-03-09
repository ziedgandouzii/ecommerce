import React, { useState, useRef, useEffect } from "react";
import logo from "../../components/assets/images/logo.png";
import { Link } from "react-router-dom";
const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  const logout = () => {
    setloggedin(false);
    localStorage.removeItem("token");
    window.location.href = "/signin";
  };
  const [isloggedin, setloggedin] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setloggedin(true);
    }
  }, []);
  const [openProfile, setOpenProfile] = useState(false);
  const menuRef = useRef(null);
  const imgRef = useRef(null);

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setOpenProfile(false);
    }
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" style={{ width: "60px", height: "60px" }} />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Rechercher un produit..." />
            <span>Chercher</span>
          </div>

          <div className="icon f_flex width">
            <i
              className="fa fa-user icon-circle"
              ref={imgRef}
              style={{ cursor: "pointer" }}
              onClick={() => setOpenProfile(!openProfile)}
            ></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {openProfile && (
        <div
          className="flex dropDownProfile"
          ref={menuRef}
          style={{ zIndex: "55" }}
        >
          {isloggedin ? (
            <ul className="flex">
              <Link to="Profile">
                <li>Mon Profil</li>
              </Link>
              <li onClick={logout}>se deconnecter</li>
            </ul>
          ) : (
            <ul className="flex">
              <Link to="/signin">
                <li>Se connecter</li>
              </Link>
              <Link to="/signup">
                <li>Creer un compte</li>
              </Link>
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
