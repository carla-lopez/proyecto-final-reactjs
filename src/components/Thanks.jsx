import React from "react";
import { Link, useParams } from "react-router-dom";

const Thanks = () => {
    const{id} = useParams();
    return(
        <div className="container">
          <div className="row my-5">
            <div className="col text-center">
                <div class="alert alert-info" role="alert">
                  <h1>Gracias por su compra</h1>
                  <p>Tu orden es: <b>{id}</b></p>

                </div>
                <Link to={"/"} className="btn btn-warning">Volver a la pagina principal</Link>

                
            </div>
          </div>
        </div>
    )
}

export default Thanks;