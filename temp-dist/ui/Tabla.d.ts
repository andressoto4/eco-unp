import React from "react";
import "./styles/Tabla.css";
interface Column {
    key: string;
    label: string;
    hasModal?: boolean;
    renderComponent?: (row: Record<string, any>) => React.ReactNode;
}
interface TableProps {
    columns: Column[];
    data: Array<Record<string, any>>;
    renderModalContent?: (row: Record<string, any>, column: Column) => React.ReactNode;
    totalDias?: number;
    subtitle: string;
    items: string;
    extraInput?: React.ReactNode;
}
declare const BootstrapTable: React.FC<TableProps>;
export default BootstrapTable;
//# sourceMappingURL=Tabla.d.ts.map