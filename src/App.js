import React from 'react';
import Layout from "./components/layout/layout";
import Profile from "./components/profile/profile";
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Layout /> }>
            <Route index element = { <Login /> }></Route>
            <Route path = "/register" element = { <Register /> } ></Route>
            <Route path = "/profile" element = { <Profile /> }></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;