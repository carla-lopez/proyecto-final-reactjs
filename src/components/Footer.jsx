import React from "react";




const Footer =() =>{
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <a href="/" rel="noreferrer" className="fab fa-whatsapp mx-1"> Whatsapp HanmaRTX</a>
                    <a href="/" rel="noreferrer" className="fab fa-instagram mx-1"> Instagram HanmaRTX</a>
                    <a href="/" rel="noreferrer" className="fab fa-facebook mx-1"> Facebook HanmaRTX</a>
                    <a href="/" rel="noreferrer" className="fab fa-youtube mx-1">Canal Youtube HanmaRTX</a>
                </div>
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
                    <p><img src="/public/logo.png" alt="logo HanmaTRX" width="40"></img> © HANMATRX</p>
                </div>
            </div>

        </div>
    )

}

export default Footer;