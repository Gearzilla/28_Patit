import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



const Homenormal = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Generation Thailand <br />React - Assessment</h1>
                <Link to="/HomeUser">
                    <button>User Home Sector</button>
                </Link>
                <Link to="/HomeAdmin">
                    <button>Admin Home Sector</button>
                </Link>
            </div>
        </div>
    )
}

export default Homenormal;
