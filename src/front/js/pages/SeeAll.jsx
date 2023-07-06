import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PeopleList } from "../component/PeopleList.jsx";

export const SeeAll = () => {
  const [employees, setEmployees] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [original, setOriginal] = useState();
  const params = useParams();

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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <div
              className={`col-8 mt-3 d-flex justify-content-center align-items-center ${
                params.nature === "employees" ? "" : "d-none"
              }`}
            >
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
            <PeopleList nature={params.nature} />
          </div>
        </div>
      </div>
    </>
  );
};
