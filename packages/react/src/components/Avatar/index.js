"use strict";
exports.__esModule = true;
exports.Avatar = void 0;
var phosphor_react_1 = require("phosphor-react");
var styles_1 = require("./styles");
function Avatar(props) {
    return (<styles_1.AvatarContainer>
      <styles_1.AvatarImage {...props}/>

      <styles_1.AvatarFallback delayMs={600}>
        <phosphor_react_1.User />
      </styles_1.AvatarFallback>
    </styles_1.AvatarContainer>);
}
exports.Avatar = Avatar;
Avatar.displayName = 'Avatar';
