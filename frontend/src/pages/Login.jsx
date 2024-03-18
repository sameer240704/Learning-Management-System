import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("snaptalk-user")) {
      navigate("/");
    }
  }, [navigate]);

  const handleValidation = () => {
    const { username, password } = values;
    toast.dismiss();
    if (username === "") {
      toast.error("Username Is Required");
      return false;
    }
    else if (password === "") {
      toast.error("Password Is Required");
      return false;
    }
    toast.success("Welcome User!")
    navigate('/home')
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (!data.status) {
        toast.error(data.msg);
      }
      if (data.status) {
        localStorage.setItem("snaptalk-user", JSON.stringify(data.currentUser));
        navigate("/");
      }
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
        <form onSubmit={(event) => handleSubmit(event)} className="bg-gray-50 bg-opacity-50 rounded-lg shadow-md px-10 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-2 text-white">Saathi</h1>
            <h2 className="text-lg font-semibold mb-4 text-white">Login</h2>
          </div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full bg-gray-700 rounded-md px-4 py-2 mb-4 text-white"
            onChange={(event) => { handleChange(event) }}
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full bg-gray-700 rounded-md px-4 py-2 mb-4 text-white pr-12"
              onChange={(event) => { handleChange(event) }}
            />
            <div 
                className="absolute top-[20px] transform -translate-y-1/2 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <IoEyeOff /> : <IoEye />}
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-4 relative overflow-hidden transform transition-transform active:scale-95"
            >
              <span className="text">Sign In</span>
            </button>
          </div>
          <span className="text-white block text-center">New Student? <Link to="/register" className="text-blue-900 font-semibold">Sign Up Now</Link></span>
        </form>
      </div>
    </>
  )
}

export default Login;