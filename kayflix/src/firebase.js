import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC8CERYSwnN8rzc93lZn-xB9TbJBxj1ROI",
  authDomain: "kayflix.firebaseapp.com",
  projectId: "kayflix",
  storageBucket: "kayflix.firebasestorage.app",
  messagingSenderId: "494879871695",
  appId: "1:494879871695:web:b2f22454f96e96818cddba",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name: name,
            authProvider: "local",
            email: email
        })
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}


const signin = async (email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const signout = async ()=> {signOut(auth)}

export {auth, db, signin, signout, signup}