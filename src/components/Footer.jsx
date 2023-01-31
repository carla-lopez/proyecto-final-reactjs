import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";






const Footer =() =>{
    return(
        <div className="container py-5">
            <div className="row">
            <footer className="footer">
      <a href="https://www.facebook.com/"  className="facebook">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/"  className="twitter">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/"  className="instagram">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </footer>
            </div>
            <div className="row">
                <div className="col-md-10">
                <ul className="nav">
                <li className="nav-item">
                <a className="nav-link text-muted " href="/" target="_blank" rel="noreferrer">Politica de seguridad</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-muted" href="/" target="_blank" rel="noreferrer">Contacto</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link text-muted" href="/" target="_blank" rel="noreferrer">Info</a>
                </li>
                 <li className="nav-item">
                 <a className="nav-link disabled" href="/" target="_blank" rel="noreferrer">Producto</a>
                </li>
                 </ul>
                </div>
                <div className="col-md-2 text-end">
                    <p><img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo HanmaTRX" width="40"></img> © HANMATRX</p>
                </div>
            </div>

        </div>
    )

}

export default Footer;