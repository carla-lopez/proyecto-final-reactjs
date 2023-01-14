import React from "react";
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
//import { useState } from "react";


const Firebase = () => {

    //const [producto, setProducto] = useState({});

    useEffect(() => {
        

        const db= getFirestore();
        const item= doc(db, "items" , "irHNUqCSoq2gTmkFxReD" );

        getDoc(item).then((snapShot) => {
            if(snapShot.exists()) {
                console.log(snapShot.data());
            }else {
                console.log("el producto no existe");
            }

        });
    }, []);

    return (
        <h1>Firestore</h1>
    )
    
}

export default Firebase;