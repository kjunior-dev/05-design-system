import { Avatar } from '@ignite-ui/react';
export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671142.jpg?semt=ais_hybrid&w=740',
        alt: 'Avatar logo',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
};
export const Primary = {};
export const WithFallback = {
    args: {
        src: undefined,
    },
};
