"use strict";
exports.__esModule = true;
exports.MultiStep = void 0;
var styles_1 = require("./styles");
function MultiStep(_a) {
    var size = _a.size, _b = _a.currentStep, currentStep = _b === void 0 ? 1 : _b;
    return (<styles_1.MultiStepContainer>
      <styles_1.Label>
        Passo {currentStep} de {size}
      </styles_1.Label>

      <styles_1.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, function (_, i) { return i + 1; }).map(function (step) {
            return <styles_1.Step key={step} active={currentStep >= step}/>;
        })}
      </styles_1.Steps>
    </styles_1.MultiStepContainer>);
}
exports.MultiStep = MultiStep;
MultiStep.displayName = 'MultiStep';
