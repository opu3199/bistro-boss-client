/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "./firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();


 export const AuthContext=createContext(null)
const Authprovider = ({children}) => {

    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    
    const createregister=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const createsignin=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }

    const googlelogin=()=>{
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }


    const updateprofile=(name,photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
          
    }


    useEffect(()=>{
        return onAuthStateChanged(auth, (user) => {
              setuser(user)
              setloading(false)
           });
         
     },[]) 

    const authentication={
        user,
        loading,
        createregister,
        createsignin,
        logout,
        updateprofile,
        googlelogin

    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}

        </AuthContext.Provider>
    );
};

export default Authprovider;