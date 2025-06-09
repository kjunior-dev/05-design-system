import { jsx as _jsx } from "react/jsx-runtime";
import { Box, MultiStep } from '@ignite-ui/react';
export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1,
    },
    decorators: [
        (Story) => {
            return (_jsx(Box, Object.assign({ as: "label", css: { display: 'flex', flexDirection: 'column', gap: '$2' } }, { children: Story() })));
        },
    ],
};
export const Primary = {
    args: {},
};
export const Full = {
    args: {
        currentStep: 4,
    },
};
