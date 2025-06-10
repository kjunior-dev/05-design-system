"use strict";
exports.__esModule = true;
exports.Box = void 0;
var styles_1 = require("../styles");
exports.Box = (0, styles_1.styled)('div', {
    padding: '$6',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    border: '1px solid $gray600'
});
exports.Box.displayName = 'Box';
