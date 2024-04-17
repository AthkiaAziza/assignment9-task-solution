import { createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const updateUserInformation = (userInformation, name, image) => {
        updateProfile(userInformation, {
            displayName: name,
            photoURL: image
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }


    



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('observing current user', currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }


    }, [])

    const authInfo = { user, loading, createUser, signInUser, logOut, signInWithGoogle, signInWithGithub, updateUserInformation }

    return (
        <AuthContext.Provider value={ authInfo }>
            { children }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}

export default AuthProvider;