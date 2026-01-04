
import Home from "./pages/Home";
import Result from "./pages/Result";
import { Routes, Route } from "react-router-dom"

import Signup from "./components/Signup";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className="px-4 sm:px-10 md:px-14 lg:px-28  min-h-screen bg-linear-to-b from-white to-orange-50 " >
      <ToastContainer position="top-right" autoClose={1000}  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </div>
    </>
  )
};

export default App;
