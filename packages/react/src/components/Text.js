"use strict";
exports.__esModule = true;
exports.Text = void 0;
var styles_1 = require("../styles");
exports.Text = (0, styles_1.styled)('p', {
    fontFamily: '$default',
    lineHeight: '$base',
    margin: 0,
    color: '$gray100',
    variants: {
        size: {
            xxs: { fontSize: '$xxs' },
            xs: { fontSize: '$xs' },
            sm: { fontSize: '$sm' },
            md: { fontSize: '$md' },
            lg: { fontSize: '$lg' },
            xl: { fontSize: '$xl' },
            '2xl': { fontSize: '$2xl' },
            '4xl': { fontSize: '$4xl' },
            '5xl': { fontSize: '$5xl' },
            '6xl': { fontSize: '$6xl' },
            '7xl': { fontSize: '$7xl' },
            '8xl': { fontSize: '$8xl' },
            '9xl': { fontSize: '$9xl' }
        }
    },
    defaultVariants: {
        size: 'md'
    }
});
exports.Text.displayName = 'Text';
