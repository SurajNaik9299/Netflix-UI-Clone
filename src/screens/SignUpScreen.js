import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
import { map } from "../const";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loadingState, setLoadingState] = useState(false);
  const [errorMessageInfo, setErrorMessage] = useState("");
  let loader;

  if (loadingState) {
    loader = (
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    );
  }

  let errorMessage = (
    <h5 className="signUpScreen__errorMessage">{errorMessageInfo}</h5>
  );

  const register = (e) => {
    setLoadingState(true);
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        setLoadingState(false);
        console.log("Start " + authUser + " Finish");
      })
      .catch((error) => {
        console.log(error.code);
        setLoadingState(false);
        setErrorMessage(map.get(error.code));
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      });
  };

  const signIn = (e) => {
    setLoadingState(true);
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        setLoadingState(false);
        console.log("Start This " + authUser + " Finish This");
      })
      .catch((error) => {
        setLoadingState(false);
        console.log(error.code);
        setErrorMessage(map.get(error.code));
        setTimeout(() => {
          setErrorMessage("");
        }, 2000);
      });
  };
  return (
    <div className={loadingState ? "signUpScreen signUpScreen__loading ":"signUpScreen"}>
      {loader}
      
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
        {errorMessage}
      </form>
      </div>
  );
}

export default SignUpScreen;
