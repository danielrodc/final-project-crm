import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import test_projects from "C://4GeeksAcademy/MOCK_DATA.json";

export const EditProject = () => {
  const [project, setProject] = useState({});
  let { project_id } = useParams();
  function formatDate(date) {
    let aux = new Date(date);
    let result = aux.toLocaleDateString("en-GB");
    return result;
  }
  useEffect(() => {
    let aux = test_projects.find((item) => item.id === parseInt(project_id));
    setProject(aux);
  }, []);
  return (
    <>
      <div className="container-fluid col-11 mt-3">
        <div className="row col-1 mb-3">
          <Link type="button" className="btn btn-success p-0" to="/projects">
            {`< Go back`}
          </Link>
        </div>
        <div className="row">
          <div className="card mb-3 p-0 border border-warning">
            <div className="row g-0">
              <div className="col-md-12">
                <div className="card-body d-flex justify-content-evenly">
                  <div className="col-3">
                    <h5 className="card-title fs-1">{project?.project_name}</h5>
                    <div className="text-body-secondary text-start p-2 rounded mb-1">
                      ► Manager: {project?.account_manager_name}
                    </div>
                    <div className="text-body-secondary p-2 rounded mb-1">
                      ► Assistant: {project?.assistant_name}
                    </div>
                    <div className="text-body-secondary p-2 rounded mb-1">
                      ► Customer: {project?.customer_name}
                    </div>
                    <div className="text-body-secondary p-2 rounded mb-1">
                      ► Start date: {formatDate(project?.start_date)}
                    </div>
                    <div className="text-body-secondary p-2 rounded mb-1">
                      ► End date:{" "}
                      {project?.end_date === null
                        ? "Ongoing"
                        : formatDate(project?.end_date)}
                    </div>
                  </div>
                  <div className="card-text d-flex flex-column">
                    <h5 className="card-title fs-4">Description</h5>
                    <p className="card-text">{project?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
