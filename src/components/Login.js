import React, { useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { useFormik } from "formik";
import { LoginValidation } from "./LoginValidation";
import { useNavigate } from "react-router-dom";

const initialValues = {
  mobile: "",
  role: "",
};

const Login = () => {
  const [generateOTP, setGenerateOTP] = useState("");
  const [userOTP, setUserOTP] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginValidation,
      onSubmit: (values, action) => {
        const otp = Math.floor(1000 + Math.random() * 9000);
        console.log("OTP = " + otp);
        setGenerateOTP(otp);
        setMobile(values.mobile);
        setRole(values.role);
      },
    });

  const OTPChangeHandler = (event) => {
    setUserOTP(parseInt(event.target.value));
  };

  const LoginHandler = () => {
    if (generateOTP === userOTP) {
      let data = { mobile: mobile, role: role };

      localStorage.setItem("login_data", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-full max-w-md">
          {!generateOTP && (
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
              <Input
                type="number"
                name="mobile"
                id="mobile"
                label="Mobile Number"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile && (
                <p className="text-red-700 mb-3">{errors.mobile}</p>
              )}
              <div className="mb-4">
                <label className="mb-2" htmlFor="selectRole">
                  Select Role
                </label>
                <select
                  className="border rounded w-full py-2 px-3"
                  id="selectRole"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                {errors.role && touched.role && (
                  <p className="text-red-700 mb-3">{errors.role}</p>
                )}
              </div>
              <Button type="submit">Generate OTP</Button>
            </form>
          )}
          {generateOTP && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="text-2xl font-bold mb-6 text-center">OTP</h2>
              <Input
                type="number"
                name="otp"
                id="otp"
                label="OTP"
                onChange={OTPChangeHandler}
              />
              <Button type="button" onClick={LoginHandler}>
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
