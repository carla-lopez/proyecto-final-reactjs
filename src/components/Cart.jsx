import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart, cartTotal, removeItem ,clear , sumTotal } = useContext(CartContext);

  if (cartTotal() === 0) {
    return (
      <div className="container">
        <div className="row m-5">
          <div className="col-md-12 text-center">
            <div classname="alert alert-danger" role="alert">
              No se encontraron productos en el Carrito</div>
              <Link to={"/"} className="btn btn-warning">Volver a la pagina principal</Link>
            </div>
          </div>
        </div>
    );
  }

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-12">
          <table className="table">
                <thead>
                    <tr>
                        <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-warning" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                    </tr>
                <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">Producto</th>
                    <th scope="col" className="text-end">Cantidad</th>
                    <th scope="col" className="text-end">Precio</th>
                    <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                    {cart.map(item => (

                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.nombre} width={80}></img></td>
                            <td className="aling-middle">{item.nombre}</td>
                            <td className="aling-middle text-end">{item.quantity}</td>
                            <td className="aling-middle text-end">${item.quantity * item.precio}</td>
                            <td className="aling-middle text-end"><Link onClick={() => {removeItem(item.id)}} title={"Eliminar Producto"}><FontAwesomeIcon icon={faTrash} alt={"Eliminar producto"} width={32}></FontAwesomeIcon></Link></td>

                            </tr>
                    ))

                    }
                    <tr>
                        <td colSpan={2}>&nbsp;</td>
                        <td className="text-end"><b>Total a Pagar</b></td>
                        <td className="text-end"><b>${sumTotal()}</b></td>
                        <td className="text-end"><Link to={"/checkout"} className="btn btn-warning">Finalizar compra</Link></td>
                    </tr>
                </tbody>
            </table>
            </div>
      </div>
    </div>
  );
};

export default Cart;
