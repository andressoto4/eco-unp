import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { InicioSesionRequest } from "../request/InicioSesionRequest";
import { verificarRenovarToken } from "../../utils/TokenUtils";

interface CustomTokenPayload extends JwtPayload {
  access_url?: string[];
  access_user?: string;
}

export const InicioSesionHook = (maxAttempts: number, blockTime: number) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [validated, setValidated] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    // Si el usuario está bloqueado y el temporizador es mayor que 0
    if (isBlocked && timer > 0) {
      // Configura un intervalo que decrementa el temporizador en 1 cada segundo
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Si el temporizador llega a 0 y el usuario está bloqueado
    if (timer === 0 && isBlocked) {
      // Desbloquea al usuario y restablece los intentos
      setIsBlocked(false);
      setAttempts(0);
    }

    // Limpia el intervalo cuando el efecto se desmonta o se actualiza
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isBlocked, timer]);

  useEffect(() => {
    const interval = setInterval(verificarRenovarToken, 5 * 60 * 1000); // Llamar a la función de verificación y renovación del token periódicamente (por ejemplo, cada minuto)
    return () => clearInterval(interval);
  }, []);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const decodeToken = (token: string) => {
    try {
      const decoded = jwtDecode<CustomTokenPayload>(token);
      // Acceder a los datos
      const accessUrl = decoded.access_url;
      const accessUser = decoded.access_user;

      return { accessUrl, accessUser };
    } catch (error) {
      console.error("Token decoding failed:", error);
      return null;
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    usuarioRef: React.RefObject<HTMLInputElement>,
    contrasegnaRef: React.RefObject<HTMLInputElement>,
    recaptchaRef: React.RefObject<ReCAPTCHA>
  ) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (attempts < maxAttempts) {
      if (!form.checkValidity()) {
        console.log(form.checkValidity());

        e.stopPropagation();
        setValidated(false);
        toast.error("Formulario no valido", {
          position: "top-right",
          className: "foo-bar",
          hideProgressBar: true,
        });
        return;
      }

      if (!recaptchaToken) {
        e.stopPropagation();
        toast.error("Por favor, completa el reCAPTCHA", {
          position: "top-right",
          className: "foo-bar",
          hideProgressBar: true,
        });
        return;
      }

      setValidated(true);

      const username = usuarioRef.current?.value;
      const password = contrasegnaRef.current?.value;

      if (username && password) {
        try {
          await toast.promise(
            InicioSesionRequest(username, password, recaptchaToken),
            {
              pending: "Iniciando sesión...",
              success: {
                render({ data }) {
                  const accessToken = data.access_token;
                  const userToken = data.user_token;

                  localStorage.setItem("access_token", accessToken);
                  localStorage.setItem("user_token", userToken);
                  const userInfo = decodeToken(userToken);

                  if (userInfo && userInfo.accessUrl) {
                    setTimeout(() => {
                      // @ts-ignore
                      const url = userInfo.accessUrl[0];
                      navigate(url);
                    }, 1000);
                  } else {
                    navigate("/sistema/usuario");
                    console.error("La URL de acceso no está disponible");
                  }

                  return "¡Inicio de sesión exitoso!";
                },
                position: "top-right",
                className: "foo-bar",
                hideProgressBar: true,
              },
              error: {
                render({ data }) {
                  setValidated(false);
                  setAttempts((prevAttempts) => prevAttempts + 1);
                  recaptchaRef.current?.reset();
                  if (
                    typeof data === "object" &&
                    data !== null &&
                    "message" in data
                  ) {
                    return (data as { message: string }).message;
                  }
                  return "Error: data no tiene el formato esperado";
                },
              },
            },
            {
              position: "top-right",
              className: "foo-bar",
              hideProgressBar: true,
            }
          );
        } catch (err) {
          toast.error("Hubo un error", {
            position: "top-right",
            className: "foo-bar",
            hideProgressBar: true,
          });
          recaptchaRef.current?.reset();

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } finally {
          if (attempts + 1 >= maxAttempts) {
            setIsBlocked(true);
            setTimer(blockTime);
          }
        }
      } else {
        toast.error("Usuario o contraseña no pueden estar vacíos", {
          position: "top-right",
          className: "foo-bar",
          hideProgressBar: true,
        });
      }
    } else {
      setIsBlocked(true);
      setTimer(blockTime);
    }
  };

  return {
    recaptchaToken,
    validated,
    attempts,
    isBlocked,
    timer,
    handleRecaptchaChange,
    handleSubmit,
  };
};
