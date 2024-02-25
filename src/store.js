import { createStore } from "redux";
import rootReducer from "./todoRedux/reducers";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

const store = createStore(rootReducer)

export default store