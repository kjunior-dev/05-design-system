"use strict";
exports.__esModule = true;
exports.Disabled = exports.WithIcon = exports.Small = exports.Tertiary = exports.Secondary = exports.Primary = void 0;
var react_1 = require("@ignite-ui/react");
var phosphor_react_1 = require("phosphor-react");
exports["default"] = {
    title: 'Form/Button',
    component: react_1.Button,
    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio'
            }
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio'
            }
        },
        disabled: {
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'click'
        }
    }
};
exports.Primary = {};
exports.Secondary = {
    args: {
        variant: 'secondary',
        children: 'Create new'
    }
};
exports.Tertiary = {
    args: {
        variant: 'tertiary',
        children: 'Cancel'
    }
};
exports.Small = {
    args: {
        size: 'sm'
    }
};
exports.WithIcon = {
    args: {
        children: (<>
        Próximo passo
        <phosphor_react_1.ArrowRight weight="bold"/>
      </>)
    }
};
exports.Disabled = {
    args: {
        disabled: true
    }
};
