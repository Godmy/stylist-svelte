# Story migration report: design-system / localization

|              | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| localization |        4 |             4 |               0 |             2 |                 2 |           0 |             0 |                                    4 |           0 |             1 |

| Family                        | Before | After             | Recipe                    | State uses recipe | Controls | Presets | Token options                    | Layout   |
| ----------------------------- | ------ | ----------------- | ------------------------- | ----------------- | -------: | ------: | -------------------------------- | -------- |
| `atom/country-flag`           | legacy | contract          | `RecipeCountryFlag`       | yes               |        3 |       2 | —                                | centered |
| `organism/language-selector`  | legacy | contract + render | `RecipeLanguageSelector`  | yes               |        6 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `organism/locale-switcher`    | legacy | contract + render | `RecipeLocaleSwitcher`    | yes               |        3 |       0 | —                                | padded   |
| `organism/translation-editor` | legacy | contract          | `RecipeTranslationEditor` | yes               |        5 |       1 | —                                | padded   |

## Custom renders

- `organism/language-selector`: the selected language is local state fed back through onLanguageChange.
- `organism/locale-switcher`: the locale and timezone are local state fed back through the change callbacks.

[design-system](README.md) · [All modules](../README.md)
