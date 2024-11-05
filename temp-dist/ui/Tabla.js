import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import BusquedaInput from "./components/Buscador";
import CustomModal from "./components/Modal";
import Lottie from "lottie-react";
import logo from "./assets/logo.png";
import "./styles/Tabla.css";
import noData from "./assets/animations/noData.json";
import noInfo from "./assets/animations/noInfo.json";
var getCurrentYear = function () {
    return new Date().getFullYear();
};
var normalizeText = function (text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
};
var BootstrapTable = function (_a) {
    var columns = _a.columns, data = _a.data, renderModalContent = _a.renderModalContent, totalDias = _a.totalDias, subtitle = _a.subtitle, extraInput = _a.extraInput, items = _a.items;
    var _b = useState(""), searchTerm = _b[0], setSearchTerm = _b[1];
    var _c = useState(null), modalData = _c[0], setModalData = _c[1];
    var _d = useState(false), showModal = _d[0], setShowModal = _d[1];
    var _e = useState(15), visibleData = _e[0], setVisibleData = _e[1];
    var _f = useState(data.length > 15), hasMoreData = _f[0], setHasMoreData = _f[1];
    var _g = useState(false), showMessage = _g[0], setShowMessage = _g[1];
    var currentYear = getCurrentYear();
    useEffect(function () {
        setShowMessage(data.length < 1);
        setVisibleData(15);
        setHasMoreData(data.length > 15);
    }, [searchTerm, data.length]);
    var filteredData = data.filter(function (row) {
        return columns.some(function (column) {
            return normalizeText(String(row[column.key])).includes(normalizeText(searchTerm));
        });
    });
    var handleScroll = function (event) {
        var _a = event.currentTarget, scrollTop = _a.scrollTop, clientHeight = _a.clientHeight, scrollHeight = _a.scrollHeight;
        if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
            setVisibleData(function (prev) {
                var newVisibleData = prev + 5;
                if (newVisibleData >= filteredData.length) {
                    setHasMoreData(false);
                }
                return Math.min(newVisibleData, filteredData.length);
            });
        }
    };
    var handleCellClick = function (column, row) {
        if (column.hasModal && renderModalContent) {
            setModalData({ row: row, column: column });
            setShowModal(true);
        }
    };
    var getBackgroundAndTextColor = function (diasHabiles) {
        if (totalDias) {
            var porcentaje = (diasHabiles / totalDias) * 100;
            if (porcentaje <= 25)
                return { backgroundColor: "#3AB34A", color: "#FFFFFF" };
            if (porcentaje <= 50)
                return { backgroundColor: "#F8EB10", color: "#000000" };
            if (porcentaje <= 75)
                return { backgroundColor: "#F79122", color: "#000000" };
            return { backgroundColor: "#E91720", color: "#FFFFFF" };
        }
        return { backgroundColor: "transparent", color: "inherit" };
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "unp-row" },
            React.createElement("div", { className: "title-container" },
                React.createElement("div", { className: "logo-subtitle-container" },
                    React.createElement("div", { className: "red-section" }, "1"),
                    React.createElement("img", { className: "imgLogo", src: logo, alt: "logo" })),
                React.createElement("div", { className: "subtitle-container" },
                    React.createElement("span", { className: "subtitle-logo" }, subtitle),
                    React.createElement("span", null, items))),
            data.length > 0 && (React.createElement("div", { className: "inputs-container" },
                React.createElement(BusquedaInput, { onSearch: setSearchTerm }),
                React.createElement("div", { className: "input-extra-container" }, extraInput)))),
        showMessage ? (React.createElement("div", { className: "animation-container" },
            React.createElement("div", { style: { width: 150, height: 150 } },
                React.createElement(Lottie, { animationData: noData, loop: true })),
            React.createElement("span", { className: "lottie" }, "No existen solicitudes pendientes por tramitar"))) : searchTerm && filteredData.length === 0 ? (React.createElement("div", { className: "animation-container" },
            React.createElement("div", { style: { width: 150, height: 150 } },
                React.createElement(Lottie, { animationData: noInfo, loop: true })),
            React.createElement("span", { className: "lottie" },
                " ",
                "No se encontr\u00F3 registro con el criterio de b\u00FAsqueda definido",
                " "))) : (React.createElement("div", { className: "table_container" },
            React.createElement("div", { className: "table-scroll", onScroll: handleScroll },
                React.createElement(Table, { striped: true, hover: true },
                    React.createElement("thead", null,
                        React.createElement("tr", null, columns.map(function (column, index) { return (React.createElement("th", { key: index }, column.label)); }))),
                    React.createElement("tbody", null,
                        filteredData.slice(0, visibleData).map(function (row, rowIndex) { return (React.createElement("tr", { key: rowIndex }, columns.map(function (column, colIndex) { return (React.createElement("td", { key: colIndex, onClick: function () { return handleCellClick(column, row); }, style: {
                                cursor: column.hasModal ? "pointer" : "default",
                            }, className: column.hasModal ? "cell-with-modal" : "" }, column.key === "diasHabiles" ? (React.createElement("div", { style: {
                                display: "flex",
                                justifyContent: "center",
                            } },
                            React.createElement("div", { style: {
                                    padding: "8px",
                                    borderRadius: "100px",
                                    width: "40px",
                                    backgroundColor: getBackgroundAndTextColor(row.diasHabiles).backgroundColor,
                                    color: getBackgroundAndTextColor(row.diasHabiles).color,
                                } },
                                React.createElement("span", null, row.diasHabiles)))) : column.renderComponent ? (column.renderComponent(row)) : (row[column.key]))); }))); }),
                        hasMoreData && (React.createElement("tr", null,
                            React.createElement("td", { colSpan: columns.length, className: "text-center" }, "Cargando m\u00E1s datos...")))))),
            React.createElement("div", { className: "d-flex justify-content-between" },
                React.createElement("div", { className: "data-unp" },
                    currentYear,
                    " \u2022 Unidad Nacional de Protecci\u00F3n \u2014 UNP"),
                React.createElement("div", { className: "data-count" },
                    "Mostrando ",
                    Math.min(visibleData, filteredData.length),
                    " de",
                    " ",
                    filteredData.length,
                    " elementos")),
            modalData && renderModalContent && (React.createElement(CustomModal, { show: showModal, onHide: function () { return setShowModal(false); }, title: "".concat(modalData.column.label) }, renderModalContent(modalData.row, modalData.column)))))));
};
export default BootstrapTable;
//# sourceMappingURL=Tabla.js.map