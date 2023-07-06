import React, { useState, useEffect, useContext } from "react";
import profilePicture from "../../img/Default_pfp.jpg";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const PeopleList = (props) => {
  const [list, setList] = useState([]);
  const [original, setOriginal] = useState();
  const params = useParams();
  const { store, actions } = useContext(Context);
  const { getCustomers } = actions;

  async function test() {
    let data = await getEmployees();
    setList(data);
  }
  useEffect(() => {
    // Gets all employees
    if (params.nature === "employees") {
      const getEmployees = async () => {
        try {
          let response = await fetch(`${process.env.BACKEND_URL}/api/users`);
          let data = await response.json();
          // Sorts employees by department role (Head > Member)
          const aux = [...data].sort((a, b) => (a.role > b.role ? -1 : 1));
          setList(aux);
          setOriginal(aux);
        } catch (error) {
          console.log(error);
        }
      };
      getEmployees();
    }

    if (params.nature === "customers") {
      /* const getCustomers = async () => {
        try {
          let response = await fetch(
            `${process.env.BACKEND_URL}/api/customers`
          );
          let data = await response.json();
          const aux = [...data].sort((a, b) => (a.id > b.id ? -1 : 1));
          setList(aux);
          setOriginal(aux);
        } catch (error) {
          console.log(error);
        }
      }; */
      test();
      //setList(data);
    }
  }, []);

  return (
    <>
      {list.map((employee, index) => {
        return (
          <div className="card col-5 mt-3 me-3" key={index}>
            <div className="row g-0 d-flex">
              <div className="col-3 mt-3 ms-3 mb-3">
                <img
                  src={`${
                    params === "employees"
                      ? profilePicture
                      : list.company_logo_url
                  }`}
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
    </>
  );
};
