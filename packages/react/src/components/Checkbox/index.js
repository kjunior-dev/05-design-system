"use strict";
exports.__esModule = true;
exports.Checkbox = void 0;
var phosphor_react_1 = require("phosphor-react");
var styles_1 = require("./styles");
function Checkbox(props) {
    return (<styles_1.CheckboxContainer {...props}>
      <styles_1.CheckboxIndicator asChild>
        <phosphor_react_1.Check weight="bold"/>
      </styles_1.CheckboxIndicator>
    </styles_1.CheckboxContainer>);
}
exports.Checkbox = Checkbox;
Checkbox.displayName = 'Checkbox';
