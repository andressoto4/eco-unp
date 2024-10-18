import ReCAPTCHA from "react-google-recaptcha";
export declare const InicioSesionHook: (maxAttempts: number, blockTime: number) => {
    recaptchaToken: string | null;
    validated: boolean;
    attempts: number;
    isBlocked: boolean;
    timer: number;
    handleRecaptchaChange: (token: string | null) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, usuarioRef: React.RefObject<HTMLInputElement>, contrasegnaRef: React.RefObject<HTMLInputElement>, recaptchaRef: React.RefObject<ReCAPTCHA>) => Promise<void>;
};
//# sourceMappingURL=InicioSesionHook.d.ts.map