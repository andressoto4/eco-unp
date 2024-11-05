import React, { createContext, useState, useEffect } from 'react';
var AuthContext = createContext(undefined);
export var AuthProvider = function (_a) {
    var children = _a.children;
    var _b = useState(localStorage.getItem('access_token')), authToken = _b[0], setAuthToken = _b[1];
    var _c = useState(localStorage.getItem('user_token')), userToken = _c[0], setUserToken = _c[1];
    useEffect(function () {
        if (authToken && userToken) {
            localStorage.setItem('access_token', authToken);
            localStorage.setItem('user_token', userToken);
        }
        else {
            localStorage.removeItem('access_token');
            localStorage.removeItem('user_token');
        }
    }, [authToken, userToken]);
    return (React.createElement(AuthContext.Provider, { value: { authToken: authToken, setAuthToken: setAuthToken, userToken: userToken, setUserToken: setUserToken } }, children));
};
export var useAuth = function () {
    var context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
//# sourceMappingURL=AuthContex.js.map