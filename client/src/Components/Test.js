import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginAMember = ()=>{
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [input, SetInput] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e)=>{
        e.preventDefault()
        SetInput({[e.target.name]:e.target.value})

    }
    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/login", input)
        .then((res)=>{
            console.log(res.data)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
            setError(err.res.data.errors)
        })
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <Link to={'/'}>Return to home page</Link>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleInputChange} type="email" name="email" id="email" value={input.email ?? ''}/>
                        {
                            error.email?
                            <p>{error.message.email}</p>:
                            null
                        }
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleInputChange} type="password" name="password" id="password" value={input.password ?? ''}/>
                    </div>
                    <p>Do you want to register? <Link to = {'/home/addMember'}>Click here</Link></p>

                </form>
            </div>
        </div>
    )
}
export default LoginAMember