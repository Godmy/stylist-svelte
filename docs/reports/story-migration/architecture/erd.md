# Story migration report: architecture / erd

|     | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| --- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| erd |        9 |             8 |               1 |             8 |                 1 |           0 |             0 |                                    9 |           0 |             0 |

| Family                     | Before | After             | Recipe                 | State uses recipe | Controls | Presets | Token options | Layout     |
| -------------------------- | ------ | ----------------- | ---------------------- | ----------------- | -------: | ------: | ------------- | ---------- |
| `atom/schema-dependency`   | legacy | contract + render | `RecipeErdDependency`  | —                 |        3 |       2 | —             | padded     |
| `atom/schema-table-field`  | legacy | contract          | `RecipeErdTableField`  | —                 |        2 |       1 | —             | padded     |
| `atom/schema-table-header` | legacy | contract          | `RecipeErdTableHeader` | —                 |        1 |       1 | —             | padded     |
| `molecule/schema-table`    | legacy | contract          | `RecipeErdTable`       | —                 |        2 |       1 | —             | padded     |
| `organism/schema`          | legacy | contract          | `RecipeSchema`         | yes               |        4 |       0 | —             | fullscreen |
| `organism/schema-header`   | none   | contract          | `RecipeSchemaHeader`   | —                 |       10 |       0 | —             | grid       |
| `organism/schema-text`     | legacy | contract          | `RecipeSchemaText`     | —                 |        2 |       1 | —             | padded     |
| `organism/schema-tool`     | legacy | contract          | `RecipeSchemaTool`     | —                 |        9 |       0 | —             | grid       |
| `organism/schema-view`     | legacy | contract          | `RecipeErdSchemaView`  | yes               |        5 |       0 | —             | padded     |

## Custom renders

- `atom/schema-dependency`: the marker is an SVG fragment drawn between two table boxes that follow y2.

[architecture](README.md) · [All modules](../README.md)
