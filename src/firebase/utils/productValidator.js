// Import the necessary Firebase modules
import { doc, getDoc } from "firebase/firestore";
import { db } from "../db"; // Assuming you have your Firestore instance set up


export const productValidator = async (yourCollection, yourDocumentId) => {
  try {
    // Define the document path
    const docRef = doc(db, yourCollection, yourDocumentId);
    // Fetch the document
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return true; // Return true
    } else {
      return null; // Return null if the document does not exist
    }
  } catch (err) {
    console.error(err);
    throw "Error getting document:", err; // Rethrow the error to handle it where the function is called
  }
};
