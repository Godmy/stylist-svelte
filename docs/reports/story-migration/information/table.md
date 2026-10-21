# Story migration report: information / table

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| table |       18 |            17 |               1 |            11 |                 7 |           0 |             0 |                                   18 |           0 |             0 |

| Family                      | Before | After             | Recipe                  | State uses recipe | Controls | Presets | Token options | Layout |
| --------------------------- | ------ | ----------------- | ----------------------- | ----------------- | -------: | ------: | ------------- | ------ |
| `atom/cell`                 | legacy | contract          | `RecipeCell`            | yes               |        2 |       1 | —             | padded |
| `atom/cell-header`          | legacy | contract + render | `RecipeCellHeader`      | yes               |        2 |       0 | —             | padded |
| `atom/cell-icon`            | legacy | contract          | `RecipeCellIcon`        | yes               |        2 |       2 | —             | padded |
| `atom/cell-pill`            | legacy | contract          | `RecipeCellPill`        | yes               |        2 |       4 | —             | padded |
| `atom/cell-text`            | legacy | contract          | `RecipeCellText`        | yes               |        3 |       3 | —             | padded |
| `atom/row`                  | legacy | contract          | `RecipeRow`             | yes               |        3 |       1 | —             | padded |
| `atom/table`                | legacy | contract          | `RecipeTable`           | —                 |        4 |       2 | —             | padded |
| `molecule/column`           | legacy | contract + render | `RecipeColumn`          | yes               |        0 |       0 | —             | padded |
| `molecule/column-manager`   | legacy | contract          | `RecipeColumnManager`   | yes               |        0 |       0 | —             | padded |
| `molecule/comparison-table` | legacy | contract          | `RecipeComparisonTable` | yes               |        3 |       1 | —             | padded |
| `molecule/filter-bar`       | legacy | contract + render | `RecipeFilterBar`       | yes               |        2 |       0 | —             | padded |
| `molecule/filter-pills`     | legacy | contract + render | `RecipeFilterPills`     | yes               |        2 |       0 | —             | padded |
| `molecule/filter-text`      | legacy | contract          | `RecipeFilterText`      | yes               |        2 |       0 | —             | padded |
| `molecule/row-expandable`   | legacy | contract + render | `RecipeRowExpandable`   | yes               |        1 |       1 | —             | padded |
| `organism/component`        | legacy | contract + render | `RecipeComponent`       | yes               |        4 |       1 | —             | padded |
| `organism/data-table`       | legacy | contract          | `RecipeDataTable`       | yes               |        3 |       1 | —             | padded |
| `organism/data-table-shell` | legacy | contract          | `RecipeDataTableShell`  | yes               |        5 |       1 | —             | padded |
| `organism/table-list-panel` | none   | contract + render | `RecipeTableListPanel`  | —                 |        0 |       1 | —             | padded |

## Custom renders

- `atom/cell-header`: the header cells are controlled and share the sort state of the row.
- `molecule/column`: the column headers are controlled and share the sort state of the row.
- `molecule/filter-bar`: the pill groups are controlled, the story keeps the active values onTogglePill reports.
- `molecule/filter-pills`: the pills are controlled, the story keeps the active values onToggle reports.
- `molecule/row-expandable`: rowContent and expandableContent are required snippets.
- `organism/component`: the catalog needs Set selections and its required callbacks.
- `organism/table-list-panel`: onSelect is a required callback, the story keeps the selected table.

[information](README.md) · [All modules](../README.md)
