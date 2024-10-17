import React from "react";
interface RecaptchaProps {
    onChange: (token: string | null) => void;
    sitekey: string;
}
declare const Recaptcha: React.FC<RecaptchaProps>;
export { Recaptcha };
