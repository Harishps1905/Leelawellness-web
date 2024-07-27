import firebase from "firebase/compat/app";
import { app } from "./config";
import { getFirestore, doc, getDoc, getDocs, collection, query, setDoc  } from "firebase/firestore";
import {productValidator} from "./utils/productValidator";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const addOrUpateProduct = async ({id, productname, price, ingredients}) => {
    try {
        const citiesRef = collection(db, "products");
        await setDoc(doc(citiesRef, id), {
            productname: productname,
            price: price,
            ingredients: ingredients });
    } catch (error) {
      throw error;
    }

};




//get all products from the db

export const getProducts = async () => {
    try {
        let products= [];
        const querySnapshot = await getDocs(query(collection(db, "products")));
        querySnapshot.forEach((doc) => products.push({...doc.data(), id: doc.id}));
        console.log(products);
        return products;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error;
    }
  };
  
//get add a product to the db
export const addProduct = async (product) => {
    try {
        addOrUpateProduct(product)
        console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product: ", error);
      throw error;
    }
  };
  
  
//get update a product from the db

export const updateProduct = async (product) => {
    try {
        let prod = true; 
        // await productValidator("products", product.id);
        // // check if product exist
        // console.log("prod",prod);
        if (prod) {
            addOrUpateProduct(product)
            console.log("Product updated successfully");
        }else{
            console.error("Product not found");
        }
    } catch (error) {
      console.error("Error updating product: ", error);
      throw error;
    }
  };



  export {db};