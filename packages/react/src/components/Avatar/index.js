import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { User } from 'phosphor-react';
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles';
export function Avatar(props) {
    return (_jsxs(AvatarContainer, { children: [_jsx(AvatarImage, Object.assign({}, props)), _jsx(AvatarFallback, Object.assign({ delayMs: 600 }, { children: _jsx(User, {}) }))] }));
}
Avatar.displayName = 'Avatar';
