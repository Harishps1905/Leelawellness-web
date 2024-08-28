// Import the necessary libraries
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
const storage = getStorage();
const db = getFirestore(app);

// Function to upload an image and store the reference in Firestore
export const uploadImage = async (file) => {
  try {
    getAuth(app);
    // Create a reference to the image in Cloud Storage
    const storageRef = ref(storage, "product/images/" + file.name);
    console.log("storageRef :" + storageRef);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Return a promise that resolves with the download URL
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state changes, like progress, etc.
          console.log(
            `Upload is ${
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            }% done`
          );
        },
        (error) => {
          // Handle upload errors
          console.error("Upload failed:", error);
          reject(error); // Reject the promise with the error
        },
        async () => {
          // Upload completed successfully, now get the download URL
          try {
            const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", imageUrl);
            resolve(imageUrl); // Resolve the promise with the download URL
          } catch (error) {
            console.error("Error getting download URL:", error);
            reject(error); // Reject the promise with the error
          }
        }
      );
    });
  } catch (error) {
    console.log(error, "upload failed");

    throw error;
  }
};

// // Example usage
// const fileInput = document.getElementById('imageUpload');
// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0];
//   uploadImage(file);
// });
