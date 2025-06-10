"use strict";
exports.__esModule = true;
exports.WithFallback = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Data display/Avatar',
    component: react_1.Avatar,
    args: {
        src: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg?semt=ais_hybrid&w=740',
        alt: 'Avatar logo'
    },
    argTypes: {
        src: {
            control: {
                type: 'text'
            }
        }
    }
};
exports.Primary = {};
exports.WithFallback = {
    args: {
        src: undefined
    }
};
