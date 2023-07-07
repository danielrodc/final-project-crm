import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="container-fluid d-flex justify-content-center">
        <div className="col-12 card mb-3 mt-3 border border-success">
          <div className="row g-0">
            <div className="col-md-8 d-flex align-items-center">
              <img
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/19070942/TED-Talk-What-Is-YOUR-Definition-of-Success.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-4 test">
              <div className="card-body d-flex flex-column align-items-center justify-content-center h-100">
              <Link to="/login" className="btn btn-success mb-3" >Log in
              </Link>
                <button type="button" className="btn btn-success">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
