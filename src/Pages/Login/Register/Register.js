import React from "react";

const Register = () => {
  return (
    <div className="container w-50 mx-auto" style={{ marginTop: "6rem" }}>
      <form>
        <div className="mb-3">
          
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Name"
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Accept Our Terms And Conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
