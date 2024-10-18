var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const InicioSesionRequest = (username, password, recaptchaToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, recaptchaToken }),
        });
        if (response.ok) {
            const data = yield response.json();
            return data;
        }
        else {
            const errorData = yield response.json();
            throw new Error(errorData.error || "Error en el servidor");
        }
    }
    catch (error) {
        throw new Error("Error de conexión.");
    }
});
