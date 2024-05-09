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
import { Mypostulation} from "./routes/MyPostulation/MyPostulation";
import { ConfiguracionPostulant } from "./routes/Configuracion/ConfiguracionPostulant";
import { ConfiguracionCompany } from "./routes/Configuracion/ConfiguracionCompany";
import { JobOffers } from "./routes/JobOffers/JobOffers";
import { CompanyProfile } from "./routes/CompanyProfile/CompanyProfile";

function App() {

  const authContext = useContext(AuthContext);
  const { user, login, logout } = authContext;

  console.log(user);

  return (
    <>
      <Navbar />
      <Routes>
        {/* Se está protegiendo al Home para que el Usuario Empresa NO pueda acceder a él luego del Login */}
        <Route element={<ProtectedRoute redirectTo="/publicar-ofertas" isAllowed={!(user.roles.includes("COMPANY"))} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/registro-postulante" element={<RegisterPostulant />} />
        <Route path="/registro-empresa" element={<RegisterCompany />} />
        <Route path="/login-postulante" element={<Login titulo="Inicio de Sesión - Postulante" typeUser="postulante" />} />
        <Route path="/login-empresa"element={<Login titulo="Inicio de Sesión - Empresa" typeUser="empresa" />} />
        <Route path="/ofertas-empleo" element={<JobOffers />} />
        <Route path="/perfil-empresa" element={<CompanyProfile />} />
        {/* Rutas para el Postulante */}
        <Route element={<ProtectedRoute redirectTo="/" isAllowed={!!user.isExisting && user.roles.includes("APPLICANT")} />}>
           <Route path="/configuracion-postulante" element={<ConfiguracionPostulant/>} />
           <Route path="/mis-postulaciones" element={<Mypostulation />} />
        </Route>
        {/* Rutas para la Empresa */}
        <Route element={<ProtectedRoute redirectTo="/" isAllowed={!!user.isExisting && user.roles.includes("COMPANY")} />}>
          <Route path="/publicar-ofertas" element={<PublishOffer />} />
          <Route path="/mis-publicaciones" element={<MyPublications />} />
          <Route path="/configuracion-empresa" element={<ConfiguracionCompany />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
