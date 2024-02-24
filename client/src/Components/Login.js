import axios from "axios";
import React,{useState, useRef, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/Mystle.css'
const Login = (props)=>{

    const navigate = useNavigate()
    const[errors, setErrors] = useState('');
    const [login, setLogin] = useState({
        email:'',
        password: ''
    })

    // use useEffect hook to clear errMessage when the user is changing or typing thier name or password
    useEffect(()=>{
        setErrors('')
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/home/login",login)
        .then((res)=>{
            //setPwd('')
            //setEmail('')
            //setLogin('')
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
        
    }
    const handleInputChange = (e)=>{
        e.preventDefault();
        setLogin({[e.target.name]:e.target.value})
    }
    return (
        <section className="content">
            {/*<p  className = {errMsg ? "errmsg" : "offscreen" }aria-live = "assertive">{errMsg}</p> */}
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit} className = "col-4 bg-dark p-4 my-5 mx-auto text-light">
            <div className='form-group'>
                <label>Email: </label>
                <input onChange={handleInputChange} type= "text" name = "email" value = {login.email} className ='form-control'/>
                {
                    errors.email?
                    <p className='text-danger'>{errors.email.message}</p>:
                    null
                }
            </div>
            <div className='form-group'>
                <label>Password: </label>
                <input onChange={handleInputChange} type= "password" name = "password" value = {login.password} id='password' className ='form-control'/>
                {
                    errors.password?
                    <p className='text-danger'>{errors.password.message}</p>:
                    null
                }
            </div>
                <button>Sign In</button>
                <p>Need an account?<bt/>
                <span className="line">
                    {/*Put a react router her */}
                    <a href="/home/addMember">Sign Up</a>
                </span>
                </p>
            </form>
        </section>
    )
}
export default Login;