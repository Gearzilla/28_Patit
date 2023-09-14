import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { mockEmployees } from '../Home';



function HomeUser() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Generation Thailand <br />Home - User Sector</h1>
        <Link to="/HomeUser">
          <button>User Home Sector</button>
        </Link>
        <Link to="/HomeAdmin">
          <button>Admin Home Sector</button>
        </Link>
      </div>
      <div>
        {/* <Home /> */}
        <table border="1px">
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>Position</th>
          </tr>
          {mockEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}


export default HomeUser;