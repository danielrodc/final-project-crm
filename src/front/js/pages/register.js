import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { Link, useLocation } from "react-router-dom";

export const Register = () => {
    const location = useLocation();
    const { edit, id, fullName, address, phone, email, workRoll, passWord } = location.state;
    const { actions } = useContext(Context);

    function handleRegister() {
        let fullNameInput = document.getElementById("fullNameInput");
        let addressInput = document.getElementById("addressInput");
        let phoneInput = document.getElementById("phoneInput");
        let emailInput = document.getElementById("emailInput");
        let workRollInput = document.getElementById("workRollInput"); 
        let passWordInput = document.getElementById("passWordInput")
        if (edit == false) {
        actions.createUser(
            FullNameInput.value,
            addressInput.value,
            phoneInput.value,
            emailInput.value,
            workRollInput.value, 
            passWordInput.value,
        );
        } else if (edit == true) {
        actions.editUser(
            FullNameInput.value,
            addressInput.value,
            phoneInput.value,
            emailInput.value,
            workRollInput.value,
            passWordInput.value,            
            id
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
                        Full Name
                    </label>
                    <input
                    type="name"
                    required
                    className="form-control"
                    id="nameInput"
                    placeholder="Name Last Name"
                    defaultValue={fullName ? fullName : ""}
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
                    <label htmlFor="phoneInput" className="form-label">
                    Phone number
                    </label>
                    <input
                    type="number"
                    required
                    className="form-control"
                    id="phoneInput"
                    placeholder="000-000-0000"
                    defaultValue={phone ? phone : ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="addressInput" className="form-label">
                    Address
                    </label>
                    <input
                    type="adress"
                    required
                    className="form-control"
                    id="addressInput"
                    placeholder="City, Country"
                    defaultValue={address ? address : ""}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="workRoll" className="form-label">
                    Work Roll 
                    </label>
                    <input
                    type="roll"
                    required
                    className="form-control"
                    id="workRollInput"
                    placeholder="Construction worker"
                    defaultValue={workRoll ? workRoll : ""}
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