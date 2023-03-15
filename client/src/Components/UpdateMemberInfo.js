import React, {useState, useEffect} from 'react';
import { Link , useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const UpdateMemberInfo = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [errors, setErrors]= useState({})
    const [member, setMember ] = useState({
        fullName:'',
        churchName:'',
        email:''
    })
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/oneMember/"+id,member)
        .then(res =>{
            console.log(res.data)
            setMember(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    const handleInputChange =(e)=>{
        e.preventDefault();
        setMember({...member, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put("http://127.0.0.1:8000/api/home/edit/"+id, member)
        .then((res)=>{
            console.log(res)
            navigate('/home')
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className='content'>
            <div>
            <h1>Update {member.fullName} Info</h1>
            <Link to = {'/home'}>Click to return to home page</Link>
            </div>
            <div>
                <form onSubmit={submitHandler} className= "col-4 bg-dark p-4 my-5 mx-auto text-light" >
                    <label>Full_Name: </label>
                    <input onChange={handleInputChange} type= "text" name = "fullName" value = {member.fullName} className = "form-control"/>

                    {
                        errors.fullName?
                        <p className='text-danger'>{errors.fullName.message}</p>:
                        null
                    }
                    <label>Church_Name: </label>
                    <input onChange={handleInputChange} type= "text" name = "churchName" value = {member.churchName} className = "form-control"/>
                    {
                        errors.churchName?
                        <p className='text-danger'>{errors.churchName.message}</p>:
                        null
                    }
                    <label>Email: </label>
                    <input onChange={handleInputChange} type= "text" name = "email" value = {member.email} className = "form-control"/>
                    
                    {
                        errors.email?
                        <p className='text-danger'>{errors.email.message}</p>:
                        null
                    }
                    {/* <label>Date: </label>
                    <input onChange={handleInputChange} type= "date" name = "date"  />

                    {
                        errors.date?
                        <p className='text-danger'>{errors.date.message}</p>:
                        null
                    } */}
                    <button>Edit </button>

                </form>
            </div>
        </div>
    );
}

export default UpdateMemberInfo;
