import { NavbarNoLogin } from "./NavbarNoLogin";
import { NavbarPostulant } from "./NavbarPostulant";
import { NavbarCompany } from "./NavbarCompany";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Navbar = () => {

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return user.rol.includes("APPLICANT") ? (
    <NavbarPostulant />
  ) : user.rol.includes("COMPANY") ? (
    <NavbarCompany />
  ) : (
    <NavbarNoLogin />
  );
};
