# Story migration report: architecture / workspace

|           | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| --------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| workspace |       16 |            14 |               2 |            12 |                 4 |           0 |             0 |                                   16 |           0 |            11 |

| Family                             | Before | After             | Recipe                        | State uses recipe | Controls | Presets | Token options                                             | Layout |
| ---------------------------------- | ------ | ----------------- | ----------------------------- | ----------------- | -------: | ------: | --------------------------------------------------------- | ------ |
| `atom/node-connection`             | legacy | contract + render | `RecipeNodeConnection`        | yes               |       12 |       1 | `TOKEN_BORDER_STYLE`, `TOKEN_TRAJECTORY`                  | padded |
| `atom/node-header`                 | legacy | contract          | `RecipeNodeHeader`            | yes               |        7 |       0 | `TOKEN_SIZE`                                              | padded |
| `atom/node-port`                   | legacy | contract          | `RecipeNodePort`              | yes               |        6 |       1 | `TOKEN_PROPERTY_TYPE`, `TOKEN_RELATIONSHIP`, `TOKEN_SIZE` | padded |
| `atom/node-property`               | legacy | contract          | `RecipeNodeProperty`          | yes               |        4 |       8 | `TOKEN_PROPERTY_TYPE`, `TOKEN_SIZE`                       | padded |
| `atom/stage`                       | none   | contract          | `RecipeStage`                 | yes               |        2 |       3 | —                                                         | padded |
| `atom/viewport`                    | none   | contract + render | `RecipeViewport`              | yes               |        4 |       3 | —                                                         | padded |
| `atom/workspace-canvas`            | legacy | contract + render | `RecipeWorkspaceCanvas`       | yes               |        7 |       0 | `TOKEN_PAN_MODES`                                         | padded |
| `molecule/graph-node-card`         | legacy | contract          | `RecipeGraphNodeCard`         | yes               |        4 |       0 | —                                                         | padded |
| `molecule/node-port-group`         | legacy | contract          | `RecipeNodePortGroup`         | yes               |        6 |       1 | `TOKEN_RELATIONSHIP`, `TOKEN_SIZE`                        | padded |
| `molecule/node-properties`         | legacy | contract          | `RecipeNodeProperties`        | yes               |        8 |       0 | `TOKEN_SIZE`                                              | padded |
| `molecule/workspace-toolbar`       | legacy | contract          | `RecipeWorkspaceToolbar`      | yes               |        4 |       2 | `TOKEN_ORIENTATION`, `TOKEN_SIZE`                         | padded |
| `organism/minimap`                 | legacy | contract          | `RecipeMinimap`               | yes               |       10 |       0 | —                                                         | padded |
| `organism/stylist-graph-workspace` | legacy | contract          | `RecipeStylistGraphWorkspace` | —                 |        0 |       0 | —                                                         | padded |
| `organism/workspace`               | legacy | contract + render | `RecipeWorkspace`             | yes               |        8 |       0 | `TOKEN_PAN_MODES`                                         | padded |
| `organism/workspace-node`          | legacy | contract          | `RecipeWorkspaceNode`         | yes               |        9 |       2 | `TOKEN_SIZE`                                              | padded |
| `organism/workspace-palette`       | legacy | contract          | `RecipeWorkspacePalette`      | yes               |        5 |       1 | `TOKEN_NODE_TYPE`                                         | padded |

## Custom renders

- `atom/node-connection`: the connection draws an SVG group and needs an <svg> parent.
- `atom/viewport`: the viewport moves the camera it receives, so the story owns it as local state, with world content.
- `atom/workspace-canvas`: the canvas is shown with workspace nodes as its children.
- `organism/workspace`: the workspace is controlled, so the story owns nodes, connections, selection, zoom and offset and wires every callback.

[architecture](README.md) · [All modules](../README.md)
