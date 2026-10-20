# Story migration report: sandbox / domain

|        | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| domain |       56 |            47 |               9 |            39 |                17 |           0 |             0 |                                   56 |           1 |             5 |

| Family                                         | Before | After             | Recipe                                   | State uses recipe | Controls | Presets | Token options       | Layout     |
| ---------------------------------------------- | ------ | ----------------- | ---------------------------------------- | ----------------- | -------: | ------: | ------------------- | ---------- |
| `atom/domain-entity`                           | legacy | contract          | `RecipeDomainEntity`                     | —                 |        5 |       1 | —                   | padded     |
| `atom/domain-list-header`                      | legacy | contract          | `RecipeDomainListHeader`                 | —                 |        2 |       0 | —                   | padded     |
| `atom/domain-search-field`                     | legacy | contract + render | `RecipeDomainSearchField`                | —                 |        2 |       0 | —                   | padded     |
| `atom/domain-search-toggle`                    | legacy | contract + render | `RecipeDomainSearchToggle`               | —                 |        1 |       1 | —                   | padded     |
| `atom/story-control`                           | none   | contract          | `RecipeStoryControl`                     | —                 |        1 |       5 | `TOKEN_SIZE`        | padded     |
| `molecule/cluster-toolbar`                     | legacy | contract + render | `RecipeClusterToolbar`                   | —                 |        3 |       1 | `TOKEN_ORIENTATION` | padded     |
| `molecule/cta-buttons`                         | none   | contract          | `RecipeCtaButtons`                       | —                 |        6 |       0 | —                   | padded     |
| `molecule/device-viewport`                     | legacy | contract + render | `RecipeDeviceViewport`                   | —                 |        2 |       2 | —                   | padded     |
| `molecule/domain-list`                         | legacy | contract + render | `RecipeDomainList`                       | —                 |        2 |       1 | —                   | padded     |
| `molecule/domain-menu`                         | legacy | contract + render | `RecipeDomainMenu`                       | —                 |        5 |       1 | —                   | padded     |
| `molecule/domain-search`                       | legacy | contract          | `RecipeDomainSearch`                     | yes               |        1 |       1 | —                   | padded     |
| `molecule/domain-toolbar`                      | legacy | contract + render | `RecipeDomainToolbar`                    | —                 |        3 |       1 | `TOKEN_ORIENTATION` | padded     |
| `molecule/feature-grid`                        | none   | contract          | `RecipeFeatureGrid`                      | —                 |        2 |       0 | —                   | padded     |
| `molecule/joint-tab-buttons`                   | legacy | contract + render | `RecipeJointTabButtons`                  | —                 |        5 |       1 | —                   | padded     |
| `molecule/joint-toolbar`                       | legacy | contract + render | `RecipeJointToolbar`                     | —                 |        3 |       0 | `TOKEN_ORIENTATION` | padded     |
| `molecule/json-tree-viewer`                    | legacy | contract          | `RecipeJsonTreeViewer`                   | —                 |        1 |       1 | —                   | padded     |
| `molecule/preview-settings`                    | none   | contract + render | `RecipePreviewSettings`                  | —                 |        0 |       1 | —                   | padded     |
| `molecule/samo-adoption-roadmap`               | legacy | contract          | `RecipeSamoAdoptionRoadmap`              | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-architecture-compare`           | legacy | contract          | `RecipeSamoArchitectureCompare`          | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-assembly-pipeline`              | legacy | contract          | `RecipeSamoAssemblyPipeline`             | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-change-flow`                    | legacy | contract          | `RecipeSamoChangeFlow`                   | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-extension-walkthrough`          | legacy | contract          | `RecipeSamoExtensionWalkthrough`         | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-guide-hero`                     | legacy | contract          | `RecipeSamoGuideHero`                    | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-local-dev`                      | legacy | contract          | `RecipeSamoLocalDev`                     | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-morphology-box`                 | legacy | contract          | `RecipeSamoMorphologyBox`                | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-nested-methods`                 | legacy | contract          | `RecipeSamoNestedMethods`                | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-overview`                       | legacy | contract          | `RecipeSamoOverview`                     | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-platform-stack`                 | legacy | contract          | `RecipeSamoPlatformStack`                | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-practice`                       | legacy | contract          | `RecipeSamoPractice`                     | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-risk-board`                     | legacy | contract          | `RecipeSamoRiskBoard`                    | —                 |        3 |       0 | —                   | padded     |
| `molecule/samo-solid-grid`                     | legacy | contract          | `RecipeSamoSolidGrid`                    | —                 |        4 |       0 | —                   | padded     |
| `molecule/samo-umbrella-map`                   | legacy | contract          | `RecipeSamoUmbrellaMap`                  | —                 |        3 |       0 | —                   | padded     |
| `molecule/story-canvas`                        | none   | contract + render | `RecipeStoryCanvas`                      | —                 |        1 |       1 | —                   | padded     |
| `molecule/story-controls`                      | none   | contract + render | `RecipeStoryControls`                    | yes               |        1 |       0 | —                   | padded     |
| `molecule/stylist-hero-intro`                  | none   | contract          | `RecipeStylistHeroIntro`                 | —                 |        9 |       0 | —                   | fullscreen |
| `molecule/stylist-mission`                     | none   | contract          | `RecipeStylistMission`                   | —                 |        5 |       0 | —                   | padded     |
| `molecule/taxonomy-breadcrumbs`                | legacy | contract          | `RecipeTaxonomyBreadcrumbs`              | —                 |        5 |       0 | —                   | padded     |
| `molecule/workspace-hints`                     | none   | contract + render | `RecipeWorkspaceHints` (new)             | —                 |        1 |       0 | —                   | padded     |
| `organism/device-frame`                        | legacy | contract          | `RecipeDeviceFrame`                      | yes               |        2 |       1 | `TOKEN_ORIENTATION` | padded     |
| `organism/domain-ai-agent`                     | legacy | contract + render | `RecipeDomainAiAgent`                    | yes               |        3 |       0 | —                   | padded     |
| `organism/domain-cluster-balance`              | legacy | contract          | `RecipeDomainClusterBalance`             | —                 |        0 |       0 | —                   | padded     |
| `organism/domain-component-import-diagnostics` | legacy | contract          | `RecipeDomainComponentImportDiagnostics` | —                 |        0 |       0 | —                   | padded     |
| `organism/domain-diagnostics`                  | legacy | contract          | `RecipeDomainDiagnostics`                | yes               |        1 |       1 | —                   | padded     |
| `organism/domain-explorer`                     | legacy | contract          | `RecipeDomainExplorer`                   | yes               |        1 |       0 | —                   | fullscreen |
| `organism/domain-file-diagnostics`             | legacy | contract          | `RecipeDomainFileDiagnostics`            | —                 |        0 |       0 | —                   | padded     |
| `organism/domain-file-domain-grid`             | legacy | contract          | `RecipeDomainFileDomainGrid`             | —                 |        0 |       0 | —                   | padded     |
| `organism/domain-file-overview`                | legacy | contract          | `RecipeDomainFileOverview`               | —                 |        0 |       0 | —                   | padded     |
| `organism/domain-file-preview`                 | legacy | contract + render | `RecipeDomainFilePreview`                | —                 |        2 |       3 | —                   | padded     |
| `organism/domain-settings`                     | legacy | contract + render | `RecipeDomainSettings`                   | —                 |        1 |       0 | —                   | padded     |
| `organism/domain-sidebar`                      | legacy | contract + render | `RecipeDomainSidebar`                    | —                 |        1 |       0 | —                   | padded     |
| `organism/markdown-renderer`                   | legacy | contract          | `RecipeMarkdownRenderer`                 | yes               |        2 |       0 | —                   | padded     |
| `organism/samo-methodology`                    | legacy | contract          | `RecipeSamoMethodology`                  | —                 |        2 |       0 | —                   | padded     |
| `organism/stylist-hero`                        | legacy | contract          | `RecipeStylistHero`                      | —                 |        2 |       0 | —                   | padded     |
| `page/domain-how-it-works`                     | legacy | contract          | `RecipeDomainHowItWorks`                 | —                 |        0 |       0 | —                   | padded     |
| `page/domain-landing`                          | legacy | contract          | `RecipeDomainLanding`                    | —                 |        2 |       0 | —                   | padded     |
| `page/domain-playground`                       | legacy | contract          | `RecipeDomainPlayground`                 | yes               |        0 |       0 | —                   | fullscreen |

