import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { Link } from "react-router-dom";

export const Register = () => {
    // const { store, actions } = useContext(Context);
    return (
    <>
    <div className="container d-flex justify-content-center">
        <div className="col-12 mb-8 border border-primary">
            <div className="row">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
            </div>
            <div className="row">
                <label for="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock"/>
                <div id="passwordHelpBlock" className="form-text">
                Insert your Password
                </div>
            </div>
            <div className="row">
            <div class="d-grid gap-2">
                <button className="btn btn-primary" type="button">Send</button>
            </div>
            </div>
        </div>
    </div>
    </>
    );
};