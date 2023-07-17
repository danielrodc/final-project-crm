import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Register } from "./pages/register";
import { Single } from "./pages/single";
import { Projects } from "./pages/Projects.jsx";
import { Employees } from "./pages/Employees.jsx";
import { Customers } from "./pages/Customers.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import LoginPage from "./pages/LoginPage";
import { Create_project } from "./pages/createProject";

//create your first component
const Layout = () => {

  const basename = process.env.BASENAME || "";
  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Projects />} path="/projects" />
            {/* <Route element={<ProjectsId />} path="/projects/id" /> */}
            <Route element={<Create_project/>} path="/projects/create" />
            <Route element={<Employees />} path="/employees" />
            <Route element={<Customers />} path="/customers" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
