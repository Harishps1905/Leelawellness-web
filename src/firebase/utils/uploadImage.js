// Import the necessary libraries
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { app } from "../config";

// Initialize Firebase
const storage = getStorage();
const db = getFirestore(app);

// Function to upload an image and store the reference in Firestore
export const uploadImage = async (file) => {
    try {
        // Create a reference to the image in Cloud Storage
        const storageRef = ref(storage, 'product/images/' + file.name);

        // Upload the image to Cloud Storage
        const uploadTask = uploadBytes(storageRef, file);

        // Get the download URL after the upload is complete
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

        console.log('Image :' + downloadURL);

        return downloadURL;
        // Store the download URL in Cloud Firestore
        // await setDoc(doc(db, 'images', file.name), {
        //     imageUrl: downloadURL,
        // });
        // const citiesRef = collection(db, "products");
        // await setDoc(doc(citiesRef, id), {
        //     productname: productname,
        //     price: price,
        //     ingredients: ingredients });
  } catch (error) {
    throw error;
  }

}

// // Example usage
// const fileInput = document.getElementById('imageUpload');
// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   uploadImage(file);
// });