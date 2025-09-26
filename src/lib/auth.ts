import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from "firebase/auth";
import app from "./firebase";

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<void> => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};
