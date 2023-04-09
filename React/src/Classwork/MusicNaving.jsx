import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Albums from "./Albums"
import Singers from "./Singers"
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
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/singers">Singers</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

function MusicNaving()
{
    return (
        <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="albums" element={<Albums />} />
          <Route path="singers" element={<Singers />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    );
}

export default MusicNaving;