import React from "react";
import { CardFormBasicos } from "../../form";

interface FormularioPageProps {}

const FormularioPage: React.FC<FormularioPageProps> = ({}) => {
  return (
    <div>
      <CardFormBasicos
        method="PUT"
        canEdit={false}
        hasHeader={true}
        dependencia="OAPI"
      ></CardFormBasicos>
    </div>
  );
};

export default FormularioPage;
