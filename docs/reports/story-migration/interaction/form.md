# Story migration report: interaction / form

|      | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| form |       12 |            12 |               0 |            10 |                 2 |           0 |             0 |                                   12 |           6 |             2 |

| Family                          | Before | After             | Recipe                           | State uses recipe | Controls | Presets | Token options       | Layout   |
| ------------------------------- | ------ | ----------------- | -------------------------------- | ----------------- | -------: | ------: | ------------------- | -------- |
| `atom/form-footer`              | legacy | contract          | `RecipeFormFooter`               | yes               |        5 |       2 | —                   | padded   |
| `atom/form-header`              | legacy | contract + render | `RecipeFormHeader`               | yes               |        5 |       1 | —                   | padded   |
| `molecule/checkbox-group`       | legacy | contract          | `RecipeCheckboxGroup`            | yes               |        4 |       2 | —                   | padded   |
| `molecule/form-selection`       | legacy | contract          | `RecipeFormSelection`            | yes               |        3 |       1 | —                   | padded   |
| `molecule/toggle-button-group`  | legacy | contract          | `RecipeToggleButtonGroup`        | yes               |        3 |       1 | `TOKEN_SIZE`        | centered |
| `molecule/validation`           | legacy | contract          | `RecipeValidation` (new)         | yes               |        7 |       3 | `TOKEN_ORIENTATION` | padded   |
| `organism/address-form`         | legacy | contract          | `RecipeAddressForm` (new)        | yes               |        5 |       1 | —                   | padded   |
| `organism/form-with-validation` | legacy | contract          | `RecipeFormWithValidation` (new) | yes               |        2 |       2 | —                   | padded   |
| `organism/login-form`           | legacy | contract          | `RecipeLoginForm` (new)          | yes               |        2 |       1 | —                   | padded   |
| `organism/schema-form-dialog`   | legacy | contract + render | `RecipeSchemaFormDialog`         | —                 |        3 |       1 | —                   | padded   |
| `organism/screen-reader`        | legacy | contract          | `RecipeScreenReader` (new)       | yes               |        2 |       0 | —                   | padded   |
| `organism/search-form`          | legacy | contract          | `RecipeSearchForm` (new)         | yes               |        2 |       1 | —                   | padded   |

## Custom renders

- `atom/form-header`: the back button appears only with a backAction callback.
- `organism/schema-form-dialog`: the dialog's open state and the saved data live in the story.

[interaction](README.md) · [All modules](../README.md)
