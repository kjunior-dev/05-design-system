"use strict";
exports.__esModule = true;
exports.Full = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Form/Multi Step',
    component: react_1.MultiStep,
    args: {
        size: 4,
        currentStep: 1
    },
    decorators: [
        function (Story) {
            return (<react_1.Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </react_1.Box>);
        },
    ]
};
exports.Primary = {
    args: {}
};
exports.Full = {
    args: {
        currentStep: 4
    }
};
