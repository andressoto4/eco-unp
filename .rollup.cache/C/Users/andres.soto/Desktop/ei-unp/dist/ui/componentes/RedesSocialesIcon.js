import React from "react";
const RedesSocialesICon = ({ color, IconComponent }) => {
    const style = {
        backgroundColor: color,
        width: '43px',
        height: '43px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginRight: '4px',
        marginLeft: '4px',
    };
    return (React.createElement("div", { style: style },
        React.createElement(IconComponent, { size: '1.5em', color: "#FFF" })));
};
export default RedesSocialesICon;
//# sourceMappingURL=RedesSocialesIcon.js.map