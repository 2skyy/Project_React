import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Settings from "./components/settings";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/*페이지 그룹*/}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/settings"} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
