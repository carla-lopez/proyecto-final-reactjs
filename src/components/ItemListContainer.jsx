import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore , query ,where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(true);
    const {id} = useParams();

    //consulta a nuestra collecion de datos
    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection= collection(db,"items");
        
        //en caso de tener id, filtro los productos por id, si no traigo la collection completa
        const q = id ? query(itemsCollection, where("categoria", "==",id)) : itemsCollection;
        
        getDocs(q).then((snapShot)=> {
            setItems(snapShot.docs.map((doc) => (
                {id:doc.id, ...doc.data()}
            )));
            setLoading(false);
        });

    },[id]);
    
    return (
        <div className="container">
            {loading ? <Loading />: <ItemList items={items} />}
        </div>
    )
}

export default ItemListContainer;