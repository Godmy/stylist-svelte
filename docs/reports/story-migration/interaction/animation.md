# Story migration report: interaction / animation

|           | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| --------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| animation |       27 |            27 |               0 |            22 |                 5 |           0 |             0 |                                   27 |           1 |             5 |

| Family                                | Before | After             | Recipe                           | State uses recipe | Controls | Presets | Token options                                         | Layout   |
| ------------------------------------- | ------ | ----------------- | -------------------------------- | ----------------- | -------: | ------: | ----------------------------------------------------- | -------- |
| `atom/animated-background`            | legacy | contract + render | `RecipeAnimatedBackground`       | yes               |        7 |       0 | —                                                     | padded   |
| `atom/animated-digit`                 | legacy | contract + render | `RecipeAnimatedDigit`            | yes               |        6 |       0 | —                                                     | padded   |
| `atom/arc-letter`                     | legacy | contract          | `RecipeArcLetter`                | —                 |        7 |       0 | —                                                     | padded   |
| `atom/beach-water`                    | legacy | contract          | `RecipeBeachWater`               | —                 |        7 |       0 | —                                                     | padded   |
| `atom/css-3d-cube`                    | legacy | contract + render | `RecipeCss3dCube`                | yes               |        5 |       0 | —                                                     | padded   |
| `atom/floating-icon`                  | legacy | contract          | `RecipeFloatingIcon`             | —                 |        3 |       3 | `TOKEN_COLOR_TONE`                                    | padded   |
| `atom/layout-transformation`          | legacy | contract          | `RecipeLayoutTransformation`     | yes               |        8 |       3 | —                                                     | padded   |
| `atom/letter-arc-path`                | legacy | contract          | `RecipeLetterArcPath`            | —                 |        1 |       0 | —                                                     | padded   |
| `atom/marquee-ticker`                 | legacy | contract + render | `RecipeMarqueeTicker`            | —                 |       14 |       0 | —                                                     | padded   |
| `atom/palm-sway`                      | legacy | contract          | `RecipePalmSway`                 | —                 |        3 |       0 | —                                                     | padded   |
| `atom/progress-bar`                   | legacy | contract          | `RecipeProgressBar`              | yes               |        3 |       0 | —                                                     | padded   |
| `atom/scroll-phase-debug`             | legacy | contract          | `RecipeScrollPhaseDebug` (new)   | —                 |        4 |       0 | —                                                     | padded   |
| `atom/skeleton`                       | legacy | contract          | `RecipeSkeleton`                 | yes               |        3 |       2 | —                                                     | padded   |
| `atom/spinner`                        | legacy | contract          | `RecipeSpinner`                  | yes               |        2 |       2 | `TOKEN_SIZE`                                          | centered |
| `atom/tooltip`                        | legacy | contract          | `RecipeTooltip`                  | yes               |        6 |       2 | `TOKEN_ALIGNMENT`, `TOKEN_CONNECTOR`, `TOKEN_TRIGGER` | padded   |
| `atom/transformable`                  | legacy | contract          | `RecipeTransformable`            | yes               |        5 |       0 | —                                                     | padded   |
| `atom/turtle-crawl`                   | legacy | contract          | `RecipeTurtleCrawl`              | —                 |        2 |       0 | —                                                     | padded   |
| `atom/turtle-logo-mark`               | legacy | contract          | `RecipeTurtleLogoMark`           | —                 |        8 |       0 | —                                                     | padded   |
| `atom/vector-scene`                   | legacy | contract          | `RecipeVectorScene`              | yes               |        4 |       3 | —                                                     | padded   |
| `atom/wave-surf`                      | legacy | contract          | `RecipeWaveSurf`                 | —                 |        3 |       0 | —                                                     | padded   |
| `atom/whale-spout`                    | legacy | contract          | `RecipeWhaleSpout`               | —                 |        3 |       0 | —                                                     | padded   |
| `molecule/atomic-tier-card`           | legacy | contract          | `RecipeAtomicTierCard`           | —                 |        6 |       2 | `TOKEN_COLOR_TONE`                                    | padded   |
| `molecule/loading`                    | legacy | contract          | `RecipeLoading`                  | yes               |        3 |       0 | `TOKEN_SIZE`                                          | padded   |
| `molecule/phrase-arc-flight`          | legacy | contract          | `RecipePhraseArcFlight`          | —                 |        9 |       0 | —                                                     | padded   |
| `organism/atomic-principles-showcase` | legacy | contract          | `RecipeAtomicPrinciplesShowcase` | yes               |        2 |       0 | —                                                     | padded   |
| `organism/component-library-stats`    | legacy | contract          | `RecipeComponentLibraryStats`    | yes               |        2 |       0 | —                                                     | padded   |
| `organism/media-slider`               | legacy | contract + render | `RecipeMediaSlider`              | yes               |        9 |       1 | —                                                     | padded   |

## Custom renders

- `atom/animated-background`: the duration/opacity knobs become the component's CSS custom properties and the background needs content to show behind.
- `atom/animated-digit`: `format` is a function (prefix, rounding, suffix), which args cannot carry.
- `atom/css-3d-cube`: auto-rotation drives rotationY from local requestAnimationFrame state.
- `atom/marquee-ticker`: the editable `text` knob becomes `items`, so changing it plays the letter change transition.
- `organism/media-slider`: the caption, video and cross-fade knobs build the slides array and the transition custom property.

[interaction](README.md) · [All modules](../README.md)
