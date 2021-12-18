import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxzQZrja09yQibSa-qzbGW8Yz--C1J--A",
  authDomain: "linkedin-clone-ceadc.firebaseapp.com",
  projectId: "linkedin-clone-ceadc",
  storageBucket: "linkedin-clone-ceadc.appspot.com",
  messagingSenderId: "802776335476",
  appId: "1:802776335476:web:bc61044f5c6c49dfd5bd21",
};

//init firebase app
//initializeApp(firebaseConfig);

// //init services
// const db = getFirestore();

// // //collection ref
// const colRef = collection(db, "Posts");

// // //get collection data
// getDocs(colRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default getFirestore();
getAuth();
