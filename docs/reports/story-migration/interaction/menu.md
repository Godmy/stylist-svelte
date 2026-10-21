# Story migration report: interaction / menu

|      | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| menu |       11 |            11 |               0 |             5 |                 6 |           0 |             0 |                                   11 |           0 |             4 |

| Family                       | Before | After             | Recipe                  | State uses recipe | Controls | Presets | Token options      | Layout |
| ---------------------------- | ------ | ----------------- | ----------------------- | ----------------- | -------: | ------: | ------------------ | ------ |
| `atom/burger-menu`           | legacy | contract + render | `RecipeBurgerMenu`      | —                 |        4 |       3 | `TOKEN_SIZE`       | padded |
| `atom/mega-menu-link`        | legacy | contract          | `RecipeMegaMenuLink`    | —                 |        7 |       4 | —                  | padded |
| `atom/mega-menu-trigger`     | legacy | contract + render | `RecipeMegaMenuTrigger` | —                 |        4 |       0 | —                  | padded |
| `atom/menu-item`             | legacy | contract          | `RecipeMenuItem`        | —                 |        4 |       6 | `TOKEN_COLOR_TONE` | padded |
| `molecule/dropdown-menu`     | legacy | contract + render | `RecipeDropdownMenu`    | —                 |        3 |       0 | `TOKEN_ALIGNMENT`  | padded |
| `molecule/mega-menu-column`  | legacy | contract          | `RecipeMegaMenuColumn`  | —                 |        2 |       0 | —                  | padded |
| `molecule/mega-menu-feature` | legacy | contract          | `RecipeMegaMenuFeature` | —                 |        5 |       2 | —                  | padded |
| `molecule/mega-menu-panel`   | legacy | contract          | `RecipeMegaMenuPanel`   | —                 |        1 |       1 | —                  | padded |
| `organism/app-header`        | legacy | contract + render | `RecipeAppHeader`       | —                 |        2 |       0 | —                  | padded |
| `organism/drawer`            | legacy | contract + render | `RecipeDrawer`          | —                 |        5 |       0 | `TOKEN_ALIGNMENT`  | padded |
| `organism/mega-menu`         | legacy | contract + render | `RecipeMegaMenu`        | —                 |        4 |       1 | —                  | padded |

## Custom renders

- `atom/burger-menu`: the burger only reports clicks, so the open state is toggled here.
- `atom/mega-menu-trigger`: the trigger only reports clicks, so open states are toggled here (single trigger and a coordinated row).
- `molecule/dropdown-menu`: the menu items close the dropdown through the closeDropdown argument of the children snippet.
- `organism/app-header`: the trailing actions are a named snippet, which story content cannot provide.
- `organism/drawer`: the header and actions are named snippets, which story content cannot provide.
- `organism/mega-menu`: leading/trailing are named snippets, the menu remounts when defaultOpenId changes and events go to a local log.

[interaction](README.md) · [All modules](../README.md)
