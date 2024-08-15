import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication()


const useFirebase = () => {
    const auth = getAuth();
    const [user,setUser] = useState();
    const [error,setError] = useState('');
    const [loading, setLoading] = useState(true);

    const signInUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
        

    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            setLoading(false)
          });
        return () => unSubscribed;
    },[])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
        
    }

    return {
        signInUsingGoogle,user,error,logOut,setUser,setError,setLoading,loading
    }
       
    ;
};

export default useFirebase;