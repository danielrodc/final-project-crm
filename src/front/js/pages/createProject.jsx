import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Create_project = () => {
  const { actions, store } = useContext(Context);
  const [project, setProject] = useState({
    project_name: "",
    project_description: "",
    in_charge_of: "",
    assign_vas: "[]",
    client: "",
  });

  const handleProjects = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value });
  };

  function registerProject() {
    actions.Register(project);
  }

  return (
    <>
      <h1>a</h1>
      {/* <div className="container">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </div> */}
    </>
  );
};
