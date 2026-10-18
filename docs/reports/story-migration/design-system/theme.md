# Story migration report: design-system / theme

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| theme |       11 |            11 |               0 |             5 |                 6 |           0 |             0 |                                   11 |           0 |             9 |

| Family                    | Before | After             | Recipe                  | State uses recipe | Controls | Presets | Token options                            | Layout |
| ------------------------- | ------ | ----------------- | ----------------------- | ----------------- | -------: | ------: | ---------------------------------------- | ------ |
| `atom/color-swatch`       | legacy | contract          | `RecipeColorSwatch`     | yes               |        2 |       0 | `TOKEN_SIZE_REM`                         | padded |
| `atom/theme-consumer`     | legacy | contract + render | `RecipeThemeConsumer`   | —                 |        2 |       0 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |
| `atom/theme-mode-toggle`  | legacy | contract          | `RecipeThemeModeToggle` | yes               |        4 |       2 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |
| `atom/theme-provider`     | legacy | contract + render | `RecipeThemeProvider`   | yes               |        2 |       0 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |
| `molecule/color-picker`   | legacy | contract          | `RecipeColorPicker`     | yes               |        4 |       1 | —                                        | padded |
| `molecule/story`          | legacy | contract + render | `RecipeStory`           | yes               |        4 |       0 | —                                        | padded |
| `molecule/theme-context`  | legacy | contract + render | `RecipeThemeContext`    | yes               |        2 |       0 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |
| `molecule/theme-surface`  | legacy | contract + render | `RecipeThemeSurface`    | yes               |        2 |       0 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |
| `molecule/theme-switcher` | legacy | contract          | `RecipeThemeSwitcher`   | yes               |        4 |       1 | `TOKEN_THEME_SCHEME`                     | padded |
| `organism/theme-palette`  | legacy | contract + render | `RecipeThemePalette`    | yes               |        7 |       1 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |
| `organism/theme-settings` | legacy | contract          | `RecipeThemeSettings`   | yes               |        2 |       0 | `TOKEN_THEME_MODE`, `TOKEN_THEME_SCHEME` | padded |

## Custom renders

- `atom/theme-consumer`: the consumer needs a ThemeProvider parent and a children snippet that receives the context.
- `atom/theme-provider`: a nested ThemeConsumer snippet shows the context the provider exposes.
- `molecule/story`: the wrapper shows its preview and variants only through snippet props.
- `molecule/theme-context`: the molecule needs a ThemeProvider parent and a children snippet that receives the context.
- `molecule/theme-surface`: header, content and footer are snippets receiving the theme context of a ThemeProvider parent.
- `organism/theme-palette`: the palette colors are computed from the theme scheme, mode and color source knobs.

[design-system](README.md) · [All modules](../README.md)
