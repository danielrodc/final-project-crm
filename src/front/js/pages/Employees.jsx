import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";

export const Employees = () => {
  const { actions } = useContext(Context);
  const { getEmployees } = actions;
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      try {
        let response = await fetch(`${process.env.BACKEND_URL}/api/users`);
        let data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.log(error);
      }
    };
    getEmployees();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            {employees.map((employee, index) => {
              return (
                <div className="card col-3 mt-3 me-3" key={index}>
                  <div className="card-body">
                    <h5 className="card-title">{employee?.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {employee?.role}
                    </h6>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
