import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: null,
        name: "",
        rol: ""
    });

    const login = (responsePost) => {
        // Envío de datos al back para la Autenticación -> El back me envía una Respuesta
        // Actualizamos el ESTADO "user" con la Respuesta enviada desde el back

        // Eso de envio de dastos al back lo haré con usePost, asi que creo que acá solo es necesario recibir como parámetro el Objeto con los Datos de Usuario (es decir a responsePost) y luego DESESTRUCTURAMOS a ese Objeto

        // Los roles son: "APPLICANT" y "COMPANY" -> CAMBIAR use.rol en todas sus apariciones
        setUser({   
            id: 1,
            name: "Jhunior Ccora",
            rol: ["COMPANY"]
        });
    };

    // Esta función será para cuando se CIERRE LA SESIÓN
    const logout = () => {
        setUser({
            id: null,
            name: "",
            rol: ""
        })
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};