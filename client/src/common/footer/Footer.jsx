import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
const Footer = () => {
  let location = useLocation();
  return (
    location.pathname !== "/admin" &&
    location.pathname !== "/dashboard" &&
    location.pathname !== "/dashboard/clients" &&
    location.pathname !== "/delivery" && (
      <>
        <footer>
          <div className="container grid2">
            <div className="box">
              <h1>Le Pneumatique</h1>
              <p>
                Crée en 1995, Le pneumatique est l'un des plus anciens
                spécialistes en matière de vente de et réparation de
                pneumatiques parallélisme et équilibrage en Tunisie. Doté d'une
                expérience de plus de 20 ans et constitué d'une équipe de
                passionnés de nouvelles technologies.
              </p>
              <div className="icon d_flex">
                <div className="img d_flex">
                  <i class="fa-brands fa-google-play"></i>
                  <span>Google Play</span>
                </div>
                <div className="img d_flex">
                  <i class="fa-brands fa-app-store-ios"></i>
                  <span>App Store</span>
                </div>
              </div>
            </div>

            <div className="box">
              <h2>Informations</h2>
              <ul>
                <li>A propos de nous</li>
                <li>Conditions de vente</li>
                <li>Connexion</li>
                <li>S'inscrire</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="box">
              <h2>Liens Utiles</h2>
              <ul>
                <li>Conseils Techniques</li>
                <li>Mode de Paiement</li>
                <li>Livraison</li>
                <li>Station Mobile</li>
                <li>Nos Services</li>
              </ul>
            </div>
            <div className="box">
              <h2>Nous Contacter</h2>
              <ul>
                <li>28 Avenue Ibn Khaldoun Riadh El Andalous, Ariana 2058</li>
                <li>Email: contact@lepneumatique.tn</li>
                <li>Telephone: +216 31 576 000</li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    )
  );
};

export default Footer;
