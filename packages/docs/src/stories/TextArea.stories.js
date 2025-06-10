"use strict";
exports.__esModule = true;
exports.Disabled = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Form/Text Area',
    component: react_1.TextArea,
    args: {},
    decorators: [
        function (Story) {
            return (<react_1.Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <react_1.Text size="sm">Observations</react_1.Text>
          {Story()}
        </react_1.Box>);
        },
    ]
};
exports.Primary = {
    args: {
        placeholder: 'Add any observations...'
    }
};
exports.Disabled = {
    args: {
        disabled: true
    }
};
