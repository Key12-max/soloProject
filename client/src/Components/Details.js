import './styles/Mystle.css';
import '../App.css';
import React,{ useState, useEffect} from 'react';
import { Link , useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Details = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()

    const[member, setMember] = useState({})

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/oneMember/"+id)
        .then(res =>{
            console.log(res.data)
            setMember(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const deleteHandler = ()=>{
        axios.delete("http://127.0.0.1:8000/api/delete/"+id)
        .then((res)=>{
            console.log("deleted")
            navigate('/home')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className='content'>
            <div className='title'>
                <h1>{member.fullName} Status</h1>
                <Link to={'/home'}>Home</Link>
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr >
                            <th>Full_Name</th>
                            <th>Church_Name</th>
                            <th>Email</th>
                            <th>Membership_Fee</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody > 
                    {
                        <tr>
                            <td>{member.fullName}</td>
                            <td>{member.churchName}</td>
                            <td>{member.email}</td>
                            <td>
                                
                                <button className={`${member.membershipFee === "Paying"
                                                    ? "green-paying-btn"
                                                    : ""
                                                }`}>Paying</button>
                                                
                                <button className={`${member.membershipFee === "Not Paying"
                                                    ? "red-not-paying-btn"
                                                    : ""
                                                }`}>Not Paying</button>

                            </td>
                            <td>
                                <button onClick={deleteHandler} className='btn btn-danger'>Delete</button>
                            </td>
                            </tr>
                    }
                    </tbody> 
                </table>
            </div>
        </div>
    );
}

export default Details;
