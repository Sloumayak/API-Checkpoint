import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
function App() {
  const[listOfUser,setListOfUser]=useState([])
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users"
    })
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
  return (

    <div >
    {listOfUser.map((elt)=>(
      <UserList key={elt.id} elt={elt}/>
    ))}
    </div>
  );
}

export default App;
