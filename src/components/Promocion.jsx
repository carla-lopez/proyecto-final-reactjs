import React from "react";

const Promocion = () =>{
    return (
        <div className="container-fluid bg-light">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-2">
                        <img src={"/src/logo.png"} alt="Logo Hanma" width="123" ></img>
                    </div>
                    <div className="col-md-8 d-flex aling-items-center">
                        <div>

                      <p>© HANMATRX</p>
                      <p>Todos los derechos reservados</p>
                        </div>
                    </div>
                    <div className="col-md-2 aling-items-center text-end">
                        <a href="http://localhost:3000" className="btn btn-success" target={"_blank"} rel="noreferrer" >Visita la tienda</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Promocion;