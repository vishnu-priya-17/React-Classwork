import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from "./Homes"
import Destination from "./Destination"
import About from "./About"
import Contact from "./Contact"
import Registarionform from "./Registarionform"
import Submittedform from "./Submittedform"
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/registration">Registarionform</Link>
          </li>
          <li>
            <Link to="/submittedform">Submittedform</Link>
          </li>
        </ul>
            <Link to="/invalid"></Link>
      </nav>

      <Outlet />
    </>
  )
};

function Traveling()
{
    return (
        <div>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout />}>
            <Route data-testid="/" index element={<Homes />} />
            <Route path="destination" data-testid="destination" element={<Destination />} />
            <Route path="about" data-testid="about" element={<About />} />
            <Route path="contact" data-testid="contact" element={<Contact />} />
            <Route path="registration" data-testid="registration-form" element={<Registarionform />} />
            <Route path="submittedform" data-testid="submitted-form" element={<Submittedform />} />
            <Route path="/invalid" element={<Homes />} />
            </Route>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default Traveling;