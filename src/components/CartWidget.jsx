import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const CartWidget =() =>{
    const {cartTotal} = useContext(CartContext);
    return (
        <Link to={"/cart"} className="btn btn-success position-relative">
            <FontAwesomeIcon icon={faShoppingCart} size="1x" color="white" ></FontAwesomeIcon> 
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}
  </span>
  </Link>

    )
}

export default CartWidget;