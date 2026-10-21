# Story migration report: design-system / typography

|            | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| typography |       11 |            11 |               0 |            11 |                 0 |           0 |             0 |                                   11 |           0 |             6 |

| Family                 | Before | After    | Recipe             | State uses recipe | Controls | Presets | Token options                                                                                                                | Layout   |
| ---------------------- | ------ | -------- | ------------------ | ----------------- | -------: | ------: | ---------------------------------------------------------------------------------------------------------------------------- | -------- |
| `atom/abbr`            | legacy | contract | `RecipeAbbr`       | yes               |        1 |       1 | —                                                                                                                            | centered |
| `atom/badge`           | legacy | contract | `RecipeBadge`      | yes               |        4 |       4 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE`                                                                                             | centered |
| `atom/blockquote`      | legacy | contract | `RecipeBlockquote` | yes               |        5 |       0 | —                                                                                                                            | padded   |
| `atom/heading`         | legacy | contract | `RecipeHeading`    | yes               |       13 |       3 | `TOKEN_COLOR_TONE`, `TOKEN_FONT_FAMILY`, `TOKEN_FONT_SIZE`, `TOKEN_FONT_WEIGHT`, `TOKEN_LETTER_SPACING`, `TOKEN_LINE_HEIGHT` | padded   |
| `atom/inline-code`     | legacy | contract | `RecipeInlineCode` | yes               |        0 |       0 | —                                                                                                                            | centered |
| `atom/kbd`             | legacy | contract | `RecipeKbd`        | yes               |        0 |       0 | —                                                                                                                            | centered |
| `atom/link`            | legacy | contract | `RecipeLink`       | yes               |        7 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_FONT_SIZE`                                                                                        | centered |
| `atom/text`            | legacy | contract | `RecipeText`       | yes               |       13 |       3 | `TOKEN_COLOR_TONE`, `TOKEN_FONT_FAMILY`, `TOKEN_FONT_SIZE`, `TOKEN_FONT_WEIGHT`, `TOKEN_LETTER_SPACING`, `TOKEN_LINE_HEIGHT` | padded   |
| `molecule/badge-group` | legacy | contract | `RecipeBadgeGroup` | yes               |        2 |       0 | —                                                                                                                            | centered |
| `molecule/paragraph`   | legacy | contract | `RecipeText`       | yes               |       12 |       3 | `TOKEN_COLOR_TONE`, `TOKEN_FONT_FAMILY`, `TOKEN_FONT_SIZE`, `TOKEN_FONT_WEIGHT`, `TOKEN_LETTER_SPACING`, `TOKEN_LINE_HEIGHT` | padded   |
| `molecule/rich-text`   | legacy | contract | `RecipeRichText`   | yes               |        8 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_FONT_SIZE`, `TOKEN_FONT_WEIGHT`, `TOKEN_LETTER_SPACING`, `TOKEN_LINE_HEIGHT`                      | padded   |

[design-system](README.md) · [All modules](../README.md)
