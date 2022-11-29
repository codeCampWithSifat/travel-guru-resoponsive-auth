import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error || error1) {
    errorElement = (
      <p>
        {error?.message} {error1?.message}
      </p>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div style={{ marginTop: "6rem" }} className="container mx-auto w-50">
      <form onSubmit={handleLogin}>
        <h2 className="text-primary text-center mb-5">Please Login</h2>
        <div className="mb-3">
          <input
            type="email"
            ref={emailRef}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            ref={passwordRef}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <p className="text-danger">{errorElement}</p>
      <p className="mt-3 ">
        New On Travel Gure <Link to="/register">Please Register</Link>
      </p>
      <button type="button"
       className="btn btn-link text-danger"
       onClick={async() => {
        const email = emailRef.current.value;
        const success = await sendPasswordResetEmail(email)
        if(success) {
          toast("Check Your Email And Reset Your Password");
        } else {
          toast("Please Enter Your Email")
        }
       }}
       >
        Reset Your Password
      </button>
      <SocialLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;
