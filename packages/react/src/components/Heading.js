"use strict";
exports.__esModule = true;
exports.Heading = void 0;
var styles_1 = require("../styles");
exports.Heading = (0, styles_1.styled)('h2', {
    fontFamily: '$default',
    lineHeight: '$shorter',
    margin: 0,
    color: '$gray100',
    variants: {
        size: {
            sm: { fontSize: '$xl' },
            md: { fontSize: '$2xl' },
            lg: { fontSize: '$4xl' },
            '2xl': { fontSize: '$5xl' },
            '3xl': { fontSize: '$6xl' },
            '4xl': { fontSize: '$7xl' },
            '5xl': { fontSize: '$8xl' },
            '6xl': { fontSize: '$9xl' }
        }
    },
    defaultVariants: {
        size: 'md'
    }
});
exports.Heading.displayName = 'Heading';
