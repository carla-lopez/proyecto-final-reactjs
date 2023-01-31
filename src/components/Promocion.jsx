import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faCreditCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Promocion = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container py-4">
        <div className="row">
            <div className="col-md-4 aling-items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                size="2x"
                width="250"
              ></FontAwesomeIcon>
              <h5>RETIRÁ GRATIS TU COMPRA</h5>
              <p>Nos encontramos de lunes a sabados de 10 a 19</p>
              <p>Calle falsa 123 - Potrero de los funes (San Luis)</p>
            </div>
            <div className="col-md-4">
              <FontAwesomeIcon
                icon={faCreditCard}
                size="2x"
                width="250"
                
              ></FontAwesomeIcon>
              <h5>ELEGÍ EL MEDIO DE PAGO</h5>
              <p>Tarjetas de crédito o transferencia</p>
           
            </div>
            <div className="col-md-4">
              <FontAwesomeIcon
                icon={faTruck}
                size="2x"
                width="250"
              ></FontAwesomeIcon>
              <h5>ENVIAMOS A TODO EL PAIS</h5>
              <p>Envío gratis en compras mayores a $20.000</p>
              <p>Tiempo de entrega: 1-5 días hábiles</p>
            </div>
            <div className="col-md-6">
              <img
                src={process.env.PUBLIC_URL + "/logo.png"}
                alt="Logo Hanma"
                width="110"
              ></img>
            </div>
            <div className="col-md-8 d-flex aling-items-center">
              <div>
                <p>© HANMATRX</p>
                <p>Todos los derechos reservados</p>
              </div>
            </div>
            <div className="col-md-4 aling-items-center text-end">
              <a
                href="/src/components/json/productos.json"
                className="btn btn-success"
                rel="noreferrer"
              >
                Visita la tienda
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Promocion;
