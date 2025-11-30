# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) with some additions:
- For all changes include one of [PATCH | MINOR | MAJOR] with the scope of the change being made.

## [Unreleased]

### Added
- [MAJOR] Converted package into an es-module

### Changed
- [MAJOR] Upgraded to Storybook 10
- [MAJOR] Updated to work with ui-react v0.11.3 and above (CSS-based theming)
- [MINOR] Updated Dockerfiles to Node 24 LTS

### Removed
- [MAJOR] Removed styled-components dependency
- [MAJOR] Removed `isFullWidth` and `isFullHeight` props (dropzone is now 100% width/height by default)
- [MAJOR] Removed theme prop and theming exports (`IDropzoneTheme`, `buildDropzoneThemes`, `DropzoneThemedStyle`)

## [0.2.1] - 2023-08-22

### Changed
- [MINOR] Update to work with ui-react v0.11.2 and above
- [MINOR] Update dependencies

## [0.2.1] - 2023-08-22

### Changed
- [MINOR] Update to work with ui-react v0.11.1 and above

## [0.2.0] - 2023-05-16

### Changed
- [MAJOR] Update to work with ui-react v0.11.0 and above

## [0.1.1] - 2022-10-11

### Changed
- [MINOR] Added `fileMimeTypeExtensions` to `Dropzone` props to allow specifying extensions
- [MINOR] Added `isFullHeight` and `isFullWidth to `Dropzone` props

## [0.1.0] - 2022-08-23
