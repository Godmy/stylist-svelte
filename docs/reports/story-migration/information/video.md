# Story migration report: information / video

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| video |        2 |             2 |               0 |             2 |                 0 |           0 |             0 |                                    2 |           1 |             0 |

| Family                  | Before | After    | Recipe                   | State uses recipe | Controls | Presets | Token options | Layout |
| ----------------------- | ------ | -------- | ------------------------ | ----------------- | -------: | ------: | ------------- | ------ |
| `molecule/video-player` | legacy | contract | `RecipeVideoPlayer`      | yes               |        7 |       0 | —             | padded |
| `molecule/video-scene`  | legacy | contract | `RecipeVideoScene` (new) | —                 |        3 |       1 | —             | padded |

[information](README.md) · [All modules](../README.md)
