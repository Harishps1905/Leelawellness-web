import { app } from "../config";
import { getFirestore, doc, getDoc, getDocs, collection, query, setDoc  } from "firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export const addOrUpateProduct = async ({id, productname, price, ingredients}) => {
    try {
      console.log("id", id);
        const citiesRef = collection(db, "products");
        await setDoc(doc(citiesRef, id), {
            productname: productname,
            price: price,
            ingredients: ingredients });
    } catch (error) {
      throw error;
    }

};
