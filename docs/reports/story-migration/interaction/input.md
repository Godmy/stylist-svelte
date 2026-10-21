# Story migration report: interaction / input

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| input |       23 |            23 |               0 |            20 |                 3 |           0 |             0 |                                   23 |           0 |            13 |

| Family                              | Before | After             | Recipe                        | State uses recipe | Controls | Presets | Token options                    | Layout   |
| ----------------------------------- | ------ | ----------------- | ----------------------------- | ----------------- | -------: | ------: | -------------------------------- | -------- |
| `atom/characters-count`             | legacy | contract + render | `RecipeCharactersCount`       | yes               |        3 |       0 | —                                | padded   |
| `atom/input-addon`                  | legacy | contract + render | `RecipeInputAddon`            | —                 |        5 |       2 | `TOKEN_COLOR_TONE`               | padded   |
| `atom/input-error`                  | legacy | contract          | `RecipeInputError`            | —                 |        2 |       0 | —                                | padded   |
| `atom/input-helper`                 | legacy | contract          | `RecipeInputHelper`           | —                 |        2 |       0 | `TOKEN_COLOR_TONE`               | padded   |
| `atom/input-label`                  | legacy | contract          | `RecipeInputLabel`            | yes               |        4 |       0 | `TOKEN_SIZE`                     | padded   |
| `atom/input-pin-digit`              | legacy | contract + render | `RecipeInputPinDigit`         | —                 |        5 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `atom/input-stepper`                | legacy | contract          | `RecipeInputStepper`          | —                 |        7 |       1 | `TOKEN_SIZE`                     | centered |
| `molecule/checkbox-group`           | legacy | contract          | `RecipeCheckboxGroup`         | yes               |        4 |       1 | —                                | padded   |
| `molecule/input-double`             | legacy | contract          | `RecipeInputDouble`           | —                 |       12 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/input-email`              | legacy | contract          | `RecipeInputEmail`            | —                 |        9 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/input-field`              | legacy | contract          | `RecipeInputField`            | yes               |        6 |       2 | —                                | padded   |
| `molecule/input-group`              | legacy | contract          | `RecipeInputGroup`            | yes               |       11 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/input-name`               | legacy | contract          | `RecipeInputName`             | —                 |        9 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/input-password`           | legacy | contract          | `RecipeInputPassword`         | yes               |       11 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/input-text`               | legacy | contract          | `RecipeInputText`             | yes               |       11 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `molecule/number-input`             | legacy | contract          | `RecipeNumberInput`           | yes               |        5 |       0 | —                                | padded   |
| `molecule/phone-number-input`       | legacy | contract          | `RecipePhoneNumberInput`      | yes               |        5 |       0 | —                                | padded   |
| `molecule/radio-button-group`       | legacy | contract          | `RecipeRadioButtonGroup`      | yes               |        3 |       0 | —                                | padded   |
| `molecule/radio-group`              | legacy | contract          | `RecipeRadioGroup`            | yes               |        7 |       2 | `TOKEN_ORIENTATION`              | padded   |
| `molecule/rich-text-format-toolbar` | legacy | contract          | `RecipeRichTextFormatToolbar` | —                 |        2 |       0 | —                                | padded   |
| `molecule/text-area`                | legacy | contract          | `RecipeTextArea`              | yes               |       12 |       1 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded   |
| `organism/rich-text-editor`         | legacy | contract          | `RecipeRichTextEditor`        | yes               |        2 |       1 | —                                | padded   |
| `organism/tag-input`                | legacy | contract          | `RecipeTagInput`              | yes               |        4 |       0 | —                                | padded   |

## Custom renders

- `atom/characters-count`: the count follows a textarea bound to local state.
- `atom/input-addon`: the addon is attached to a demo input and may hold an icon component.
- `atom/input-pin-digit`: a PIN row of four digits, the first one driven by the args.

[interaction](README.md) · [All modules](../README.md)
