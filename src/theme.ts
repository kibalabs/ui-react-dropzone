import { RecursivePartial } from '@kibalabs/core';
import { IBoxTheme, ITextTheme, ThemeType } from '@kibalabs/ui-react';

export interface IDropzoneThemeBase extends ThemeType {
  text: ITextTheme;
  background: IBoxTheme;
}

export interface IDropzoneThemeState extends ThemeType {
  default: IDropzoneThemeBase;
  hover: RecursivePartial<IDropzoneThemeBase>;
  press: RecursivePartial<IDropzoneThemeBase>;
  focus: RecursivePartial<IDropzoneThemeBase>;
  fileHover: RecursivePartial<IDropzoneThemeBase>;
}

export interface IDropzoneTheme extends ThemeType {
  normal: IDropzoneThemeState;
  disabled: RecursivePartial<IDropzoneThemeState>;
}
