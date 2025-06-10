import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, Checkbox } from '@devtrust/react';
export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (Story) => {
            return (_jsxs(Box, Object.assign({ as: "label", css: { display: 'flex', flexDirection: 'row', gap: '$2' } }, { children: [Story(), _jsx(Text, Object.assign({ size: "sm" }, { children: "Accept terms of use" }))] })));
        },
    ],
};
export const Primary = {};