## Custom renders

- `atom/domain-search-field`: the value is bound to local state that onEscape clears.
- `atom/domain-search-toggle`: the toggle only reports clicks, so the story owns the open state.
- `molecule/cluster-toolbar`: the active cluster is controlled through onSelect and local state.
- `molecule/device-viewport`: the category, the remembered widths and fullscreen are kept in local state.
- `molecule/domain-list`: the active path is controlled through onSelect and the list needs a bounded height.
- `molecule/domain-menu`: the toggles only report clicks, so the story owns the screen and panel state.
- `molecule/domain-toolbar`: the active domain is controlled through onSelect and local state.
- `molecule/joint-tab-buttons`: the tabs only report clicks, so the story owns the active file and preview mode.
- `molecule/joint-toolbar`: the active joint is controlled through onSelect and local state.
- `molecule/preview-settings`: onChange is required and not serializable, so the story owns the environment.
- `molecule/story-canvas`: the previewed story holds a component, so it is passed here rather than as an arg.
- `molecule/story-controls`: the edited story and the markup function are not serializable, so they are passed here.
- `molecule/workspace-hints`: the hint layer only decorates existing controls, so the story renders some inside its root.
- `organism/domain-ai-agent`: the close button needs local state to hide and reopen the panel.
- `organism/domain-file-preview`: the file content follows the preview mode/kind and the story tab embeds a story component.
- `organism/domain-settings`: the close button needs local state to hide and reopen the panel.
- `organism/domain-sidebar`: the active domain, cluster, joint and entity are local state driven by the sidebar callbacks.

[sandbox](README.md) · [All modules](../README.md)
