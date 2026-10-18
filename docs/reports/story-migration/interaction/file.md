# Story migration report: interaction / file

|      | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ---- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| file |       16 |            16 |               0 |            12 |                 4 |           0 |             0 |                                   16 |           0 |             2 |

| Family                           | Before | After             | Recipe                     | State uses recipe | Controls | Presets | Token options                       | Layout |
| -------------------------------- | ------ | ----------------- | -------------------------- | ----------------- | -------: | ------: | ----------------------------------- | ------ |
| `atom/file-input`                | legacy | contract          | `RecipeFileInput`          | yes               |        4 |       1 | —                                   | padded |
| `molecule/attachment-preview`    | legacy | contract          | `RecipeAttachmentPreview`  | yes               |        1 |       3 | —                                   | padded |
| `molecule/data-exporter`         | legacy | contract          | `RecipeDataExporter`       | yes               |        3 |       0 | —                                   | padded |
| `molecule/download-card`         | legacy | contract          | `RecipeDownloadCard`       | yes               |        4 |       0 | `TOKEN_COLOR_TONE`                  | padded |
| `molecule/file-upload`           | legacy | contract          | `RecipeFileUpload`         | yes               |        5 |       0 | —                                   | padded |
| `molecule/quantity-selector`     | legacy | contract          | `RecipeQuantitySelector`   | yes               |        9 |       0 | `TOKEN_SELECTOR_KIND`, `TOKEN_SIZE` | padded |
| `organism/document-preview`      | legacy | contract          | `RecipeDocumentPreview`    | yes               |        3 |       2 | —                                   | padded |
| `organism/drag-drop-file-upload` | legacy | contract          | `RecipeDragDropFileUpload` | yes               |        5 |       0 | —                                   | padded |
| `organism/drop-zone`             | legacy | contract          | `RecipeDropZone`           | yes               |        8 |       0 | —                                   | padded |
| `organism/export-panel`          | legacy | contract          | `RecipeExportPanel`        | yes               |        0 |       0 | —                                   | padded |
| `organism/file-browser`          | legacy | contract          | `RecipeFileBrowser`        | yes               |        4 |       1 | —                                   | padded |
| `organism/file-explorer`         | legacy | contract + render | `RecipeFileExplorer`       | yes               |        6 |       0 | —                                   | padded |
| `organism/file-list-item`        | legacy | contract + render | `RecipeFileListItem`       | yes               |        7 |       1 | —                                   | padded |
| `organism/media-library`         | legacy | contract + render | `RecipeMediaLibrary`       | yes               |        5 |       1 | —                                   | padded |
| `organism/upload-progress`       | legacy | contract          | `RecipeUploadProgress`     | yes               |        7 |       2 | —                                   | padded |
| `organism/zip-viewer`            | legacy | contract + render | `RecipeZipViewer`          | yes               |        6 |       0 | —                                   | padded |

## Custom renders

- `organism/file-explorer`: the items carry Date `modified` values relative to now.
- `organism/file-list-item`: the item carries Date `modified`/`created` values relative to now.
- `organism/media-library`: every media item requires a Date `uploadDate`.
- `organism/zip-viewer`: the file entries carry Date `modified` values.

[interaction](README.md) · [All modules](../README.md)
