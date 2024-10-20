import React, { useState } from "react";
import { FaFacebook, FaApple, FaGoogle } from "react-icons/fa";
import { auth } from "../../../../../Backend/firebase-main";
import { GoogleAuthProvide, signInWithPopup } from "firebase/auth";

const SocialSignUp = () => {
  const [error] = useState({});

  const handleGoogleSignIn = () => {
    console.log("handleGoogleSignIn working");
    const provider = new GoogleAuthProvide();
    const results = signInWithPopup(auth, provider);
    console.log(results);
  };

  const handleFacebookSignIn = () => {
    console.log("handleFacebookSignIn working");
  };

  const handleAppleSignIn = () => {
    console.log("handleAppleSignIn working");
  };

  return (
    <div>
      <div className="social-media" style={{ textAlign: " center" }}>
        <div>
          <h1>Google</h1>
          <div className="social-icon" onClick={handleGoogleSignIn}>
            <FaGoogle />
          </div>
          <br></br>
        </div>
        <div>
          <h1>Facebook</h1>
          <div className="social-icon" onClick={handleFacebookSignIn}>
            <FaFacebook />
          </div>
        </div>
        <br></br>
        <div>
          <h1>Apple</h1>
          <div className="social-icon" onClick={handleAppleSignIn}>
            <FaApple />
          </div>
        </div>
      </div>
      {error.length && <h6 className="text-danger text-center p-2">{error}</h6>}
    </div>
  );
};

export default SocialSignUp;
