import React from "react";
var useFetchData = function (url) {
    var _a = React.useState([]), data = _a[0], setData = _a[1];
    React.useEffect(function () {
        fetch(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Hubo un error en la red');
            }
            return response.json();
        })
            .then(function (data) {
            setData(data);
        })
            .catch(function (error) {
            console.error('Error:', error);
        });
    }, [url]);
    return { data: data };
};
var useColumns = function (url, customColumns, excludeColumns) {
    if (customColumns === void 0) { customColumns = []; }
    if (excludeColumns === void 0) { excludeColumns = []; }
    var _a = React.useState([]), columns = _a[0], setColumns = _a[1];
    React.useEffect(function () {
        fetch(url)
            .then(function (response) {
            if (!response.ok) {
                throw new Error('Hubo un error en la red');
            }
            return response.json();
        })
            .then(function (data) {
            if (data.length > 0) {
                var keys = Object.keys(data[0]).filter(function (key) { return !excludeColumns.includes(key); });
                var generatedColumns = keys.map(function (key, index) {
                    var customColumn = customColumns[index] || {};
                    return {
                        key: key,
                        label: 'label' in customColumn ? customColumn.label : key,
                        hasModal: 'hasModal' in customColumn ? customColumn.hasModal : false,
                        renderComponent: 'renderComponent' in customColumn ? customColumn.renderComponent : undefined,
                    };
                });
                setColumns(generatedColumns);
            }
        })
            .catch(function (error) {
            console.error('Error:', error);
        });
    }, [url, customColumns, excludeColumns]);
    return columns;
};
export { useFetchData, useColumns };
//# sourceMappingURL=useTable.js.map