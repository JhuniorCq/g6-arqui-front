import { NavbarNoLogin } from "./NavbarNoLogin";
import { NavbarPostulant } from "./NavbarPostulant";
import { NavbarCompany } from "./NavbarCompany";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Navbar = () => {

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return user.roles.includes("APPLICANT") ? (
    <NavbarPostulant />
  ) : user.roles.includes("COMPANY") ? (
    <NavbarCompany />
  ) : (
    <NavbarNoLogin />
  );
};
