import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";
import { register } from '../../actions/userActions'
import Message from '../../Components/Message'
import LoadingIndicator from '../../Components/LoadingIndicator/LoadingIndicator'



const Regesterme = ({ location, history }) => {
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const redirect = '/'

  const name = "Register";

  const userRegister = useSelector(state => state.userRegister)
  const { error, loading, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
        navigate(redirect)
    }
}, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password != confirmPassword) {
        setMessage('Passwords do not match')
    } else {
        dispatch(register(name, email, password))
    }

}

  return (
    <div className="bg-gradient-to-r from-gray-300 to-blue-200 flex items-center justify-center flex-col h-screen font-montserrat box-border container-togge">
      {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
      <div
        className="bg-[#fff] rounded-[30px] relative overflow-hidden w-[768px] max-w-[100%] min-h-[480px] "
        style={{ boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)" }}
        id="container"
      >
        <div className="absolute top-0 h-full transition-all duration-600 ease-in-out  right-0 w-1/2 z-10">
          <form
            onSubmit={submitHandler}
            className="bg-white h-[100%] flex items-center justify-center flex-col px-10"
          >
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>
            <div className="my-5 mx-0 social-icons">
              <a href="#" className="icon">
                <FaGooglePlusG />
              </a>
              <a href="#" className="icon">
                <FaFacebookF />
              </a>
              <a href="#" className="icon">
                <FaGithub />
              </a>
              <a href="#" className="icon">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="text-sm pb-1">or use your email password</span>
            <input
              className="bg-gray-200 border-none my-2 py-[10px] px-[15px] text-sm rounded-lg w-full outline-none"
              type="text"
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
            <input
              className="bg-gray-200 border-none my-2 py-[10px] px-[15px] text-sm rounded-lg w-full outline-none"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <input
              className="bg-gray-200 border-none my-2 py-[10px] px-[15px] text-sm rounded-lg w-full outline-none"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="bg-gray-200 border-none my-2 py-[10px] px-[15px] text-sm rounded-lg w-full outline-none"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
            <button  type="submit" className="bg-mainColor  text-white text-xs font-semibold uppercase py-[15px] px-[45px] rounded-[12px] font-montserrat tracking-wide hover:bg-blue-500 focus:outline-none focus:border-blue-900 focus:ring  disabled:opacity-50 cursor-pointer mt-[10px]">
              {loading && <LoadingIndicator/>}
            Sign In
            </button>
          </form>
        </div>
        <div className="absolute top-0 right-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out rounded-br-[150px]   rounded-tr-[100px] z-10">
          <div
            className=" text-white relative left-[-100%] h-full w-[200%] transform transition-all duration-600 ease-in-out"
            style={{
              backgroundColor: "#2b4162",
              backgroundImage:
                "linear-gradient(315deg, #2b4162 0%, #12100e 74%)",
            }}
          >
            <div className="toggle-panel toggle-right">
              <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button onClick={(e)=>navigate("/login") } className="bg-mainColor  text-white text-xs font-semibold uppercase py-[15px] px-[45px] rounded-[12px] font-montserrat tracking-wide hover:bg-blue-500 focus:outline-none focus:border-blue-900 focus:ring  disabled:opacity-50 cursor-pointer mt-[10px]">
              <Link to="/login">Sign Up</Link>  
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regesterme;
