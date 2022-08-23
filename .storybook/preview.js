import React from 'react';
import { buildTheme, resetCss, GlobalCss, ThemeProvider } from '@kibalabs/ui-react';

import { buildDropzoneTheme } from '../src';

const baseTheme = buildTheme({
  colors: {
    brandPrimary: '#4b6cb7',
    brandSecondary: '#182848',
  },
});
const theme = buildTheme({
  dropzones: buildDropzoneTheme(baseTheme.colors, baseTheme.dimensions, basTheme.texts, baseTheme.boxes),
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
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
