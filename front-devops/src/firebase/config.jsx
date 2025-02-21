import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqY5y6MadOM2cpGm7DY2bgONxvk7KLT3k",
  authDomain: "unimar-start-devops-811ec.firebaseapp.com",
  projectId: "unimar-start-devops-811ec",
  storageBucket: "unimar-start-devops-811ec.firebasestorage.app",
  messagingSenderId: "684613615443",
  appId: "1:684613615443:web:cbdf797ab5e06e815caba6",
  measurementId: "G-400HWR50KE"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }