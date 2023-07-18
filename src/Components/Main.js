import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Main.css'

function Main() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className='Card'>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main