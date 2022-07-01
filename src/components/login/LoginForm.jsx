import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import {
  faEnvelope,
  faLock,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const divStyle = {
    backgroundColor: "#0d0d0d",
    backgroundImage: "linear-gradient(149deg, #0d0d0d 59%, #404040 83%)",
  };

  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { login, loginWithGoogle } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleLogin = async () => {
    await loginWithGoogle();
    history.push("/");
  };

  return (
    <div className="flex w-screen bg-zinc-100 text-white h-screen justify-center items-center m-auto ">
      <div
        style={divStyle}
        className="flex flex-col text-center h-3/4  w-2/5 rounded-md py-10 bg-primary  "
      >
        <Link to="/">
          <div className="bg-white w-12 p-1 ml-6 text-black hover:bg-tertiary hover:text-white rounded">
            <button>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
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
              type="text"
              className="p-2 w-60 outline-none rounded-r text-sm  text-black font-bold placeholder:text-primary bg-tertiary placeholder:pl-2 "
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
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
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <Link to="">
              <p className="text-xs">Forgot your password?</p>
            </Link>
          </div>

          <div className="mb-6 mt-1">
            <Link to="/register">
              <p className="text-xs">Forgot to register? do it here</p>
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
        <button onClick={googleLogin}>Login With Google</button>
      </div>
    </div>
  );
}

export default LoginForm;
