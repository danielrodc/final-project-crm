import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import profilePicture from "../../img/Default_pfp.jpg";
import { useParams } from "react-router-dom";

export const Employees = (props) => {
  const { actions } = useContext(Context);
  const [employees, setEmployees] = useState([]);
  const [original, setOriginal] = useState();

  function handleFilter(event, str) {
    if (event.target.id === `${str}-button`) {
      if (!event.target.classList.contains("active")) {
        const filter = employees.filter((emp) => {
          return emp.department === (str !== "Human" ? str : "Human Resources");
        });
        setEmployees(filter);
      } else if (event.target.classList.contains("active")) {
        setEmployees(original);
      }
    }
  }

  useEffect(() => {
    // Gets all employees
    const getEmployees = async () => {
      try {
        let response = await fetch(`${process.env.BACKEND_URL}/api/users`);
        let data = await response.json();
        // Sorts employees by department role (Head > Member)
        const aux = [...data].sort((a, b) => (a.role > b.role ? -1 : 1));
        setEmployees(aux);
        setOriginal(aux);
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
            <div className="col-8 mt-3 d-flex justify-content-center align-items-center">
              <h1>Departments:</h1>
              <button
                type="button"
                className="btn btn-success ms-3 me-3"
                data-bs-toggle="button"
                id="Sales-button"
                onClick={() => handleFilter(event, "Sales")}
              >
                Sales
              </button>
              <button
                type="button"
                className="btn btn-success me-3"
                id="Human-button"
                onClick={() => handleFilter(event, "Human")}
                data-bs-toggle="button"
              >
                H.R.
              </button>
              <button
                type="button"
                className="btn btn-success me-3"
                id="Finances-button"
                onClick={() => handleFilter(event, "Finances")}
                data-bs-toggle="button"
              >
                Finances
              </button>
              <button
                type="button"
                className="btn btn-success me-3"
                id="Recruitment-button"
                onClick={() => handleFilter(event, "Recruitment")}
                data-bs-toggle="button"
              >
                Recruitment
              </button>
              <button
                type="button"
                className="btn btn-success"
                id="Trial-button"
                onClick={() => handleFilter(event, "Trial")}
                data-bs-toggle="button"
              >
                Trial
              </button>
            </div>
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
                        <h5 className="card-title">{`${employee?.name} ${employee?.last_name}`}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                          {`${employee?.department} - ${employee?.role}`}
                        </h6>
                        <p className="card-text">{`email: ${employee?.email}`}</p>
                        <a
                          href="#"
                          className="card-link"
                          onClick={() =>
                            (window.location = `mailto:${employee?.email}`)
                          }
                        >
                          Schedule a meeting with {employee?.name}
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
