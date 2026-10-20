# Story migration report: information / image

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| image |        7 |             7 |               0 |             5 |                 2 |           0 |             0 |                                    7 |           0 |             3 |

| Family                                | Before | After             | Recipe                          | State uses recipe | Controls | Presets | Token options        | Layout   |
| ------------------------------------- | ------ | ----------------- | ------------------------------- | ----------------- | -------: | ------: | -------------------- | -------- |
| `atom/image`                          | legacy | contract          | `RecipeImage`                   | yes               |        4 |       1 | `TOKEN_SIZE`         | centered |
| `atom/image-caption`                  | legacy | contract          | `RecipeImageCaption`            | yes               |        6 |       0 | —                    | padded   |
| `molecule/card`                       | legacy | contract + render | `RecipeCard`                    | yes               |        5 |       2 | `TOKEN_SIZE`         | padded   |
| `molecule/divider-heading-image-text` | legacy | contract          | `RecipeDividerHeadingImageText` | —                 |        6 |       0 | —                    | padded   |
| `molecule/media-thumbnail`            | legacy | contract + render | `RecipeMediaThumbnail`          | —                 |        2 |       0 | —                    | padded   |
| `organism/canvas-image-editor`        | legacy | contract          | `RecipeCanvasImageEditor`       | yes               |        4 |       2 | `TOKEN_IMAGE_FILTER` | padded   |
| `organism/image-gallery`              | legacy | contract          | `RecipeImageGallery`            | yes               |        3 |       0 | —                    | padded   |

## Custom renders

- `molecule/card`: the header, body and footer are snippet props.
- `molecule/media-thumbnail`: the remove action is a callback that hides the thumbnail.

[information](README.md) · [All modules](../README.md)
