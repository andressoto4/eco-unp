import React from "react";
interface CardFormProps {
    children?: React.ReactElement | React.ReactElement[];
    titulo: string;
    method: string;
    changeMethod?: React.Dispatch<React.SetStateAction<string>>;
    canEdit?: boolean;
    hasBody?: boolean;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    validated: boolean;
}
declare const CardForm: React.FC<CardFormProps>;
export default CardForm;
//# sourceMappingURL=CardForm.d.ts.map