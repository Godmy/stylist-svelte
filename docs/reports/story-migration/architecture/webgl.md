# Story migration report: architecture / webgl

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| webgl |        5 |             5 |               0 |             1 |                 4 |           0 |             0 |                                    5 |           5 |             0 |

| Family                              | Before | After             | Recipe                               | State uses recipe | Controls | Presets | Token options | Layout   |
| ----------------------------------- | ------ | ----------------- | ------------------------------------ | ----------------- | -------: | ------: | ------------- | -------- |
| `atom/gl-canvas`                    | legacy | contract + render | `RecipeGlCanvas` (new)               | —                 |        0 |       0 | —             | padded   |
| `molecule/concentric-circles-scene` | legacy | contract + render | `RecipeConcentricCirclesScene` (new) | —                 |        1 |       1 | —             | padded   |
| `molecule/hyperspace-scene`         | legacy | contract + render | `RecipeHyperspaceScene` (new)        | —                 |        0 |       0 | —             | padded   |
| `molecule/turtle-dissolve-scene`    | legacy | contract + render | `RecipeTurtleDissolveScene` (new)    | —                 |        1 |       3 | —             | padded   |
| `organism/scene-launcher`           | legacy | contract          | `RecipeSceneLauncher` (new)          | —                 |        1 |       0 | —             | centered |

## Custom renders

- `atom/gl-canvas`: the canvas draws only through the frame callback, and it fills a sized frame.
- `molecule/concentric-circles-scene`: the WebGL canvas fills its parent, so the scene needs a sized frame.
- `molecule/hyperspace-scene`: the WebGL canvas fills its parent, so the scene needs a sized frame.
- `molecule/turtle-dissolve-scene`: the scene is absolutely positioned over its parent, so it needs a sized, positioned frame.

[architecture](README.md) · [All modules](../README.md)
