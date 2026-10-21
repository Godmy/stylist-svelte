# Story migration report: sandbox / development

|             | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| development |       19 |            19 |               0 |            15 |                 4 |           0 |             0 |                                   19 |           0 |             9 |

| Family                                | Before | After             | Recipe                           | State uses recipe | Controls | Presets | Token options                                          | Layout   |
| ------------------------------------- | ------ | ----------------- | -------------------------------- | ----------------- | -------: | ------: | ------------------------------------------------------ | -------- |
| `atom/cube-control`                   | legacy | contract          | `RecipeCubeControl`              | yes               |        9 |       1 | —                                                      | centered |
| `atom/npm-badge`                      | legacy | contract          | `RecipeNpmBadge`                 | yes               |        4 |       3 | `TOKEN_SOFTWARE_BADGE`                                 | centered |
| `atom/syntax-highlighted-code`        | legacy | contract          | `RecipeSyntaxHighlightedCode`    | yes               |        5 |       2 | `TOKEN_CODE_LANGUAGE`, `TOKEN_CODE_VIEW`, `TOKEN_SIZE` | padded   |
| `molecule/code-block`                 | legacy | contract          | `RecipeCodeBlock`                | yes               |        6 |       0 | `TOKEN_CODE_LANGUAGE`                                  | padded   |
| `molecule/code-diff`                  | legacy | contract          | `RecipeCodeDiff`                 | yes               |        4 |       2 | `TOKEN_CODE_LANGUAGE`                                  | padded   |
| `molecule/code-editor`                | legacy | contract          | `RecipeCodeEditor`               | yes               |        8 |       0 | `TOKEN_CODE_LANGUAGE`                                  | padded   |
| `molecule/component-preview`          | legacy | contract + render | `RecipeComponentPreview`         | yes               |        6 |       0 | `TOKEN_CODE_LANGUAGE`                                  | padded   |
| `molecule/documentation-block`        | legacy | contract          | `RecipeDocumentationBlock`       | yes               |        3 |       1 | `TOKEN_COLOR_TONE`                                     | padded   |
| `molecule/privacy-settings`           | legacy | contract          | `RecipePrivacySettings`          | yes               |        0 |       0 | —                                                      | padded   |
| `organism/code-viewer`                | legacy | contract          | `RecipeCodeViewer`               | yes               |        4 |       3 | `TOKEN_CODE_LANGUAGE`                                  | padded   |
| `organism/content-editor`             | legacy | contract          | `RecipeContentEditorStateProps`  | yes               |        3 |       1 | —                                                      | padded   |
| `organism/debug-console`              | legacy | contract + render | `RecipeDebugConsole`             | yes               |        6 |       0 | —                                                      | padded   |
| `organism/development-error-boundary` | legacy | contract + render | `RecipeDevelopmentErrorBoundary` | yes               |        7 |       0 | —                                                      | padded   |
| `organism/enhanced-export-panel`      | legacy | contract          | `RecipeEnhancedExportPanel`      | yes               |        2 |       0 | —                                                      | padded   |
| `organism/error-boundary`             | legacy | contract + render | `RecipeErrorBoundary`            | yes               |        0 |       0 | —                                                      | padded   |
| `organism/generic-code-viewer`        | legacy | contract          | `RecipeGenericCodeViewer`        | yes               |        2 |       3 | `TOKEN_CODE_LANGUAGE`                                  | padded   |
| `organism/live-code-section`          | legacy | contract          | `RecipeLiveCodeSection`          | yes               |        6 |       0 | —                                                      | padded   |
| `organism/mock-data-selector`         | legacy | contract          | `RecipeMockDataSelector`         | yes               |        7 |       0 | —                                                      | padded   |
| `organism/page-builder`               | legacy | contract          | `RecipePageBuilder`              | yes               |        2 |       0 | —                                                      | padded   |

## Custom renders

- `molecule/component-preview`: the required componentDemo snippet cannot be passed as an arg.
- `organism/debug-console`: three consoles share one log state (Date timestamps, clear/log callbacks).
- `organism/development-error-boundary`: the boundary needs children content and a local crash toggle.
- `organism/error-boundary`: without a component the boundary only shows its children snippet.

[sandbox](README.md) · [All modules](../README.md)
