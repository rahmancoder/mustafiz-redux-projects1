import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/HomePage/HomePage";
import AddInformation from "./components/AddInformation/AddInformation";
import UpdateInformation from "./components/UpdateInformation/UpdateInformation";


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header></Header>
      <Route exact path="/" component={() => <HomePage />} />
      <Route exact path="/add" component={() => <AddInformation />} />
      <Route exact path="/edit/:id" component={() => <UpdateInformation />} />
    </div>
  );
};
export default App;
