import axios from "axios";
import React,{useState, useRef, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles/Mystle.css'
const Login = (props)=>{

    const navigate = useNavigate()
    //this is referace to focus on the input and err if exists
    //const useRef = useRef();
    //const errRef = useRef();
    //monitor username, password, and error if exists
    //const[email, setEmail] = useState('');
    //const[pwd, setPwd] = useState('');
    const[errMsg, setErrMsg] = useState('');
    const [login, setLogin] = useState({
        email:'',
        password: ''
    })

    // use useEffect hook to clear errMessage when the user is changing or typing thier name or password
    useEffect(()=>{
        setErrMsg('')
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
            setErrMsg(err.response.data.errors)
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
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                    id="email"
                    autoComplete="off"
                    name="email"
                    value={login.email}
                    onChange={handleInputChange}
                    />
                    {
                        errMsg.email?
                        <p className="text-danger">{errMsg.email.message}</p>:
                        null
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                    id="password"
                    onChange={handleInputChange}
                    />
                    {
                        errMsg.password?
                        <p className="text-danger">{errMsg.password.message}</p>:
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