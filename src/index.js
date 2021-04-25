import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios"

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Logout from "./components/auth/Logout";
import Single from "./components/Single";
import Search from "./components/Search";
import Admin from "./Admin"
import Create from "./components/admin/Create"
import Edit from "./components/admin/Edit"
import Delete from "./components/admin/Delete"
import Posts from "./components/admin/Posts"

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
  "access_token"
)}`;

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />

        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/create" component={Create} />
        <Route exact path="/admin/edit/:id" component={Edit} />
        <Route exact path="/admin/delete/:id" component={Delete} />

        <Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
        <Route path="/post/:slug" component={Single} />
        <Route path="/search" component={Search} />
      </Switch>
      <Footer />
    </React.StrictMode>
  </Router>
  
);
ReactDOM.render(routing, document.getElementById("root"))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
