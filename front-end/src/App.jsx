import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Login } from "./routes/Login/Login";
import { RegisterPostulant } from "./routes/Register/RegisterPostulant";
import { RegisterCompany } from "./routes/Register/RegisterCompany";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-postulante" element={<RegisterPostulant />} />
        <Route path="/registro-empresa" element={<RegisterCompany />} />
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
