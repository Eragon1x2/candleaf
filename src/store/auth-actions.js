
import { authActions } from "./auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth } from "../unit/Firebase";
import { signOut } from "firebase/auth";

export const registerUser = (email, password) => {
    return async(dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed up
  dispatch(authActions.setAuth(userCredential.user.accessToken))
  dispatch(authActions.setError({}))
  localStorage.setItem('user', `${userCredential.user.accessToken}`)
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  dispatch(authActions.setError({errorCode, errorMessage}))
  // ..
})
    }
    }
export const loginUser = (email, password) => {
    return async(dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    localStorage.setItem('user', `${userCredential.user.accessToken}`)
    dispatch(authActions.setAuth(userCredential.user.accessToken))
    dispatch(authActions.setError({}))
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    dispatch(authActions.setError({errorCode, errorMessage}))
    
  });
    }
}

export const LoginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return async(dispatch) => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    localStorage.setItem('user', `${result.user.accessToken}`)
    dispatch(authActions.setAuth(result.user.accessToken))
    dispatch(authActions.setError({}))
  }).catch((error) => {
    // Handle Errors here
    const errorCode = error.code;
    const errorMessage = error.message;
    
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
   
    dispatch(authActions.setError({errorCode, errorMessage}))
  });
}
}

export const LogOut = () => {
    return(dispatch) => {
           signOut(auth).then(() => {
            localStorage.removeItem('user');
            dispatch(authActions.setAuth(null));
            }).catch((error) => {
                dispatch(authActions.setError({error}))
            })        
            // redirect('/candleaf')
    }
}