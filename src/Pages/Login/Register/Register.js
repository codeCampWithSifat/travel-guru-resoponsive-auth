import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [passwordError, setPasswordError] = useState("")
    const navigate = useNavigate();
   
    let errorElement;
    if (error) {
      errorElement = <p>{error?.message}</p>
    }
    if (loading) {
      return <Loading />
    }
    if (user) {
      navigate("/home")
    }

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    if(password !== password2) {
      setPasswordError("Your Password Not Matched")
      return
    }

    createUserWithEmailAndPassword(email, password)
  };
  return (
    <div className="container w-50 mx-auto" style={{ marginTop: "6rem" }}>
      <form onSubmit={handleRegistration}>
        <h2 className="text-primary mb-4 text-center">
          Registered Your Account
        </h2>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Your Password"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password2"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            required
          />
        </div>
         <h4 className="text-danger mt-2">{passwordError}</h4>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name="checked"
            className="form-check-input"
            id="exampleCheck1"
            required
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Accept Our Terms And Conditions
          </label>
        </div>
        <p className="text-danger">{errorElement}</p>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>

        <p className="mt-3">
          Already Registered <Link to="/login">Please Login</Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Register;
