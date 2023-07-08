import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { Link, useLocation } from "react-router-dom";

export const Register = () => {
    const location = useLocation();
    const { edit, id, name, lastname, email, passWord, department, city, country} = location.state;
    const { actions } = useContext(Context);

    function handleRegister() {
        let nameInput = document.getElementById("nameInput");
        let lastnameInput = document.getElementById("lastnameInput");
        let emailInput = document.getElementById("emailInput");
        let passwordInput = document.getElementById("passwordInput");
        let departmentInput = document.getElementById("departmentInput");
        let cityInput = document.getElementById("cityInput");
        let countryInput = document.getElementById("countryInput");

        if (edit == false) {
        actions.createUser(
            nameInput.value,
            lastnameInput.value, 
            emailInput.value,
            passwordInput.value,
            departmentInput.value ,
            cityInput.value,
            countryInput.value
        );
        } else if (edit == true) {
        actions.editUser(
            nameInput.value,
            lastnameInput.value, 
            passwordInput.value,
            departmentInput.value ,
            cityInput.value,
            countryInput.value
        );
        }
    }
    
    return (
    <>
        <div className="container">
            <div className="row">
                <h1>{edit == false ? "Add a contact" : "Edit a contact"}</h1>
                <div className="row mb-3">
                    <label htmlFor="nameInput" className="form-label">
                        First Name
                    </label>
                    <input
                    type="name"
                    required
                    className="form-control"
                    id="nameInput"
                    placeholder="Your Name"
                    defaultValue={name ? name : ""}
                    />
                </div>
                <div className="row mb-3">
                    <label htmlFor="lastnameInput" className="form-label">
                        Last Name
                    </label>
                    <input
                    type="lastname"
                    required
                    className="form-control"
                    id="lastnameInput"
                    placeholder="Your Last Name"
                    defaultValue={lastname ? lastname : ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    required
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                    defaultValue={email ? email : ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="departmentInput" className="form-label">
                    Department
                    </label>
                    <input
                    type="department"
                    required
                    className="form-control"
                    id="departmentInput"
                    placeholder="Department of work"
                    defaultValue={department ? department : ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cityInput" className="form-label">
                    City
                    </label>
                    <input
                    type="city"
                    required
                    className="form-control"
                    id="cityInput"
                    placeholder="Your City"
                    defaultValue={city? city : ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="countryInput" className="form-label">
                    Country
                    </label>
                    <input
                    type="country"
                    required
                    className="form-control"
                    id="countryInput"
                    placeholder="Your Country"
                    defaultValue={country? country : ""}
                    />
                </div>
                <div>
                    <label for="inputPassword5" className="form-label">
                        Password
                    </label>
                    <input 
                    type="password" 
                    required
                    id="inputPassword5" 
                    className="form-control" 
                    aria-labelledby="passwordHelpBlock"
                    defaultValue={passWord ? passWord : ""}
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
                    {edit == false ? "Add contact" : "Edit contact"}
                </button>
            </div>
        </div>
    </>
    );
};