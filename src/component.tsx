import React from 'react';

import { getClassName } from '@kibalabs/core';
import { IMultiAnyChildProps } from '@kibalabs/core-react';
import { IComponentProps, KibaIcon, themeToCss, useBuiltTheme } from '@kibalabs/ui-react';
import * as ReactDropzone from 'react-dropzone';
import styled from 'styled-components';

import { IDropzoneTheme } from './theme';

interface IStyledDropzoneProps {
  $theme: IDropzoneTheme;
}

const StyledDropzone = styled.div<IStyledDropzoneProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &.fullWidth {
    width: 100%;
  }

  &.fullHeight {
    height: 100%;
  }

  ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.default.text)};
  ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.default.background)};
  &:visited {
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.default.text)};
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.default.background)};
  }
  &:hover {
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.hover?.text)};
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.hover?.background)};
  }
  &:active {
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.press?.text)};
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.press?.background)};
  }
  &:focus {
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.focus?.text)};
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.focus?.background)};
  }
  &.fileHovering {
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.fileHover?.text)};
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.fileHover?.background)};
  }
  &.disabled {
    cursor: not-allowed;
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.default.text)};
    ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.normal.default.background)};
    &:hover {
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.hover?.text)};
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.hover?.background)};
    }
    &:active {
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.press?.text)};
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.press?.background)};
    }
    &:focus {
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.focus?.text)};
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.focus?.background)};
    }
    &.fileHovering {
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.fileHover?.text)};
      ${(props: IStyledDropzoneProps): string => themeToCss(props.$theme.disabled.fileHover?.background)};
    }
  }
`;

export interface IDropzoneProps extends IComponentProps<IDropzoneTheme>, IMultiAnyChildProps {
  onFilesChosen: (files: File[]) => void;
  fileMimeTypes?: string[];
  fileMimeTypeExtensions?: Record<string, string[]>;
  fileLimit?: number;
  isFullHeight?: boolean;
  isFullWidth?: boolean;
}

export const Dropzone = (props: IDropzoneProps): React.ReactElement => {
  const theme = useBuiltTheme('dropzones', props.variant, props.theme);
  const onDrop = React.useCallback((files: File[]) => {
    props.onFilesChosen(files);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onFilesChosen]);

  const { getRootProps, getInputProps, isDragActive } = ReactDropzone.useDropzone({
    onDrop,
    maxFiles: props.fileLimit,
    accept: props.fileMimeTypeExtensions ?? ((props.fileMimeTypes || []).reduce((accumulator: Record<string, string[]>, current: string): Record<string, string[]> => {
      accumulator[current] = [];
      return accumulator;
    }, {})),
  });

  return (
    <StyledDropzone
      {...getRootProps()}
      id={props.id}
      className={getClassName(Dropzone.displayName, props.className, isDragActive && 'fileHovering', props.isFullWidth && 'fullWidth', props.isFullHeight && 'fullHeight')}
      $theme={theme}
      $isFullHeight={props.isFullHeight}
      $isFullWidth={props.isFullWidth}
    >
      <input {...getInputProps()} />
      {props.children ? props.children : <KibaIcon iconId='ion-cloud-upload-outline' /> }
    </StyledDropzone>
  );
};
Dropzone.displayName = 'Dropzone';
