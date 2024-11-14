import { jwtDecode } from "jwt-decode";

export const verificarRenovarToken = async () => {
    const userToken = localStorage.getItem("user_token");
  
    if (userToken) {
      const decoded = jwtDecode(userToken);
      const exp = decoded.exp ? decoded.exp * 1000 : null;
      const now = Date.now();
  
      if (exp && exp - now < 5 * 60 * 1000) { // Verificar si exp no es null y si quedan menos de 5 minutos
        try {
          const response = await fetch('/api/renovar_token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_token: userToken }),
          });
  
          const data = await response.json();
  
          if (response.ok) {
            localStorage.setItem("user_token", data.user_token);
          } else {
            console.error("Error al renovar el token:", data.error);
          }
        } catch (error) {
          console.error("Error al renovar el token:", error);
        }
      }
    }
}