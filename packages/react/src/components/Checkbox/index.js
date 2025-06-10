import { jsx as _jsx } from "react/jsx-runtime";
import { Check } from 'phosphor-react';
import { CheckboxContainer, CheckboxIndicator } from './styles';
export function Checkbox(props) {
    return (_jsx(CheckboxContainer, Object.assign({}, props, { children: _jsx(CheckboxIndicator, Object.assign({ asChild: true }, { children: _jsx(Check, { weight: "bold" }) })) })));
}
Checkbox.displayName = 'Checkbox';
