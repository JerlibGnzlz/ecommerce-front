import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import moment from 'moment'

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const UserRegister = () => {
  const history = useHistory();

  const validate = Yup.object({
    names: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastNames: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
    birthDate: Yup.string()
      .required("Required")
      .test("DOB", "Please choose a valid date of birth", (value) => {
        return moment().diff(moment(value), "years") >= 18;
      }),

  });

  const divStyle = {
    backgroundColor: "#0d0d0d",
    backgroundImage: "linear-gradient(149deg, #0d0d0d 59%, #404040 83%)",
  };

  return (
    <Formik
      initialValues={{
        names: "",
        lastNames: "",
        email: "",
        phone: "",
        birthDate: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        // console.log(values);
        axios.post("http://localhost:3001/users", values).then((response) => {
          console.log("Data added successfully.");
          history.push("/login");
        });
      }}
    >
      {(formik) => (
        <div className="flex w-screen bg-zinc-100 text-white h-screen justify-center items-center m-auto ">
          <div
            style={divStyle}
            className="flex flex-col text-center h-fit w-2/5 rounded-md py-10 bg-primary  "
          >
            {/* Boton de regreso */}
            <Link to="/">
              <div className="bg-white w-12 p-1 ml-6 text-black hover:bg-tertiary hover:text-white rounded">
                <button>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </div>
            </Link>

            <div className="mb-6 text-4xl font-bold  ">
              <label>Register</label>
            </div>
            <div className="mb-8 text-md">
              <p>Welcome!</p>
            </div>

            <Form>
              <TextField
                label="First Name"
                name="names"
                type="text"
                placeholder="John"
              />

              <TextField
                label="Last Name"
                name="lastNames"
                type="text"
                placeholder="Doe"
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="john@dev.com"
              />

              <TextField
                label="Phone"
                name="phone"
                type="text"
                placeholder="1145879293"
              />

              <TextField
                label="BirthDate"
                name="birthDate"
                type="text"
                placeholder="yyyy-mm-dd"
              />

              <div className="mt-20 flex flex-row justify-center space-x-4 ">
                <button
                  className="p-2 w-64 outline-none rounded  text-primary bg-white font-bold hover:bg-tertiary hover:cursor-pointer hover:text-white"
                  type="submit"
                >
                  Register
                </button>

                <button
                  className="p-2 w-64 outline-none rounded  text-primary bg-white font-bold hover:bg-tertiary hover:cursor-pointer hover:text-white"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};
