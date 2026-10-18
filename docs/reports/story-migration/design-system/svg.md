# Story migration report: design-system / svg

|     | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| --- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| svg |       11 |            11 |               0 |            10 |                 1 |           0 |             0 |                                   11 |           0 |             2 |

| Family              | Before | After             | Recipe              | State uses recipe | Controls | Presets | Token options                           | Layout   |
| ------------------- | ------ | ----------------- | ------------------- | ----------------- | -------: | ------: | --------------------------------------- | -------- |
| `atom/flag`         | legacy | contract          | `RecipeFlag`        | yes               |        3 |       2 | `TOKEN_FLAG_REGISTRY`, `TOKEN_SIZE_REM` | centered |
| `atom/icon`         | legacy | contract          | `RecipeIcon`        | yes               |        9 |       2 | `TOKEN_ICON_REGISTRY`, `TOKEN_SIZE`     | centered |
| `atom/svg`          | legacy | contract          | `RecipeSvg`         | yes               |        4 |       2 | —                                       | centered |
| `atom/svg-circle`   | legacy | contract          | `RecipeSvgCircle`   | —                 |        7 |       2 | —                                       | centered |
| `atom/svg-group`    | legacy | contract + render | `RecipeSvgGroup`    | —                 |        3 |       1 | —                                       | centered |
| `atom/svg-line`     | legacy | contract          | `RecipeSvgLine`     | —                 |        7 |       1 | —                                       | centered |
| `atom/svg-path`     | legacy | contract          | `RecipeSvgPath`     | —                 |        4 |       1 | —                                       | centered |
| `atom/svg-polygon`  | legacy | contract          | `RecipeSvgPolygon`  | —                 |        5 |       0 | —                                       | centered |
| `atom/svg-polyline` | legacy | contract          | `RecipeSvgPolyline` | —                 |        4 |       0 | —                                       | centered |
| `atom/svg-rect`     | legacy | contract          | `RecipeSvgRect`     | —                 |        7 |       2 | —                                       | centered |
| `atom/svg-text`     | legacy | contract          | `RecipeSvgText`     | —                 |        6 |       1 | —                                       | centered |

## Custom renders

- `atom/svg-group`: the group needs an `<svg>` parent and SVG primitive children.

[design-system](README.md) · [All modules](../README.md)
