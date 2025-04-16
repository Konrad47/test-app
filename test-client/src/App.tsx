import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeView from "./views/home";
import ExampleView from "./views/example";
import LoginView from "./views/login";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AuthorizedView from "./views/user";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeView />}></Route>
          <Route path="/example" element={<ExampleView />}></Route>
          <Route path="/login" element={<LoginView />}></Route>
          <Route path="/authorized" element={<AuthorizedView />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
