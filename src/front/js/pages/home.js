import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import mySvg from "../../img/layered-waves-haikei.svg";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center"
        style={{ backgroundImage: `url(${mySvg})` }}
      >
        <div className="col-10 card mb-3 mt-3">
          <div className="row g-0">
            <div className="col-md-8 d-flex align-items-center">
              <img
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/10/19070942/TED-Talk-What-Is-YOUR-Definition-of-Success.jpg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-4">
              <div className="card-body d-flex flex-column align-items-center justify-content-center h-100">
                <button type="button" className="btn btn-success mb-3">
                  Log in
                </button>
                <button type="button" className="btn btn-success">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
