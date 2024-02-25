import './styles/Mystle.css';

import axios from 'axios';
import React, {useState} from 'react';
import {Link,  useNavigate } from 'react-router-dom';
const AddNewMember = (props) => {
    const navigate = useNavigate()
    const {allMembers, setAllMembers} = props;
    const [errors, setErrors] = useState({})
    const [member, setMember] = useState({
        fullName: '',
        churchName: '',
        email: '',
        date:'',
        password:''
    })
    const handleInputChange = (e)=>{
        e.preventDefault();
        setMember({...member,[e.target.name]:e.target.value})
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        
        axios.post("http://127.0.0.1:8000/api/home/addMember",member)
        .then((res)=>{
            setAllMembers([...allMembers], res.data)
            console.log(res.data)
            navigate('/')
            
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className='content'>
                <div>
                    <h1>Registration Form</h1>
                    <Link to = {'/'}>Click here to return to the main page</Link>
                </div>
            <div>
                <form onSubmit={submitHandler} className = "col-4 bg-dark p-4 my-5 mx-auto text-light">
                    <div className='form-group'>
                        <label>Full_Name: </label>
                        <input onChange={handleInputChange} type= "text" name = "fullName" value = {member.fullName} className ='form-control'/>
                        {
                            errors.fullName?
                            <p className='text-danger'>{errors.fullName.message}</p>:
                            null
                        }
                    </div>
                    <div className='form-group'>
                        <label>Church_Name: </label>
                        <input onChange={handleInputChange} type= "text" name = "churchName" value = {member.churchName} className ='form-control'/>
                        {
                            errors.churchName?
                            <p className='text-danger'>{errors.churchName.message}</p>:
                            null
                        }
                    </div>
                    <div className='form-group'>
                        <label htmlFor = "email">Email: </label>
                        <input onChange={handleInputChange} type= "email" name = "email" value = {member.email} className ='form-control'/>
                        {
                            errors.email?
                            <p className='text-danger'>{errors.email.message}</p>:
                            null
                        }
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input onChange={handleInputChange} type= "password" name = "password" value = {member.password} id='password' className ='form-control'/>
                        {
                            errors.password?
                            <p className='text-danger'>{errors.password.message}</p>:
                            null
                        }
                    </div>
                    <label>Date: </label>
                    <input onChange={handleInputChange} type= "date" name = "date"  />
                    {
                        errors.date?
                        <p className='text-danger'>{errors.date.message}</p>:
                        null
                    }
                    <button>Add Member </button>
                    <p>Already have an account? <Link to = {'/home/login'}>Click here</Link></p>
                </form>
                
            </div>
        </div>
        
    );
}

export default AddNewMember;
