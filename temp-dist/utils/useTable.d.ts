import React from "react";
interface CustomColumn {
    label: string;
    hasModal?: boolean;
    renderComponent?: (rowData: any) => React.ReactNode;
    key?: string;
}
declare const useFetchData: (url: string) => {
    data: any[];
};
declare const useColumns: (url: string, customColumns?: CustomColumn[], excludeColumns?: string[]) => any[];
export { useFetchData, useColumns };
//# sourceMappingURL=useTable.d.ts.map