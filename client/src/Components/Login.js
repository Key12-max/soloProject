import axios from "axios";
import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";
import './styles/Mystle.css'
const Login = ()=>{

    const navigate = useNavigate()
    const[errors, setErrors] = useState('');
   // const [login, setLogin] = useState({
      //  email:'',
        //password: ''
    //})
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    // use useEffect hook to clear errMessage when the user is changing or typing thier name or password

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/home/login",{email, password})
        .then((res)=>{
            console.log(res.data)
            //if(res.data === "Success"){
            navigate('/')
            //}
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
        
    }
    const handleInputChange = (e)=>{
        e.preventDefault();
        setEmail(e.target.value);
        setPassword(e.target.value);
        
    }
    return (
        <div className="content">
            {/*<p  className = {errMsg ? "errmsg" : "offscreen" }aria-live = "assertive">{errMsg}</p> */}
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} className = "col-4 bg-dark p-4 my-5 mx-auto text-light">
                <div className='form-group'>
                    <label htmlFor= "email">Email: </label>
                    <input onChange={handleInputChange} id= "email" type= "email" name = "email" value = {email} className ='form-control'/>
                    {
                        errors.email?
                        <p className='text-danger'>{errors.email.message}</p>:
                        null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleInputChange} type= "password" name = "password" value = {password} id='password' className ='form-control'/>
                    {
                        errors.password?
                        <p className='text-danger'>{errors.password.message}</p>:
                        null
                    }
                </div>
                    <button>Sign In</button>
                    <p>Need an account?
                    <span className="line">
                        {/*Put a react router her */}
                        <a href="/home/addMember">Sign Up</a>
                    </span>
                    </p>
            </form>
        </div>
    )
}
export default Login;