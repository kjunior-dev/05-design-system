import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Label, MultiStepContainer, Step, Steps } from './styles';
export function MultiStep({ size, currentStep = 1 }) {
    return (_jsxs(MultiStepContainer, { children: [_jsxs(Label, { children: ["Passo ", currentStep, " de ", size] }), _jsx(Steps, Object.assign({ css: { '--steps-size': size } }, { children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
                    return _jsx(Step, { active: currentStep >= step }, step);
                }) }))] }));
}
MultiStep.displayName = 'MultiStep';
