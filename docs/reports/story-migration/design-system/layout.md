# Story migration report: design-system / layout

|        | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| layout |       30 |            30 |               0 |            19 |                11 |           0 |             0 |                                   30 |           0 |            16 |

| Family                                   | Before | After             | Recipe                             | State uses recipe | Controls | Presets | Token options                                          | Layout   |
| ---------------------------------------- | ------ | ----------------- | ---------------------------------- | ----------------- | -------: | ------: | ------------------------------------------------------ | -------- |
| `atom/aspect-ratio`                      | legacy | contract          | `RecipeAspectRatio`                | yes               |        1 |       2 | `TOKEN_ASPECT_RATIO`                                   | padded   |
| `atom/background`                        | legacy | contract          | `RecipeBackground`                 | yes               |        6 |       2 | `TOKEN_BACKGROUND`, `TOKEN_COLOR_TONE`                 | padded   |
| `atom/border`                            | legacy | contract          | `RecipeBorder`                     | yes               |        9 |       2 | `TOKEN_BORDER_STYLE`                                   | padded   |
| `atom/clickable`                         | legacy | contract + render | `RecipeClickable`                  | yes               |        5 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_CURSOR`                     | padded   |
| `atom/container`                         | legacy | contract          | `RecipeContainer`                  | yes               |        1 |       2 | `TOKEN_SIZE`                                           | padded   |
| `atom/divider`                           | legacy | contract          | `RecipeDivider`                    | yes               |        4 |       2 | `TOKEN_ALIGNMENT`, `TOKEN_ORIENTATION`                 | padded   |
| `atom/drag-and-drop`                     | legacy | contract + render | `RecipeDragAndDrop`                | yes               |        6 |       0 | `TOKEN_COLOR_TONE`                                     | padded   |
| `atom/draggable`                         | legacy | contract + render | `RecipeDraggable`                  | yes               |        2 |       0 | —                                                      | padded   |
| `atom/focusable`                         | legacy | contract          | `RecipeFocusable`                  | yes               |        2 |       0 | —                                                      | padded   |
| `atom/grid`                              | legacy | contract          | `RecipeGridSvg`                    | yes               |        4 |       2 | —                                                      | padded   |
| `atom/grid-layout`                       | legacy | contract          | `RecipeGridLayout`                 | yes               |        6 |       2 | `TOKEN_SIZE`                                           | padded   |
| `atom/horizontal-layout`                 | legacy | contract          | `RecipeHorizontalLayout`           | yes               |        4 |       2 | `TOKEN_ALIGNMENT`, `TOKEN_JUSTIFICATION`, `TOKEN_SIZE` | padded   |
| `atom/hoverable`                         | legacy | contract          | `RecipeHoverable`                  | yes               |        2 |       0 | —                                                      | padded   |
| `atom/node-dot`                          | legacy | contract          | `RecipeNodeDot`                    | yes               |        3 |       2 | —                                                      | centered |
| `atom/numbered-step`                     | legacy | contract          | `RecipeNumberedStep`               | —                 |        3 |       0 | —                                                      | padded   |
| `atom/separator`                         | legacy | contract          | `RecipeSeparator`                  | yes               |        2 |       2 | `TOKEN_ORIENTATION`                                    | padded   |
| `atom/spacer`                            | legacy | contract + render | `RecipeSpacer`                     | —                 |        3 |       2 | `TOKEN_SIZE_REM`                                       | padded   |
| `molecule/animated-expandable-table-row` | legacy | contract + render | `RecipeAnimatedExpandableTableRow` | yes               |        3 |       1 | —                                                      | padded   |
| `molecule/centered-layout`               | legacy | contract          | `RecipeCenteredLayout`             | yes               |        4 |       2 | —                                                      | padded   |
| `molecule/container-query`               | legacy | contract + render | `RecipeContainerQuery`             | yes               |        2 |       0 | —                                                      | padded   |
| `molecule/gradient-background`           | legacy | contract          | `RecipeGradientBackground`         | yes               |        5 |       2 | `TOKEN_GRADIENT`                                       | padded   |
| `molecule/grid`                          | legacy | contract          | `RecipeGrid`                       | —                 |        5 |       2 | —                                                      | padded   |
| `molecule/numbered-step-grid`            | legacy | contract          | `RecipeNumberedStepGrid`           | —                 |        3 |       1 | —                                                      | padded   |
| `molecule/overlay-layout`                | legacy | contract + render | `RecipeOverlayLayout`              | yes               |        3 |       2 | —                                                      | padded   |
| `molecule/popover`                       | legacy | contract + render | `RecipePopover`                    | yes               |        3 |       2 | `TOKEN_ALIGNMENT`                                      | padded   |
| `molecule/split-layout`                  | legacy | contract + render | `RecipeSplitLayout`                | yes               |        5 |       2 | `TOKEN_ORIENTATION`, `TOKEN_SIZE`                      | padded   |
| `molecule/sticky-layout`                 | legacy | contract + render | `RecipeStickyLayout`               | yes               |        3 |       1 | —                                                      | padded   |
| `molecule/vertical-layout`               | legacy | contract          | `RecipeVerticalLayout`             | yes               |        4 |       2 | `TOKEN_ALIGNMENT`, `TOKEN_JUSTIFICATION`, `TOKEN_SIZE` | padded   |
| `molecule/widget-container`              | legacy | contract + render | `RecipeWidgetContainer`            | yes               |        8 |       2 | `TOKEN_SIZE`                                           | padded   |
| `organism/sortable-grid`                 | legacy | contract          | `RecipeSortableGrid`               | yes               |        4 |       2 | —                                                      | padded   |

## Custom renders

- `atom/clickable`: shows which gesture callback fired; the sandbox DomainFilePreview story embeds it as its story preview.
- `atom/drag-and-drop`: a drag source and a drop zone work together and log their events.
- `atom/draggable`: a drag source and a drop target work together and report the payload.
- `atom/spacer`: the spacer is only visible between neighbours laid out along its axis.
- `molecule/animated-expandable-table-row`: the row needs a table parent and the required `details` snippet.
- `molecule/container-query`: the children need @container rules to show the query breakpoint.
- `molecule/overlay-layout`: the base element and the overlay are snippet props.
- `molecule/popover`: the trigger and the content are snippet props.
- `molecule/split-layout`: the primary and secondary panes are snippet props.
- `molecule/sticky-layout`: the header and footer are snippet props around a scroll list.
- `molecule/widget-container`: the widget body is a snippet prop.

[design-system](README.md) · [All modules](../README.md)
