import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shared/Header/Header";
import Jungles from "./Pages/Home/Destination/Jungles/Jungles";
import Rivers from "./Pages/Home/Destination/Rivers/Rivers";
import Others from "./Pages/Home/Destination/Others/Others";
import Footer from "./Pages/Shared/Footer/Footer";
import Register from "./Pages/Login/Register/Register";
import RequiredAuth from "./Pages/Login/RequiredAuth/RequiredAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/jungles"
          element={
            <RequiredAuth>
              <Jungles />
            </RequiredAuth>
          }
        />
        <Route
          path="/rivers"
          element={
            <RequiredAuth>
              <Rivers />
            </RequiredAuth>
          }
        />
        <Route
          path="/others"
          element={
            <RequiredAuth>
              <Others />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
