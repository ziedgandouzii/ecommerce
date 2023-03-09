import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
const Head = () => {
  const [isloggedin, setloggedin] = useState("false");
  const [isshowen, setshowen] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let logged = localStorage.getItem("logged");
    if (logged === "true") {
      setloggedin("true");
    } else {
      setloggedin("false");
    }
    if (token) {
      setshowen(true);
    }
    setTimeout(() => {
      setshowen(false);
      setloggedin(false);
      localStorage.setItem("logged", false);
      setloggedin("false");
    }, 2000);
  }, []);
  const close = () => {
    setshowen(false);
    setloggedin(false);
    localStorage.setItem("logged", false);
    setloggedin("false");
  };
  return (
    <>
      {isloggedin === "true" ? (
        isshowen ? (
          <Alert onClose={(e) => close()}>Vous êtes Connecté maintenant</Alert>
        ) : null
      ) : null}
      <section className="head">
        <div className="container ">
          <div className="left">
            <i className="fa fa-phone"></i>
            <label>31 576 000 / 58 244 243 / 56 225 500</label>
            <i className="fa fa-envelope"></i>
            <label> contact@lepneumatique.tn</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
