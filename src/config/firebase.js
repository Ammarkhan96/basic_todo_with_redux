import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9skwI4GxL4a4jvU6NvRXNU4nKw-49V9k",
  authDomain: "todo-with-redux-37b66.firebaseapp.com",
  projectId: "todo-with-redux-37b66",
  storageBucket: "todo-with-redux-37b66.appspot.com",
  messagingSenderId: "1012438922485",
  appId: "1:1012438922485:web:302a7abee97de4c42a01bc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;