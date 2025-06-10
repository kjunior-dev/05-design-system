import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space, } from '@devtrust/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';
export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config, } = createStitches({
    themeMap: Object.assign(Object.assign({}, defaultThemeMap), { height: 'space', width: 'space' }),
    theme: {
        colors,
        fontSizes,
        fontWeights,
        fonts,
        lineHeights,
        radii,
        space,
    },
});
