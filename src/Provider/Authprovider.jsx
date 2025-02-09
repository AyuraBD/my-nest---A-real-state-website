import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import Auth  from "../Firebase/Firebase.config.js";
import { FacebookAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const fbProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  }

  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(Auth);
  }

  const loginWithFb = () =>{
    setLoading(true);
    return signInWithPopup(Auth, fbProvider);
  }
  const loginWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(Auth, googleProvider)
  }
  const updateUserProfile = (updateData) =>{
    setLoading(true);
    return updateProfile(Auth.currentUser, updateData)
    .finally(()=>setLoading(false));
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(Auth, (user)=>{
      setUser(user);
      setLoading(false);
    });
    return () => unSubscribe;
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    loginWithFb,
    loginWithGoogle,
    logOut,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider