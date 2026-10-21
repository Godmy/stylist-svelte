# Story migration report: architecture / canvas

|        | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| canvas |        7 |             7 |               0 |             7 |                 0 |           0 |             0 |                                    7 |           0 |             0 |

| Family                          | Before | After    | Recipe                      | State uses recipe | Controls | Presets | Token options | Layout     |
| ------------------------------- | ------ | -------- | --------------------------- | ----------------- | -------: | ------: | ------------- | ---------- |
| `molecule/canvas-toolbar`       | legacy | contract | `RecipeCanvasToolbar`       | yes               |        1 |       1 | —             | padded     |
| `molecule/color-palette`        | legacy | contract | `RecipeColorPalette`        | yes               |        4 |       1 | —             | padded     |
| `molecule/drawing-overlay`      | legacy | contract | `RecipeDrawingOverlay`      | yes               |        1 |       0 | —             | fullscreen |
| `molecule/drawing-surface`      | legacy | contract | `RecipeDrawingSurface`      | yes               |        7 |       1 | —             | padded     |
| `molecule/screenshot-selector`  | legacy | contract | `RecipeScreenshotSelector`  | yes               |        2 |       1 | —             | fullscreen |
| `organism/collaborative-editor` | legacy | contract | `RecipeCollaborativeEditor` | yes               |        2 |       0 | —             | padded     |
| `organism/shared-canvas`        | legacy | contract | `RecipeSharedCanvas`        | yes               |        4 |       0 | —             | padded     |

[architecture](README.md) · [All modules](../README.md)
