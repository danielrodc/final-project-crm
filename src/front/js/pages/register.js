import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import {Link} from "react-router-dom";

export const Register = () => {
    const { actions, store } = useContext(Context);
    const [user, setUser] = useState({
        name : "",
        last_name: "",
        email: "",
        password: "",
        department:"",
        city: "",
        country: ""
    })
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    
    
    function handleRegister() {
        actions.Register(user);
    }
    
    return (
    <>
        <div className="container">
            <div className="col 12">
                <div className="row mb-3">
                    <label htmlFor="nameInput" className="form-label">
                        First Name
                    </label>
                    <input
                    type="text"
                    required
                    className="form-control"
                    id="nameInput"
                    placeholder="Your Name"
                    value={user.name}
                    name = "name"
                    onChange={handleChange}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="lastNameInput" className="form-label">
                        Last Name
                    </label>
                    <input
                    type="text"
                    required
                    className="form-control"
                    id="last_nameInput"
                    placeholder="Your Last Name"
                    value={user.last_name}
                    name = "last_name"
                    onChange={handleChange}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="emailInput" className="form-label">
                    Email address
                    </label>
                    <input
                    type="text"
                    required
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                    value={user.email}
                    name = "email"
                    onChange={handleChange}
                    />
                </div>
                <div className="row mb-8 btn-group">
                    <label htmlFor="departmentInput" className="form-label">
                    Department
                    </label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select your department</option>
                        <option value={user.department} name = "department" onChange={handleChange}>Human Resources</option>
                        <option value={user.department} name = "department" onChange={handleChange}>Sales</option>
                        <option value={user.department} name = "department" onChange={handleChange}>Finances</option>
                        <option value={user.department} name = "department" onChange={handleChange}>Trial</option>
                        <option value={user.department} name = "department" onChange={handleChange}>Recruitment</option>
                    </select>                 
                </div>
                <div className="row mb-3">
                    <label htmlFor="cityInput" className="form-label">
                    City
                    </label>
                    <input
                    type="text"
                    required
                    className="form-control"
                    id="cityInput"
                    placeholder="Your City"
                    value={user.city}
                    name = "city"
                    onChange={handleChange}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="countryInput" className="form-label">
                    Country
                    </label>
                    <input
                    type="text"
                    required
                    className="form-control"
                    id="countryInput"
                    placeholder="Your Country"
                    value={user.country}
                    name = "country"
                    onChange={handleChange}
                    />
                </div>
                <div className="row mb-3">
                    <label for="inputPassword5" className="form-label">
                        Password
                    </label>
                    <input 
                    type="password" 
                    required
                    id="inputPassword5" 
                    className="form-control" 
                    aria-labelledby="passwordHelpBlock"
                    value={user.password}
                    name = "password"
                    onChange={handleChange}
                    />
                    <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-end">
                <button className="col-2 ms-3 me-2">
                    <Link to="/login">Go back to Login</Link>
                </button>
                <button
                    type="button"
                    className="col-2 btn btn-primary me-3"
                    onClick={handleRegister}
                >
                    Register
                </button>
            </div>
        </div>
    </>
    );
};