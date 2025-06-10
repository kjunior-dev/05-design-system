"use strict";
exports.__esModule = true;
exports.Step = exports.Steps = exports.Label = exports.MultiStepContainer = void 0;
var styles_1 = require("../../styles");
var Text_1 = require("../Text");
exports.MultiStepContainer = (0, styles_1.styled)('div', {});
exports.Label = (0, styles_1.styled)(Text_1.Text, {
    color: '$gray200',
    defaultVariants: {
        size: 'xs'
    }
});
exports.Steps = (0, styles_1.styled)('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
    gap: '$2',
    marginTop: '$1'
});
exports.Step = (0, styles_1.styled)('div', {
    height: '$1',
    borderRadius: '$px',
    backgroundColor: '$gray600',
    variants: {
        active: {
            "true": {
                backgroundColor: '$gray100'
            }
        }
    }
});
