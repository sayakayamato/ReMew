import { useEffect, useState } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navigate, useLocation } from "react-router-dom";
import { uiConfig, auth } from "../lib/firebase";

import { ref, set, onValue } from "firebase/database";
import { db } from "../lib/firebase";

function FirebaseLogin() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // 現在のURLの確認(無限ループ防止)
  const location = useLocation();
  const isOnLoginPage = location.pathname === "/login";

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("You have to sign in");
      } else {
        const pathRef = ref(db, "users/" + user.uid);
        const userDoc = await onValue(pathRef, () => {});
        if (!userDoc.exists) {
          await set(pathRef, {
            userId: user.uid,
            displayName: user.displayName,
            userPhoto: user.photoURL,
            // created_at: firebaes.firebase.FieldValue.serverTimestamp(),
          });
        }
      }
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  // 本来いるページと異なる場合はNavigateを返す
  if (!isSignedIn && !isOnLoginPage) return <Navigate replace to="/login" />;
  if (isSignedIn && isOnLoginPage) return <Navigate replace to="/" />;

  if (!isSignedIn) {
    return (
      <div>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    );
  }
  return (
    <div>
      <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
      <div onClick={() => auth.signOut()}>Sign-out</div>
    </div>
  );
}

export default FirebaseLogin;
