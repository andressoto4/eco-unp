import React from "react";
var titleStyle = {
    borderLeft: "10px solid",
    borderLeftColor: "#d13c47",
    height: "90px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
};
var logoStyle = {
    height: "80px",
    marginLeft: "20px",
    marginRight: "25px",
    alignSelf: "center",
};
var Encabezado = function (_a) {
    var dependencia = _a.dependencia;
    return (React.createElement("div", { style: titleStyle },
        React.createElement("div", { style: {
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
            } },
            React.createElement("img", { src: "https://i.imgur.com/MYXJbgg.png", style: logoStyle }),
            React.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                } },
                React.createElement("h3", { style: { margin: "0px 0px 7px 0px", fontWeight: "700" } }, "Unidad Nacional de Protecci\u00F3n"),
                React.createElement("h5", { style: { margin: "0px 0px 7px 0px", color: "#6b6b6b" } }, dependencia)))));
};
export default Encabezado;
//# sourceMappingURL=Encabezado.js.map