# Story migration report: interaction / control

|         | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| control |       21 |            21 |               0 |            15 |                 6 |           0 |             0 |                                   21 |           1 |             7 |

| Family                           | Before | After             | Recipe                         | State uses recipe | Controls | Presets | Token options                    | Layout   |
| -------------------------------- | ------ | ----------------- | ------------------------------ | ----------------- | -------: | ------: | -------------------------------- | -------- |
| `atom/action-segmented-control`  | legacy | contract          | `RecipeActionSegmentedControl` | yes               |        1 |       0 | —                                | padded   |
| `atom/autocomplete-dropdown`     | legacy | contract          | `RecipeAutocompleteDropdown`   | yes               |        1 |       0 | —                                | padded   |
| `atom/checkbox`                  | legacy | contract          | `RecipeCheckbox`               | yes               |        4 |       0 | —                                | padded   |
| `atom/chip`                      | legacy | contract          | `RecipeChip`                   | yes               |        5 |       0 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | centered |
| `atom/radio`                     | legacy | contract          | `RecipeRadio`                  | yes               |        5 |       0 | `TOKEN_SIZE`                     | padded   |
| `atom/stepper`                   | legacy | contract          | `RecipeStepper` (new)          | —                 |        6 |       2 | —                                | padded   |
| `atom/switch`                    | legacy | contract          | `RecipeSwitch`                 | yes               |        7 |       0 | `TOKEN_SIZE`                     | padded   |
| `atom/tag`                       | legacy | contract          | `RecipeTag`                    | yes               |        5 |       0 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | centered |
| `atom/tick`                      | legacy | contract          | `RecipeTick`                   | yes               |        4 |       0 | —                                | padded   |
| `atom/toggle-group-item`         | legacy | contract + render | `RecipeToggleGroupItem`        | yes               |        2 |       0 | `TOKEN_SELECTION_TYPE`           | padded   |
| `atom/toggle-group-root`         | legacy | contract + render | `RecipeToggleGroupRoot`        | yes               |        2 |       0 | `TOKEN_SELECTION_TYPE`           | padded   |
| `atom/zoom-controls`             | legacy | contract          | `RecipeZoomControls`           | yes               |        5 |       0 | —                                | padded   |
| `molecule/combobox`              | legacy | contract          | `RecipeCombobox`               | yes               |        8 |       0 | —                                | padded   |
| `molecule/icon-toolbar`          | legacy | contract + render | `RecipeIconToolbar`            | —                 |        2 |       0 | `TOKEN_ORIENTATION`              | padded   |
| `molecule/range-input`           | legacy | contract          | `RecipeRangeInput`             | yes               |        5 |       0 | —                                | padded   |
| `molecule/range-slider`          | legacy | contract          | `RecipeRangeSlider`            | yes               |        8 |       0 | —                                | padded   |
| `molecule/selector`              | legacy | contract + render | `RecipeSelector`               | yes               |        4 |       0 | —                                | padded   |
| `molecule/slider-with-input`     | legacy | contract + render | `RecipeSliderWithInput`        | yes               |        5 |       0 | —                                | padded   |
| `organism/accessibility-toolbar` | legacy | contract          | `RecipeAccessibilityToolbar`   | yes               |        4 |       0 | —                                | padded   |
| `organism/multi-select`          | legacy | contract + render | `RecipeMultiSelect`            | yes               |        4 |       0 | —                                | padded   |
| `organism/shortcuts-panel`       | legacy | contract          | `RecipeShortcutsPanel`         | yes               |        0 |       0 | —                                | padded   |

## Custom renders

- `atom/toggle-group-item`: the item needs a ToggleGroupRoot parent that provides its context.
- `atom/toggle-group-root`: the root needs ToggleGroupItem children to coordinate.
- `molecule/icon-toolbar`: the active item is controlled through onSelect and local state.
- `molecule/selector`: the selected value is controlled through onSelect and local state.
- `molecule/slider-with-input`: the component resets to its value prop, so the value is controlled here.
- `organism/multi-select`: the component resets its selection to the value prop, so the value is controlled here.

[interaction](README.md) · [All modules](../README.md)
