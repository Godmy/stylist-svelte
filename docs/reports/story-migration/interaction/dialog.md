# Story migration report: interaction / dialog

|        | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| dialog |       23 |            23 |               0 |             6 |                17 |           0 |             0 |                                   23 |           2 |             6 |

| Family                         | Before | After             | Recipe                             | State uses recipe | Controls | Presets | Token options                    | Layout |
| ------------------------------ | ------ | ----------------- | ---------------------------------- | ----------------- | -------: | ------: | -------------------------------- | ------ |
| `atom/accordion-layout`        | legacy | contract + render | `RecipeAccordionLayout`            | —                 |        3 |       0 | —                                | padded |
| `atom/breadcrumb-dropdown`     | legacy | contract          | `RecipeBreadcrumbDropdown`         | yes               |        1 |       0 | —                                | padded |
| `atom/breadcrumb-link`         | legacy | contract          | `RecipeBreadcrumbLink`             | yes               |        2 |       0 | —                                | padded |
| `atom/breadcrumb-separator`    | legacy | contract          | `RecipeBreadcrumbSeparator`        | yes               |        0 |       0 | —                                | padded |
| `atom/breadcrumbs`             | legacy | contract + render | `RecipeBreadcrumbsContainer` (new) | —                 |        0 |       0 | —                                | padded |
| `atom/tab`                     | legacy | contract + render | `RecipeTab`                        | yes               |        4 |       0 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded |
| `atom/tab-list`                | legacy | contract + render | `RecipeTabList`                    | yes               |        3 |       0 | `TOKEN_SIZE`                     | padded |
| `atom/tab-panel`               | legacy | contract + render | `RecipeTabPanel`                   | yes               |        2 |       0 | —                                | padded |
| `atom/tab-panels`              | legacy | contract + render | `RecipeTabPanels`                  | yes               |        2 |       0 | —                                | padded |
| `molecule/accordion`           | legacy | contract + render | `RecipeAccordion`                  | yes               |        1 |       0 | —                                | padded |
| `molecule/accordion-group`     | legacy | contract + render | `RecipeAccordionGroup`             | yes               |        0 |       0 | —                                | padded |
| `molecule/breadcrumbs`         | legacy | contract + render | `RecipeBreadcrumbs`                | yes               |        1 |       0 | —                                | padded |
| `molecule/confirmation-dialog` | legacy | contract + render | `RecipeConfirmationDialog`         | yes               |        6 |       0 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded |
| `molecule/dialog-confirm`      | legacy | contract + render | `RecipeDialogConfirm`              | yes               |        7 |       0 | `TOKEN_COLOR_TONE`               | padded |
| `molecule/general-toolbar`     | legacy | contract + render | `RecipeGeneralToolbar`             | yes               |        2 |       0 | —                                | padded |
| `molecule/stepper`             | legacy | contract          | `RecipeStepper`                    | yes               |        1 |       0 | `TOKEN_ORIENTATION`              | padded |
| `molecule/stylist-tab`         | legacy | contract          | `RecipeStylistTab`                 | yes               |        1 |       0 | —                                | padded |
| `molecule/tabs`                | legacy | contract + render | `RecipeTabs`                       | yes               |        4 |       0 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE` | padded |
| `organism/component-info-card` | legacy | contract          | `RecipeComponentInfoCard`          | yes               |        3 |       0 | —                                | padded |
| `organism/dialog`              | legacy | contract + render | `RecipeDialog`                     | yes               |        3 |       0 | —                                | padded |
| `organism/modal`               | legacy | contract + render | `RecipeModal`                      | yes               |        2 |       0 | —                                | padded |
| `organism/simple-modal`        | legacy | contract + render | `RecipeSimpleModal`                | yes               |        2 |       0 | —                                | padded |
| `organism/text-input-dialog`   | legacy | contract + render | `RecipeTextInputDialog` (new)      | —                 |        4 |       0 | —                                | padded |

## Custom renders

- `atom/accordion-layout`: AccordionLayout opens only inside an Accordion or AccordionGroup context.
- `atom/breadcrumbs`: the container is only meaningful filled with BreadcrumbLink and BreadcrumbSeparator children.
- `atom/tab`: a Tab only works inside a Tabs context next to sibling tabs and panels.
- `atom/tab-list`: TabList needs a Tabs context and Tab children.
- `atom/tab-panel`: a TabPanel is shown only when the Tabs context selects its id.
- `atom/tab-panels`: TabPanels needs a Tabs context with a tab list and TabPanel children.
- `molecule/accordion`: the accordion is only meaningful with AccordionLayout children.
- `molecule/accordion-group`: the group is only meaningful with AccordionLayout children.
- `molecule/breadcrumbs`: Breadcrumbs reports navigation through onNavigate; the story owns the active crumb.
- `molecule/confirmation-dialog`: the dialog cannot open itself; the story owns the open state and closes it on confirm, cancel or close.
- `molecule/dialog-confirm`: onClose and onConfirm are required callbacks; the story owns isOpen so they can close the dialog.
- `molecule/general-toolbar`: toolbarItems carry action callbacks, which story args cannot hold.
- `molecule/tabs`: Tabs is a compound component that needs TabList, Tab and TabPanel children.
- `organism/dialog`: the overlay only closes through onClose; the story owns the open state and an open button.
- `organism/modal`: the overlay only closes through onClose; the story owns the open state and an open button.
- `organism/simple-modal`: the overlay only closes through onClose; the story owns the open state and an open button.
- `organism/text-input-dialog`: the textarea is bound to a local draft, and the error message follows its length.

[interaction](README.md) · [All modules](../README.md)
