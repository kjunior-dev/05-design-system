"use strict";
exports.__esModule = true;
exports.Input = exports.Prefix = exports.TextInputContainer = void 0;
var styles_1 = require("../../styles");
exports.TextInputContainer = (0, styles_1.styled)('div', {
    backgroundColor: '$gray900',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'center',
    variants: {
        size: {
            sm: {
                padding: '$2 $3'
            },
            md: {
                padding: '$3 $4'
            }
        }
    },
    '&:has(input:focus)': {
        borderColor: '$ignite300'
    },
    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed'
    },
    defaultVariants: {
        size: 'md'
    }
});
exports.Prefix = (0, styles_1.styled)('span', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray400',
    fontWeight: 'regular'
});
exports.Input = (0, styles_1.styled)('input', {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: 'regular',
    background: 'transparent',
    border: 0,
    width: '100%',
    '&:focus': {
        outline: 0
    },
    '&:disabled': {
        cursor: 'not-allowed'
    },
    '&::placeholder': {
        color: '$gray500'
    }
});
