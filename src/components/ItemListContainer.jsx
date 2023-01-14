import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore , query ,where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

   /* useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });

        promesa.then((data) => {
            setItems(data);
        })
    }, [id]);*/

    //Proceso para cargar productos en nuestra collection
    /*useEffect(() => {
        const db = getFirestore();
        const itemsCollection= collection(db, "items");

        arrayProductos.forEach((item) => {
            addDoc(itemsCollection,{nombre:item.nombre, caracteristica:item.caracteristica, descripcion:item.descripcion,imagen :item.imagen, precio: item.precio,stock:item.stock,categoria:item.categoria});
        })
    },[]);*/

    //consulta a nuestra collecion de datos
    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection= collection(db,"items");
        
        //en caso de tener id, filtro los productos por id, si no traigo la collection completa
        const q = id ? query(itemsCollection, where("categoria", "==",id)) : itemsCollection;
        
        getDocs(q).then((snapShot)=> {
            setItems(snapShot.docs.map((doc) => (
                {id:doc.id, ...doc.data()}
            )))
        });

    },[id]);
    
    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;