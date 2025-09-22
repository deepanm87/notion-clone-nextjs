import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBr5ODzvDQaB7Jt9kyXVVUXiRcqfdwtRf8",
  authDomain: "notion-clone-nextjs-26b96.firebaseapp.com",
  projectId: "notion-clone-nextjs-26b96",
  storageBucket: "notion-clone-nextjs-26b96.firebasestorage.app",
  messagingSenderId: "685053843945",
  appId: "1:685053843945:web:4eb97b541b43a274d51378"
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }