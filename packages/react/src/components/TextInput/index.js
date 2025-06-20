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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Input, Prefix, TextInputContainer } from './styles';
export const TextInput = forwardRef((_a, ref) => {
    var { prefix, size } = _a, props = __rest(_a, ["prefix", "size"]);
    return (_jsxs(TextInputContainer, Object.assign({ size: size }, { children: [!!prefix && _jsx(Prefix, { children: prefix }), _jsx(Input, Object.assign({ ref: ref }, props))] })));
});
TextInput.displayName = 'TextInput';
