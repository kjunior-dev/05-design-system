"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.config = exports.createTheme = exports.theme = exports.getCssText = exports.keyframes = exports.globalCss = exports.css = exports.styled = void 0;
var tokens_1 = require("@ignite-ui/tokens");
var react_1 = require("@stitches/react");
exports.styled = (_a = (0, react_1.createStitches)({
    themeMap: __assign(__assign({}, react_1.defaultThemeMap), { height: 'space', width: 'space' }),
    theme: {
        colors: tokens_1.colors,
        fontSizes: tokens_1.fontSizes,
        fontWeights: tokens_1.fontWeights,
        fonts: tokens_1.fonts,
        lineHeights: tokens_1.lineHeights,
        radii: tokens_1.radii,
        space: tokens_1.space
    }
}), _a.styled), exports.css = _a.css, exports.globalCss = _a.globalCss, exports.keyframes = _a.keyframes, exports.getCssText = _a.getCssText, exports.theme = _a.theme, exports.createTheme = _a.createTheme, exports.config = _a.config;
