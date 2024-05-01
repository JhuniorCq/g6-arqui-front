import { CareerCard } from "../../components/CareerCard/CareerCard";
import "./Configuracion.module.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useId } from "react";
export const ConfiguracionCompany = () => {
  const id = useId();
  return <div>Configuracion Compañia</div>;
};
