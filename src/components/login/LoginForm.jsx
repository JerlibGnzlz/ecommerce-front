import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const divStyle = {
    backgroundColor: "#0d0d0d",
    backgroundImage: "linear-gradient(149deg, #0d0d0d 59%, #404040 83%)",
  };

  return (
    <div className="flex w-screen bg-zinc-100 text-white h-screen justify-center items-center m-auto ">
      <div
        style={divStyle}
        className="flex flex-col text-center h-3/4  w-2/5 rounded-md py-10 bg-primary  "
      >
        <form className="">
          <div className="mb-6 text-4xl font-bold  ">
            <label>Login</label>
          </div>
          <div className="mb-8 text-md">
            <p>Welcome!</p>
          </div>
          <div className="mb-3 flex justify-center ">
            <div className="bg-tertiary w-6 rounded-l flex justify-center items-center  pl-3">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <input
              type="email"
              className="p-2 w-60 outline-none rounded-r text-sm  text-black font-bold placeholder:text-primary bg-tertiary placeholder:pl-2 "
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 flex justify-center ">
            <div className="bg-tertiary w-6 rounded-l  flex justify-center items-center pl-3">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type="password"
              className="p-2 w-60 outline-none rounded-r text-sm text-black font-bold placeholder:text-primary bg-tertiary placeholder:pl-2"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <Link to="">
              <p className="text-xs">Forgot your password?</p>
            </Link>
          </div>
          <div className="mb-3 flex justify-center ">
            <input
              type="submit"
              className="p-2 w-64 outline-none rounded  text-primary bg-white font-bold hover:bg-tertiary hover:cursor-pointer hover:text-white "
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
