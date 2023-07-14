import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import {Link} from "react-router-dom";

export const Create_project = () => {
    const { actions, store } = useContext(Context);
    const [project, setProject] = useState({
        project_name : "",
        project_description: "",
        in_charge_of: "",
        assign_vas: "",
        client:""
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
                    <label htmlFor="in_charge_ofInput" className="form-label">In Charge Of</label>
                    <input 
                    type="text" 
                    required 
                    className="form-control"
                    id="in_charge_ofInput" 
                    value={project.in_charge_of}
                    name = "in_charge_of"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="assign_vasInput" className="form-label">Assign Resources</label>
                    <input 
                    type="text" 
                    required 
                    className="form-control"
                    id="assign_vasInput" 
                    value={project.assign_vas}
                    name = "assign_vas"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="clientInput" className="form-label">Client Name</label>
                    <input 
                    type="text" 
                    required 
                    className="form-control"
                    id="clientInput" 
                    value={project.client}
                    name = "client"
                    onChange={handleProjects}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="project_descriptionInput" class="form-label">Project Description</label>
                    <textarea 
                    className="form-control" 
                    rows="3"
                    id="project_descriptionInput" 
                    value={project.project_description}
                    name = "project_description"
                    onChange={handleProjects}
                    ></textarea>
                </div>
                <div className="row d-flex justify-content-end">
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