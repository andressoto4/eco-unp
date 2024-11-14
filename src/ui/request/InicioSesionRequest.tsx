import { urlRequest } from "../../utils";

export const InicioSesionRequest = async (
  username: string,
  password: string,
  recaptchaToken: string | null
) => {
  try {
    const response = await fetch(`${urlRequest}/inicio/ingreso/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, recaptchaToken }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
      throw new Error(data.error);
    }

    return { access_token: data.access_token, user_token: data.user_token };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
