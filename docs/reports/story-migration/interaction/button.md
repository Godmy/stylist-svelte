# Story migration report: interaction / button

|        | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| button |       16 |            16 |               0 |            13 |                 3 |           0 |             0 |                                   16 |           7 |             8 |

| Family                  | Before | After             | Recipe                        | State uses recipe | Controls | Presets | Token options                    | Layout   |
| ----------------------- | ------ | ----------------- | ----------------------------- | ----------------- | -------: | ------: | -------------------------------- | -------- |
| `atom/animated-button`  | legacy | contract          | `RecipeAnimatedButton` (new)  | —                 |        4 |       2 | —                                | centered |
| `atom/arrow-button`     | legacy | contract          | `RecipeArrowButton` (new)     | —                 |        2 |       0 | —                                | centered |
| `atom/button`           | legacy | contract          | `RecipeButtonElement`         | yes               |        5 |       2 | `TOKEN_SIZE`                     | centered |
| `atom/button-composed`  | legacy | contract          | `RecipeButtonComposed`        | yes               |        6 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | centered |
| `atom/close-button`     | legacy | contract          | `RecipeCloseButton`           | yes               |        4 |       1 | `TOKEN_SIZE`                     | centered |
| `atom/copy-button`      | legacy | contract          | `RecipeCopyButton`            | yes               |        6 |       0 | `TOKEN_SIZE`                     | centered |
| `atom/fill-button`      | legacy | contract          | `RecipeFillButton` (new)      | —                 |        2 |       0 | —                                | centered |
| `atom/follow-button`    | legacy | contract + render | `RecipeFollowButton`          | yes               |        4 |       1 | `TOKEN_SIZE`                     | centered |
| `atom/glow-button`      | legacy | contract          | `RecipeGlowButton` (new)      | —                 |        2 |       0 | —                                | centered |
| `atom/icon-button`      | legacy | contract          | `RecipeIconButton`            | yes               |        6 |       1 | `TOKEN_SIZE`                     | centered |
| `atom/morph-button`     | legacy | contract          | `RecipeMorphButton` (new)     | —                 |        1 |       2 | —                                | centered |
| `atom/selection-button` | legacy | contract          | `RecipeSelectionButton` (new) | —                 |        3 |       0 | —                                | centered |
| `atom/shine-button`     | legacy | contract          | `RecipeShineButton` (new)     | —                 |        4 |       0 | —                                | centered |
| `atom/split-button`     | legacy | contract + render | `RecipeSplitButton`           | yes               |        4 |       0 | `TOKEN_SIZE`                     | centered |
| `atom/tool-button`      | legacy | contract + render | `RecipeToolButton`            | yes               |        1 |       0 | —                                | padded   |
| `atom/whatsapp-button`  | legacy | contract          | `RecipeWhatsappButton`        | —                 |        5 |       0 | `TOKEN_SIZE`                     | centered |

## Custom renders

- `atom/follow-button`: isFollowing is host-controlled, so the story keeps it in local state and simulates the request in async callbacks.
- `atom/split-button`: items and primaryAction are required callbacks, not cloneable args.
- `atom/tool-button`: several tools share one local active-tool state.

[interaction](README.md) · [All modules](../README.md)
