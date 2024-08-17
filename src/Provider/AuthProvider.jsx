
import { createUserWithEmailAndPassword, deleteUser, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from "react";
import useAxios from "../Hooks/useAxios";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const axios = useAxios()
    const [loading, setLoading] = useState(true)
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile= (name, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }


    


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unSubscribe()
    })
        

    const authInfo={
        user,
        loading,
        logIn,
        signUp,
        logOut,
        updateUserProfile,
        googleLogin,
        githubLogin,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node
}

export default AuthProvider;