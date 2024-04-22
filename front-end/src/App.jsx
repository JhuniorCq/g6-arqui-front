import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Login } from "./routes/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-postulante" element />
        <Route path="/registro-empresa" element />
        <Route
          path="/login-postulante"
          element={
            <Login titulo="Inicio de Sesión - Postulante" tipo="postulante" />
          }
        />
        <Route
          path="/login-empresa"
          element={
            <Login titulo="Inicio de Sesión - Empresa" tipo="empresa" />
          }
        />
      </Routes>
    </>
  );
}

export default App;
