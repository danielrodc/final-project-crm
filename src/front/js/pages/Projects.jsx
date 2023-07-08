import React, { useState, useEffect, useContext } from "react";
import test_projects from "C://4GeeksAcademy/MOCK_DATA.json";

export const Projects = () => {
  const [data, setData] = useState(test_projects);
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="row mt-3 d-flex justify-content-center">
          <h1 className="text-success">Projects</h1>
          <table className="table table-sm table-striped table-success table-hover table-bordered align-middle">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-center"
                  style={{ width: 35 + "px" }}
                >
                  #
                </th>
                <th scope="col">Project Name</th>
                <th scope="col">Project Manager</th>
                <th scope="col">Assigned VA</th>
                <th scope="col">Customer</th>
                <th scope="col" style={{ width: 80 + "px" }}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((project, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" className="text-center">
                      {project.id}
                    </th>
                    <td>{project.project_name}</td>
                    <td>{project.account_manager_name}</td>
                    <td>{project.assistant_name}</td>
                    <td>{project.customer_name}</td>
                    <td className="d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary me-1">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
