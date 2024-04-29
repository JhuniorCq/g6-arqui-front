import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: null,
        name: "",
        rol: ""
    });

    const login = () => {
        // Envío de datos al back para la Autenticación -> El back me envía una Respuesta
        // Actualizamos el ESTADO "user" con la Respuesta enviada desde el back
        setUser({
            id: 1,
            name: "Jhunior",
            rol: "postulant" // El otro rol sería "company"
        });
    };

    // Esta función será para cuando se CIERRE LA SESIÓN
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};