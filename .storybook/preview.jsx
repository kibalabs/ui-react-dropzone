import React from 'react';
import { buildTheme, resetCss, GlobalCss, ThemeProvider } from '@kibalabs/ui-react';

import { buildDropzoneThemes, Dropzone, DropzoneThemedStyle } from '../src';

const theme = buildTheme({
  colors: {
    brandPrimary: '#4b6cb7',
    brandSecondary: '#182848',
  },
});
const dropzoneComponentDefinition = {
  component: Dropzone,
  themeMap: buildDropzoneThemes(theme.colors, theme.dimensions, theme.texts, theme.boxes),
  themeCssFunction: DropzoneThemedStyle,
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme} extraComponentDefinitions={[dropzoneComponentDefinition]}>
      <GlobalCss
        theme={theme}
        resetCss={resetCss}
      />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
};
