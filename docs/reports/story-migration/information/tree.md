# Story migration report: information / tree

|      | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| tree |        3 |             3 |               0 |             3 |                 0 |           0 |             0 |                                    3 |           0 |             0 |

| Family                    | Before | After    | Recipe               | State uses recipe | Controls | Presets | Token options | Layout |
| ------------------------- | ------ | -------- | -------------------- | ----------------- | -------: | ------: | ------------- | ------ |
| `molecule/flat-tree`      | legacy | contract | `RecipeTree`         | —                 |        1 |       0 | —             | padded |
| `molecule/tree-node-item` | legacy | contract | `RecipeTreeNodeItem` | yes               |        0 |       0 | —             | padded |
| `molecule/tree-viewer`    | legacy | contract | `RecipeTreeViewer`   | yes               |        0 |       0 | —             | padded |

[information](README.md) · [All modules](../README.md)
