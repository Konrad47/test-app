import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/home";
import ExampleView from "./views/example";
import LoginView from "./views/login";

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeView />}></Route>
        <Route path="/example" element={<ExampleView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
