"use strict";
exports.__esModule = true;
exports.WithPrefix = exports.Disabled = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Form/Text Input',
    component: react_1.TextInput,
    args: {},
    decorators: [
        function (Story) {
            return (<react_1.Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <react_1.Text size="sm">Email address</react_1.Text>
          {Story()}
        </react_1.Box>);
        },
    ]
};
exports.Primary = {
    args: {
        placeholder: 'Type your name'
    }
};
exports.Disabled = {
    args: {
        disabled: true
    }
};
exports.WithPrefix = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username'
    }
};
