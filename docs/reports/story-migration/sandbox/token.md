# Story migration report: sandbox / token

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| token |       21 |            21 |               0 |            20 |                 1 |           0 |             0 |                                   21 |          14 |             2 |

| Family                             | Before | After             | Recipe                              | State uses recipe | Controls | Presets | Token options     | Layout   |
| ---------------------------------- | ------ | ----------------- | ----------------------------------- | ----------------- | -------: | ------: | ----------------- | -------- |
| `atom/card-close`                  | legacy | contract          | `RecipeCardClose` (new)             | —                 |        1 |       1 | —                 | padded   |
| `atom/card-open`                   | legacy | contract          | `RecipeCardOpen` (new)              | —                 |        2 |       2 | —                 | padded   |
| `atom/card-shell`                  | legacy | contract + render | `RecipeCardShell` (new)             | —                 |        2 |       1 | —                 | padded   |
| `atom/orbit-background`            | legacy | contract          | `RecipeOrbitBackground` (new)       | —                 |        1 |       0 | —                 | centered |
| `atom/orbit-token-node`            | legacy | contract          | `RecipeOrbitTokenNode` (new)        | —                 |        2 |       1 | —                 | padded   |
| `atom/token-chip-set`              | legacy | contract          | `RecipeTokenChipSet`                | yes               |        3 |       1 | —                 | padded   |
| `atom/token-control-base`          | legacy | contract          | `RecipeTokenControlBase`            | yes               |        1 |       1 | —                 | inline   |
| `atom/token-icon`                  | legacy | contract          | `RecipeTokenIcon` (new)             | —                 |        2 |       0 | —                 | padded   |
| `atom/token-radio`                 | legacy | contract          | `RecipeTokenRadio`                  | yes               |        1 |       0 | `TOKEN_ALIGNMENT` | padded   |
| `atom/token-range`                 | legacy | contract          | `RecipeTokenRange`                  | yes               |        1 |       0 | —                 | padded   |
| `atom/token-select`                | legacy | contract          | `RecipeTokenSelect`                 | yes               |        1 |       0 | —                 | padded   |
| `atom/token-text`                  | legacy | contract          | `RecipeTokenText`                   | yes               |        2 |       0 | —                 | padded   |
| `molecule/domain-descriptor-panel` | legacy | contract          | `RecipeDomainDescriptorPanel` (new) | —                 |        0 |       0 | —                 | padded   |
| `molecule/orbit`                   | legacy | contract          | `RecipeOrbit` (new)                 | —                 |        2 |       1 | —                 | padded   |
| `molecule/ribbon-menu`             | legacy | contract          | `RecipeRibbonMenu` (new)            | —                 |        0 |       0 | —                 | padded   |
| `molecule/token`                   | legacy | contract          | `RecipeToken`                       | yes               |        0 |       4 | `TOKEN_ALIGNMENT` | padded   |
| `molecule/token-setting`           | legacy | contract          | `RecipeTokenSetting` (new)          | —                 |        4 |       2 | —                 | padded   |
| `organism/domain-builder`          | legacy | contract          | `RecipeDomainBuilder` (new)         | —                 |        0 |       0 | —                 | padded   |
| `organism/orbit-contract-l5`       | legacy | contract          | `RecipeOrbitContractL5` (new)       | —                 |        3 |       1 | —                 | padded   |
| `organism/prismatic-orbit-l6`      | legacy | contract          | `RecipePrismaticOrbitL6` (new)      | —                 |        0 |       0 | —                 | padded   |
| `organism/token-settings`          | legacy | contract          | `RecipeTokenSettings` (new)         | yes               |        3 |       0 | —                 | padded   |

## Custom renders

- `atom/card-shell`: the shell needs chip children and a close snippet whose CardClose follows `expanded`.

[sandbox](README.md) · [All modules](../README.md)
