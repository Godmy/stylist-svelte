# Story migration report: information / list

|      | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| list |        4 |             4 |               0 |             3 |                 1 |           0 |             0 |                                    4 |           0 |             2 |

| Family                        | Before | After             | Recipe                  | State uses recipe | Controls | Presets | Token options                    | Layout   |
| ----------------------------- | ------ | ----------------- | ----------------------- | ----------------- | -------: | ------: | -------------------------------- | -------- |
| `atom/list-item-marker`       | legacy | contract          | `RecipeListItemMarker`  | yes               |        4 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | centered |
| `molecule/base-card`          | legacy | contract          | `RecipeBaseCard`        | yes               |        5 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/drag-and-drop-list` | legacy | contract + render | `RecipeDragAndDropList` | yes               |        2 |       2 | —                                | padded   |
| `organism/sortable-list`      | legacy | contract          | `RecipeSortableList`    | yes               |        3 |       2 | —                                | padded   |

## Custom renders

- `molecule/drag-and-drop-list`: the list only emits onItemsChange, so the reordered items live in local state.

[information](README.md) · [All modules](../README.md)
