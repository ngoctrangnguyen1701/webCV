import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, addDoc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCctJnEMgTZBOOSv45aHdn09hlVz0RR-KM",
  authDomain: "nguyen-ngoc-trang-profile.firebaseapp.com",
  projectId: "nguyen-ngoc-trang-profile",
  storageBucket: "nguyen-ngoc-trang-profile.appspot.com",
  messagingSenderId: "50822758276",
  appId: "1:50822758276:web:e9f4f9880de04a3e5da7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getDocument = async (collectionName, filter) => {
  try {
    if(filter) {
      const q = query(collection(db, collectionName), where(filter.key, filter.operation, filter.value));
      const querySnapshot = await getDocs(q);
      const arr = []
      querySnapshot.forEach((doc) => {
        arr.push({
          id: doc.id,
          data: doc.data()
        })
      }); 
      return arr
    }
  } catch (error) {
    console.log(error)
  }
}

const setDocument = async (collectionName, id, objValue) => {
  console.log('setDocument', id, objValue);
  try {
    const result = await setDoc(doc(db, collectionName, id), objValue);
    return result
  } catch (error) {
    console.log(error)    
  }
}

const addDocument = async (collectionName, objValue) => {
  try {
    const result = await addDoc(collection(db, collectionName), objValue)
    return result
  } catch (error) {
    console.log(error)    
  }
}


export {db, getDocument, setDocument, addDocument}