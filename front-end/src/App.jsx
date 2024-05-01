import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Login } from "./routes/Login/Login";
import { RegisterPostulant } from "./routes/Register/RegisterPostulant";
import { RegisterCompany } from "./routes/Register/RegisterCompany";
import { useContext } from "react";
import { AuthContext } from "./context/Auth/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { PublishOffer } from "./routes/PublishOffer/PublishOffer";
import { MyPublications } from "./routes/MyPublications/MyPublications";

function App() {

  const authContext = useContext(AuthContext);
  const { user, login, logout } = authContext;

  console.log(user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-postulante" element={<RegisterPostulant />} />
        <Route path="/registro-empresa" element={<RegisterCompany />} />
        <Route path="/login-postulante" element={<Login titulo="Inicio de Sesión - Postulante" typeUser="postulante" />} />
        <Route path="/login-empresa"element={<Login titulo="Inicio de Sesión - Empresa" typeUser="empresa" />} />
        {/* Rutas para el Postulante */}


        {/* Rutas para la Empresa */}
        <Route element={<ProtectedRoute redirectTo="/" isAllowed={!!user && user.rol.includes("company")} />}>
          <Route path="/publicar-ofertas" element={<PublishOffer />} />
          <Route path="/mis-publicaciones" element={<MyPublications />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
