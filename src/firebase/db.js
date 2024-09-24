import firebase from "firebase/compat/app";
import { app } from "./config";
import { getFirestore, doc, getDoc, getDocs, collection, query, setDoc, deleteDoc   } from "firebase/firestore";
import {productValidator} from "./utils/productValidator";
import {addOrUpateProduct} from "./utils/addOrUpateProduct";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//get all products from the db
export const getProducts = async () => {
    try {
        let products= [];
        const querySnapshot = await getDocs(query(collection(db, "products")));
        querySnapshot.forEach((doc) => products.push({...doc.data(), id: doc.id}));
        return products;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw "Error Getting Product: " + error;
    }
  };
  
//get add a product to the db
export const addProduct = async (product) => {
    try {
      let prod = await productValidator("products", product.id.toString());
      if (!prod) {
        await addOrUpateProduct(product)
        return "Product added successfully";
      }
      throw new Error("Product already exists");
    } catch (error) {
      throw "Error Adding Product: " + error;
    }
  };
    
//get update a product from the db
export const updateProduct = async (product) => {
    try {
        let prod = await productValidator("products", product.id);
        console.log("prod",prod);
        if (prod) {
            await addOrUpateProduct(product);
            return "Product updated successfully";
        }
        throw new Error("Product not found");
    } catch (error) {
      throw "Error Updating Product: " + error;
    }
  };


  
//get delete a product from the db
export const deleteProduct = async (id) => {
  try {
      let prod = await productValidator("products", id);
      console.log("prod",prod);
      if (prod) {
        await deleteDoc(doc(db, "products", id));
        return "Product Deleted successfully";
      }
      throw new Error("Product not found");
  } catch (error) {
    throw "Error Deleting Product: " + error;
  }
};

export {db};