# Story migration report: architecture / idef-zero

|           | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| --------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| idef-zero |        7 |             7 |               0 |             1 |                 6 |           0 |             0 |                                    7 |           0 |             0 |

| Family                     | Before | After             | Recipe                   | State uses recipe | Controls | Presets | Token options | Layout |
| -------------------------- | ------ | ----------------- | ------------------------ | ----------------- | -------: | ------: | ------------- | ------ |
| `atom/idef0-connector`     | legacy | contract + render | `RecipeIdef0Connector`   | yes               |        3 |       1 | —             | padded |
| `atom/idef0-function-box`  | legacy | contract + render | `RecipeIdef0FunctionBox` | yes               |        2 |       0 | —             | padded |
| `atom/idef0-port-label`    | legacy | contract + render | `RecipeIdef0PortLabel`   | yes               |        2 |       0 | —             | padded |
| `molecule/idef0-black-box` | legacy | contract + render | `RecipeIdef0BlackBox`    | yes               |        2 |       0 | —             | padded |
| `molecule/idef0-inputs`    | legacy | contract + render | `RecipeIdef0Io`          | yes               |        0 |       0 | —             | padded |
| `molecule/idef0-outputs`   | legacy | contract + render | `RecipeIdef0Io`          | yes               |        0 |       0 | —             | padded |
| `organism/idef0-diagram`   | legacy | contract          | `RecipeIdef0Diagram`     | yes               |        2 |       0 | —             | padded |

## Custom renders

- `atom/idef0-connector`: the connector is an SVG fragment that needs an svg parent.
- `atom/idef0-function-box`: the function box is an SVG fragment that needs an svg parent.
- `atom/idef0-port-label`: the label is an SVG text element that needs an svg parent.
- `molecule/idef0-black-box`: the black box is an SVG group that needs an svg parent.
- `molecule/idef0-inputs`: the connectors are an SVG group drawn against a box outline.
- `molecule/idef0-outputs`: the connectors are an SVG group drawn against a box outline.

[architecture](README.md) · [All modules](../README.md)
