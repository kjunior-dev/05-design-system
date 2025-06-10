"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.TextInput = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
exports.TextInput = (0, react_1.forwardRef)(function (_a, ref) {
    var prefix = _a.prefix, size = _a.size, props = __rest(_a, ["prefix", "size"]);
    return (<styles_1.TextInputContainer size={size}>
        {!!prefix && <styles_1.Prefix>{prefix}</styles_1.Prefix>}
        <styles_1.Input ref={ref} {...props}/>
      </styles_1.TextInputContainer>);
});
exports.TextInput.displayName = 'TextInput';
