"use strict";
exports.__esModule = true;
exports.CustomTag = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Typography/Text',
    component: react_1.Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.'
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'lg',
                'xl',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio'
            }
        }
    }
};
exports.Primary = {};
exports.CustomTag = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
};
