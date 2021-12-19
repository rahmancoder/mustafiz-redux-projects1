import React from "react";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header></Header>
    </div>
  );
};
export default App;
