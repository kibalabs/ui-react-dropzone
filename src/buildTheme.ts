import { RecursivePartial } from '@kibalabs/core';
import { IBoxTheme, IColorGuide, IDimensionGuide, ITextTheme, mergeTheme, ThemeMap } from '@kibalabs/ui-react';

import { IDropzoneTheme } from './theme';

export const buildDropzoneThemes = (colors: IColorGuide, dimensions: IDimensionGuide, textThemes: ThemeMap<ITextTheme>, boxThemes: ThemeMap<IBoxTheme>, base?: RecursivePartial<Record<string, IDropzoneTheme>>): ThemeMap<IDropzoneTheme> => {
  const defaultDropzoneTheme = mergeTheme<IDropzoneTheme>({
    normal: {
      default: {
        background: mergeTheme(boxThemes.default, boxThemes.focusable, {
          padding: `${dimensions.padding} ${dimensions.paddingWide}`,
          'background-color': '$colors.backgroundDark01',
          'border-width': '0.1em',
          'border-color': '$colors.backgroundDark25',
          'border-style': 'dashed',
        }),
        text: mergeTheme(textThemes.default, {
          color: '$colors.backgroundDark50',
          'text-align': 'center',
        }),
      },
      hover: {
        background: {
          'border-color': '$colors.backgroundDark50',
        },
        text: {
          color: '$colors.backgroundDark50',
        },
      },
      fileHover: {
        background: {
          'border-color': '$colors.backgroundDark75',
        },
        text: {
          color: '$colors.backgroundDark75',
        },
      },
      press: {
        background: {
          'border-color': '$colors.backgroundDark75',
        },
        text: {
          color: '$colors.backgroundDark50',
        },
      },
      focus: {
        background: boxThemes.focussed,
      },
    },
    disabled: {
      default: {
        background: {
          'background-color': '$colors.disabledLight50',
        },
        text: {
          color: '$colors.disabledText',
        },
      },
    },
  }, base?.default);

  return {
    ...(base || {}),
    default: defaultDropzoneTheme,
  };
};
