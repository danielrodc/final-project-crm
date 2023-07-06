import React, { useState, useEffect, useContext } from "react";
import profilePicture from "../../img/Default_pfp.jpg";
import { useParams } from "react-router-dom";

export const PeopleList = (props) => {
  const [list, setList] = useState([]);
  const [original, setOriginal] = useState(); /* 
  const { store, actions } = useContext(Context);
  const { getCustomers, getEmployees } = actions; */

  async function test() {}

  return (
    <>
      {list.map((item, index) => {
        return (
          <div className="card col-5 mt-3 me-3" key={index}>
            <div className="row g-0 d-flex">
              <div className="col-3 mt-3 ms-3 mb-3">
                <img
                  src={`${
                    customer.company_logo_url
                      ? customer.company_logo_url
                      : profilePicture
                  }`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-7 w-auto">
                <div className="card-body">
                  <h5 className="card-title">{`${customer?.name} ${customer?.last_name}`}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {`${customer?.department} - ${customer?.role}`}
                  </h6>
                  <p className="card-text">{`email: ${customer?.email}`}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
