import React from 'react';

import { getClassName, RecursivePartial } from '@kibalabs/core';
import { IMultiAnyChildProps } from '@kibalabs/core-react';
import { IComponentProps, KibaIcon, themeToCss } from '@kibalabs/ui-react';
import * as ReactDropzone from 'react-dropzone';
import styled from 'styled-components';

import { IDropzoneTheme } from './theme';

export const DropzoneThemedStyle = (theme: RecursivePartial<IDropzoneTheme>): string => `
  ${themeToCss(theme.normal?.default?.text)};
  ${themeToCss(theme.normal?.default?.background)};
  &:visited {
    ${themeToCss(theme.normal?.default?.text)};
    ${themeToCss(theme.normal?.default?.background)};
  }
  &:hover {
    ${themeToCss(theme.normal?.hover?.text)};
    ${themeToCss(theme.normal?.hover?.background)};
  }
  &:active {
    ${themeToCss(theme.normal?.press?.text)};
    ${themeToCss(theme.normal?.press?.background)};
  }
  &:focus {
    ${themeToCss(theme.normal?.focus?.text)};
    ${themeToCss(theme.normal?.focus?.background)};
  }
  &.fileHovering {
    ${themeToCss(theme.normal?.fileHover?.text)};
    ${themeToCss(theme.normal?.fileHover?.background)};
  }
  &.disabled {
    ${themeToCss(theme.normal?.default?.text)};
    ${themeToCss(theme.normal?.default?.background)};
    &:hover {
      ${themeToCss(theme.disabled?.hover?.text)};
      ${themeToCss(theme.disabled?.hover?.background)};
    }
    &:active {
      ${themeToCss(theme.disabled?.press?.text)};
      ${themeToCss(theme.disabled?.press?.background)};
    }
    &:focus {
      ${themeToCss(theme.disabled?.focus?.text)};
      ${themeToCss(theme.disabled?.focus?.background)};
    }
    &.fileHovering {
      ${themeToCss(theme.disabled?.fileHover?.text)};
      ${themeToCss(theme.disabled?.fileHover?.background)};
    }
  }
`;

interface IStyledDropzoneProps {
  $theme?: RecursivePartial<IDropzoneTheme>;
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
  &.disabled {
    cursor: not-allowed;
  }

  && {
    ${(props: IStyledDropzoneProps): string => (props.$theme ? DropzoneThemedStyle(props.$theme) : '')};
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
      $theme={props.theme}
      $isFullHeight={props.isFullHeight}
      $isFullWidth={props.isFullWidth}
    >
      <input {...getInputProps()} />
      {props.children ? props.children : <KibaIcon iconId='ion-cloud-upload-outline' /> }
    </StyledDropzone>
  );
};
Dropzone.displayName = 'KibaDropzone';
