// Import the necessary Firebase modules
import { doc, getDoc } from "firebase/firestore";
import { db } from "../db"; // Assuming you have your Firestore instance set up


export const productValidator = async (yourCollection, yourDocumentId) => {
  // Define the document path
  const docRef = doc(db, yourCollection, yourDocumentId);
  let docExists;
  // Fetch the document
  getDoc(docRef).then((docSnap) => {
    docSnap.exists() ? (docExists = true) : (docExists = false);
  }).then((docSnap) => {
    return docExists;
  })
};
