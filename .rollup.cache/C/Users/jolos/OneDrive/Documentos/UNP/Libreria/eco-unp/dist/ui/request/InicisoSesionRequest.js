export const InicioSesionRequest = async (username, password, recaptchaToken) => {
    try {
        const response = await fetch("http://localhost:8000/login/", {
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
        return { access_token: data.access_token };
    }
    catch (error) {
        throw new Error(error.message);
    }
};
//# sourceMappingURL=InicisoSesionRequest.js.map