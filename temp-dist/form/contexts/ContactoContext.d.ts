import React, { ReactNode } from "react";
import { IdCelularUnoContextType, IdCelularDosContextType, IdTelefonoContextType, IdCorreoContextType } from "../types/ContactoTypes";
declare const IdCelularUnoContext: React.Context<IdCelularUnoContextType | undefined>;
declare const IdCelularDosContext: React.Context<IdCelularDosContextType | undefined>;
declare const IdTelefonoContext: React.Context<IdTelefonoContextType | undefined>;
declare const IdCorreoContext: React.Context<IdCorreoContextType | undefined>;
interface ContactoProviderProps {
    children: ReactNode;
}
declare const ContactoProvider: React.FC<ContactoProviderProps>;
export { IdCelularUnoContext, IdCelularDosContext, IdTelefonoContext, IdCorreoContext, };
export { ContactoProvider };
//# sourceMappingURL=ContactoContext.d.ts.map