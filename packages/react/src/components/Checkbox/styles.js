"use strict";
exports.__esModule = true;
exports.CheckboxIndicator = exports.CheckboxContainer = void 0;
var Checkbox = require("@radix-ui/react-checkbox");
var styles_1 = require("../../styles");
exports.CheckboxContainer = (0, styles_1.styled)(Checkbox.Root, {
    all: 'unset',
    width: '$6',
    height: '$6',
    backgroundColor: '$gray900',
    borderRadius: '$xs',
    lineHeight: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid $gray900',
    '&[data-state="checked"]': {
        backgroundColor: '$ignite300'
    },
    '&:focus, &[data-state="checked"]': {
        border: '2px solid $ignite300'
    }
});
var slideIn = (0, styles_1.keyframes)({
    from: {
        transform: 'translateY(-100%)'
    },
    to: {
        transform: 'translateY(0)'
    }
});
var slideOut = (0, styles_1.keyframes)({
    from: {
        transform: 'translateY(0)'
    },
    to: {
        transform: 'translateY(-100%)'
    }
});
exports.CheckboxIndicator = (0, styles_1.styled)(Checkbox.Indicator, {
    color: '$white',
    width: '$4',
    height: '$4',
    '&[data-state="checked"]': {
        animation: "".concat(slideIn, " 200ms ease-out")
    },
    '&[data-state="unchecked"]': {
        animation: "".concat(slideOut, " 200ms ease-out")
    }
});
