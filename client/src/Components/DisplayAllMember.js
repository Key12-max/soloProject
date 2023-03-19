import './styles/Mystle.css';

import React, { useEffect } from 'react';
import axios from   'axios';
import { Link } from 'react-router-dom';

const DisplayAllMember = (props) => {
    const {allMembers, setAllMembers} = props
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/home")
        .then((allMembers) => {
        setAllMembers(allMembers.data)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }, [])
    return (
        <div className='display'>
            <div className='main'>
                <div className='title'>
                    <div>
                        <h1> All Emanuel Church members</h1>
                    </div>
                    <Link to={'/home/addMember'}>Add a new member</Link>
                </div>
                <div className="table">
                    <table className='table-secondary'>
                        <thead>
                            <tr >
                                <th>Full_Name</th>
                                <th>Church_Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody > 
                        {
                            allMembers.map((member, index)=>(
                                <tr key={index}>
                                    <td>{member.fullName}</td>
                                    <td>{member.churchName}</td>
                                    <td>{member.email}</td>
                                    <td>{member.date}</td>
                                    <td>
                                        <Link to={`/home/edit/${member._id}`}>Edit</Link> |
                                        <Link to = {`/home/details/${member._id}`}>Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody> 
                    </table>
                </div>
            </div>
        </div>
        
    );
}

export default DisplayAllMember;
