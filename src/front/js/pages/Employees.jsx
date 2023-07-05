import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import profilePicture from "../../img/Default_pfp.jpg";
import { useParams } from "react-router-dom";

export const Employees = (props) => {
  const { actions } = useContext(Context);
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
                <div className="card col-5 mt-3 me-3" key={index}>
                  <div className="row g-0 d-flex">
                    <div className="col-3 mt-3 ms-3 mb-3">
                      <img
                        src={profilePicture}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-7 w-auto">
                      <div className="card-body">
                        <h5 className="card-title">{`${employee?.name} ${employee.last_name}`}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                          {`${employee?.department} - ${employee?.role}`}
                        </h6>
                        <p className="card-text">{`email: ${employee?.email}`}</p>
                        <a href="#" className="card-link">
                          Card link
                        </a>
                        <a href="#" className="card-link">
                          Another link
                        </a>
                      </div>
                    </div>
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
