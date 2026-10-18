# Story migration report: interaction / search

|        | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| search |        6 |             6 |               0 |             6 |                 0 |           0 |             0 |                                    6 |           0 |             0 |

| Family                    | Before | After    | Recipe                   | State uses recipe | Controls | Presets | Token options | Layout |
| ------------------------- | ------ | -------- | ------------------------ | ----------------- | -------: | ------: | ------------- | ------ |
| `atom/auto-search`        | legacy | contract | `RecipeAutoSearch`       | yes               |        2 |       0 | —             | padded |
| `atom/search-suggestion`  | legacy | contract | `RecipeSearchSuggestion` | yes               |        3 |       2 | —             | padded |
| `molecule/search-bar`     | legacy | contract | `RecipeSearchBar`        | yes               |        4 |       2 | —             | padded |
| `organism/auto-complete`  | legacy | contract | `RecipeAutoComplete`     | yes               |        3 |       0 | —             | padded |
| `organism/search-form`    | legacy | contract | `RecipeSearchForm`       | yes               |        2 |       0 | —             | padded |
| `organism/search-results` | legacy | contract | `RecipeSearchResults`    | yes               |        2 |       2 | —             | padded |

[interaction](README.md) · [All modules](../README.md)
