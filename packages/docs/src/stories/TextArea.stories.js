import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, TextArea } from '@devtrust/react';
export default {
    title: 'Form/Text Area',
    component: TextArea,
    args: {},
    decorators: [
        (Story) => {
            return (_jsxs(Box, Object.assign({ as: "label", css: { display: 'flex', flexDirection: 'column', gap: '$2' } }, { children: [_jsx(Text, Object.assign({ size: "sm" }, { children: "Observations" })), Story()] })));
        },
    ],
};
export const Primary = {
    args: {
        placeholder: 'Add any observations...',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
