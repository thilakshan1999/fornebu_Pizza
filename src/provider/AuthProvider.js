import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    setAuthLoading(true);
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("current user");
      console.log(currentUser);
      setUser(currentUser);
      if (currentUser) {
        // 🔹 Fetch user details from Firestore
        const userDocRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userDocRef);
        if (userSnap.exists()) {
          setUserDetails(userSnap.data());
          console.log("user data");
          console.log(userSnap.data());
        } else {
          setUserDetails(null);
        }
      } else {
        setUserDetails(null);
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserDetails(null);
  };

  const checkIfUserIsAdmin = () => {
    if (!user) return false;
    return userDetails?.isAdmin || false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userDetails,
        setUserDetails,
        setUser,
        authLoading,
        logout,
        openLogIn,
        setOpenLogIn,
        openSignIn,
        setOpenSignIn,
        checkIfUserIsAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
