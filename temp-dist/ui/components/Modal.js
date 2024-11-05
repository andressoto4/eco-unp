import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
var CustomModal = function (_a) {
    var show = _a.show, onHide = _a.onHide, title = _a.title, children = _a.children;
    var _b = useState(false), showModal = _b[0], setShowModal = _b[1];
    var _c = useState(false), closing = _c[0], setClosing = _c[1];
    useEffect(function () {
        if (show) {
            setTimeout(function () { return setShowModal(true); }, 50);
        }
        else {
            setShowModal(false);
        }
    }, [show]);
    var handleHide = function () {
        setClosing(true);
        setTimeout(function () {
            onHide();
            setClosing(false);
        }, 400);
    };
    return (React.createElement("div", { className: "modal-overlay ".concat(showModal ? 'show' : ''), onClick: handleHide },
        React.createElement("div", { className: "modal-container ".concat(showModal ? 'show' : '', " ").concat(closing ? 'hide' : ''), onClick: function (e) { return e.stopPropagation(); } },
            React.createElement("div", { className: "modal_header" },
                React.createElement("span", null, title),
                React.createElement("button", { className: "close_button", onClick: handleHide }, "\u00D7")),
            React.createElement("div", { className: "modal_body" }, children))));
};
export default CustomModal;
//# sourceMappingURL=Modal.js.map