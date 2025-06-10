"use strict";
exports.__esModule = true;
exports.AvatarFallback = exports.AvatarImage = exports.AvatarContainer = void 0;
var Avatar = require("@radix-ui/react-avatar");
var styles_1 = require("../../styles");
exports.AvatarContainer = (0, styles_1.styled)(Avatar.Root, {
    borderRadius: '$full',
    display: 'inline-block',
    width: '$16',
    height: '$16',
    overflow: 'hidden'
});
exports.AvatarImage = (0, styles_1.styled)(Avatar.Image, {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 'inherit'
});
exports.AvatarFallback = (0, styles_1.styled)(Avatar.Fallback, {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray600',
    color: '$gray800',
    svg: {
        width: '$6',
        height: '$6'
    }
});
