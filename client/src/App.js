import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import DisplayAllMember from './Components/DisplayAllMember';
import AddNewMember from './Components/AddNewMember';
import UpdateMemberInfo from './Components/UpdateMemberInfo';
import Details from './Components/Details';
import MemberStatus from './Components/MemberStatus';

function App() {
  const [allMembers, setAllMembers] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path ='/home' element={<DisplayAllMember allMembers = {allMembers} setAllMembers = {setAllMembers}/>}/>
        <Route path ='/home/addMember' element={<AddNewMember allMembers = {allMembers} setAllMembers = {setAllMembers}/>}/>
        <Route path='/home/edit/:id' element = {<UpdateMemberInfo/>}/>
        <Route path='/home/details/:id' element = {<Details/>}/>
        <Route path='/status/month/:monthId' element = {<MemberStatus/>}/>
      </Routes>
    </div>
  );
}

export default App;
