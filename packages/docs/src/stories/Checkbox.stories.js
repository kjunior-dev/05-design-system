"use strict";
exports.__esModule = true;
exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
exports["default"] = {
    title: 'Form/Checkbox',
    component: react_1.Checkbox,
    args: {},
    decorators: [
        function (Story) {
            return (<react_1.Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <react_1.Text size="sm">Accept terms of use</react_1.Text>
        </react_1.Box>);
        },
    ]
};
exports.Primary = {};
