"use strict";
exports.__esModule = true;
exports.CustomTag = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Typography/Heading',
    component: react_1.Heading,
    args: {
        children: 'Custom title',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
};
exports.Primary = {};
exports.CustomTag = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
            }
        }
    }
};
