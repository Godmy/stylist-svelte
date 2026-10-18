# Story migration report: architecture / graph

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| graph |       14 |            10 |               4 |             8 |                 6 |           0 |             0 |                                   14 |           4 |             2 |

| Family                             | Before | After             | Recipe                           | State uses recipe | Controls | Presets | Token options                    | Layout     |
| ---------------------------------- | ------ | ----------------- | -------------------------------- | ----------------- | -------: | ------: | -------------------------------- | ---------- |
| `atom/graph-dot`                   | none   | contract          | `RecipeGraphDot` (new)           | —                 |        2 |       2 | —                                | padded     |
| `atom/graph-edge`                  | legacy | contract + render | `RecipeGraphEdge`                | yes               |        8 |       2 | `TOKEN_SIZE`, `TOKEN_TRAJECTORY` | padded     |
| `atom/graph-node`                  | legacy | contract + render | `RecipeGraphNode`                | yes               |        8 |       1 | `TOKEN_SIZE`                     | padded     |
| `atom/graph-tooltip`               | none   | contract          | `RecipeGraphTooltip` (new)       | —                 |        4 |       0 | —                                | padded     |
| `atom/node-icon`                   | legacy | contract          | `RecipeNodeIcon`                 | yes               |        4 |       3 | —                                | padded     |
| `molecule/field-highlighter`       | legacy | contract          | `RecipeFieldHighlighter`         | yes               |        0 |       0 | —                                | padded     |
| `molecule/graph-cluster-filter`    | none   | contract + render | `RecipeGraphClusterFilter` (new) | —                 |        0 |       0 | —                                | padded     |
| `molecule/graph-legend`            | none   | contract + render | `RecipeGraphLegend` (new)        | —                 |        0 |       0 | —                                | padded     |
| `molecule/graphviz-directed-edge`  | legacy | contract          | `RecipeGraphvizDirectedEdge`     | yes               |        8 |       2 | —                                | padded     |
| `molecule/ontology-edge-component` | legacy | contract          | `RecipeOntologyEdgeComponent`    | yes               |        1 |       0 | —                                | padded     |
| `molecule/ontology-node-component` | legacy | contract          | `RecipeOntologyNodeComponent`    | yes               |        1 |       0 | —                                | padded     |
| `molecule/scene-camera-control`    | legacy | contract + render | `RecipeSceneCameraControl`       | yes               |        6 |       0 | —                                | padded     |
| `organism/scene`                   | legacy | contract          | `RecipeScene`                    | yes               |        3 |       0 | —                                | padded     |
| `organism/zwicky-scene`            | legacy | contract + render | `RecipeZwickyScene`              | yes               |        1 |       0 | —                                | fullscreen |

## Custom renders

- `atom/graph-edge`: three draggable nodes recompute the edge geometry, plus a route gallery.
- `atom/graph-node`: the args style the primary node of a draggable three-node canvas, plus size and type galleries.
- `molecule/graph-cluster-filter`: the active layers are local state toggled by onClusterClick.
- `molecule/graph-legend`: the active domains are local state toggled by onDomainClick.
- `molecule/scene-camera-control`: radius and target are local state updated by the control's callbacks.
- `organism/zwicky-scene`: the graph data is fetched from the indexation output at mount.

[architecture](README.md) · [All modules](../README.md)
