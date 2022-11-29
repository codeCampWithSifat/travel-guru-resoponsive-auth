import React from "react";
import facebook from "../../../images/social/facebook.png";
import google from "../../../images/social/google.png";
import github from "../../../images/social/github.png";
import auth from "../../../firebase.init";
import { useSignInWithGoogle, useSignInWithGithub,useSignInWithFacebook } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);


  let errorElement;
  if (error || error1 || error2) {
    errorElement = (
      <p>
        {error?.message}  {error1?.message} {error2?.email}
      </p>
    );
  }
  if (loading || loading1 || loading2) {
    return <Loading />
  }
  if (user || user1 || user2) {
    return (
      <div>
        <p>
          Signed In User: {user?.email} {user1?.email} {user2?.email}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-4 d-flex align-items-center ">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 mx-2">Or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        <p>{errorElement}</p>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-secondary b
        text-white w-50 d-block mx-auto"
        >
          <img src={google} alt="" />
          <span className="ms-2">Google Sign Up</span>
        </button>
        <button onClick={() => signInWithFacebook()} className="btn btn-secondary  text-white w-50 d-block mx-auto mt-2">
          <img src={facebook} alt="" />
          <span className="ms-2">Facebook Sign Up</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-secondary text-white w-50 d-block mx-auto mt-2">
          <img src={github} alt="" />
          <span className="ms-2">Github Sign Up</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
