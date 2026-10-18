# Story migration report: interaction / navigation

|            | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| navigation |        5 |             5 |               0 |             3 |                 2 |           0 |             0 |                                    5 |           1 |             1 |

| Family                  | Before | After             | Recipe                    | State uses recipe | Controls | Presets | Token options | Layout     |
| ----------------------- | ------ | ----------------- | ------------------------- | ----------------- | -------: | ------: | ------------- | ---------- |
| `atom/page-button`      | legacy | contract          | `RecipePageButton`        | yes               |        5 |       1 | `TOKEN_SIZE`  | centered   |
| `atom/page-ellipsis`    | legacy | contract + render | `RecipePageEllipsis`      | yes               |        1 |       0 | —             | padded     |
| `organism/bottom-sheet` | legacy | contract + render | `RecipeBottomSheet` (new) | —                 |        3 |       0 | —             | fullscreen |
| `organism/pagination`   | legacy | contract          | `RecipePagination`        | yes               |        6 |       1 | —             | centered   |
| `organism/sidebar`      | legacy | contract          | `RecipeSidebar`           | yes               |        3 |       1 | —             | fullscreen |

## Custom renders

- `atom/page-ellipsis`: the marker only makes sense between page buttons of a pagination bar.
- `organism/bottom-sheet`: the body and the actions footer are snippet props.

[interaction](README.md) · [All modules](../README.md)
