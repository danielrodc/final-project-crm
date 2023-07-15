import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";

export const Create_project = () => {
    const { actions, store } = useContext(Context);
    const [project, setProject] = useState({
        project_name : "",
        account_manager_id: "",
        assistant_id: "",
        customer_id: "",
        description:""
    })

    const handleProjects = (event) => {
        setProject({ ...project, [event.target.name]: event.target.value });
    };

    function registerProject() {
        actions.Register(project);
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="project_nameInput" className="form-label">Project Name</label>
                    <input 
                    type="text" 
                    required 
                    className="form-control"
                    id="project_nameInput" 
                    value={project.project_name}
                    name = "project_name"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="account_manager_idInput" className="form-label">Account Manager ID</label>
                    <input 
                    type="number" 
                    required 
                    className="form-control"
                    id="account_manager_idInput" 
                    value={project.account_manager_id}
                    name = "account_manager_id"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="assistant_idInput" className="form-label">Assistant ID</label>
                    <input 
                    type="number" 
                    required 
                    className="form-control"
                    id="assistant_idInput" 
                    value={project.assistant_id}
                    name = "assistant_id"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="customer_idInput" className="form-label">Customer ID</label>
                    <input 
                    type="number" 
                    required 
                    className="form-control"
                    id="customer_idInput" 
                    value={project.customer_id}
                    name = "customer_id"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descriptionInput" class="form-label">Project Description</label>
                    <textarea 
                    className="form-control" 
                    rows="3"
                    id="descriptionInput" 
                    value={project.description}
                    name = "description"
                    onChange={handleProjects}
                    ></textarea>
                </div>
                <div className="row d-flex justify-content-center">
                    <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={registerProject}>
                        Register Project    
                    </button>
                </div>
            </div>
        </>
    )
}