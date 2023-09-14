import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Home from '../Home';
import { mockEmployees } from '../Home';


function HomeAdmin() {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        position: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleDelete = (id) => {
    //     const updatedEmployees = mockEmployees.filter((employee) => employee.id !== id);
    //     setMockEmployees(updatedEmployees); 
    //   };

    


    return (
        <div>
            <Navbar />
            <div>
                <h1>Generation Thailand <br />Home - Admin Sector</h1>

                <Link to="/HomeUser">
                    <button>User Home Sector</button>
                </Link>
                <Link to="/HomeAdmin">
                    <button>Admin Home Sector</button>
                </Link>

                <div>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

                        <label htmlFor="lastname">Lastname:</label>
                        <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} />

                        <label htmlFor="position">Position:</label>
                        <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} />

                        <button >Save</button>
                    </form>
                </div>
            </div>
            <div>
                {/* <Home /> */}
                <table border="1px">
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                    {mockEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.position}</td>
                            <td>
                            <button>
                                Delete
                            </button>
                        </td>
                    </tr>
                     ))}
                </table>
            </div>
        </div>
    );
}

export default HomeAdmin;
