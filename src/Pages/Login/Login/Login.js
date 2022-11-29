import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div style={{marginTop: "6rem"}} className="container mx-auto w-50">
      <form>
        <h2 className="text-primary text-center mb-5">Please Login</h2>
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Password"
          />
          
        </div>
        <div className="mb-3">
          
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <p className="mt-3 ">New On Travel Gure <Link to="/register">Please Register</Link></p>
    </div>
  );
};

export default Login;
