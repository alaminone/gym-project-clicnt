import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosOpen from "../HOOK/useAxiosOpen";


export const AuthContext = createContext(null);

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const Authprovider = ( {children}) => {

    // const axiosopenApi = useAxiosOpen()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
const axiosopen = useAxiosOpen();
   
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth , provider)
      };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                axiosopen.post('/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('jwt-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('')
                setLoading(false);
            }
            // console.log(currentUser.email)
        });
        return () => {
            return unsubscribe();
          
        }
    }, )

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logInWithGoogle,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;