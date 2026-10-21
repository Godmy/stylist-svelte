# Story migration report: information / audio

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| audio |        5 |             5 |               0 |             4 |                 1 |           0 |             0 |                                    5 |           0 |             0 |

| Family                     | Before | After             | Recipe                    | State uses recipe | Controls | Presets | Token options | Layout |
| -------------------------- | ------ | ----------------- | ------------------------- | ----------------- | -------: | ------: | ------------- | ------ |
| `atom/audio-record-button` | legacy | contract + render | `RecipeAudioRecordButton` | yes               |        5 |       0 | —             | padded |
| `atom/audio-slider`        | legacy | contract          | `RecipeAudioSlider`       | yes               |        6 |       0 | —             | padded |
| `atom/audio-visualizer`    | legacy | contract          | `RecipeAudioVisualizer`   | yes               |        4 |       0 | —             | padded |
| `organism/audio-player`    | legacy | contract          | `RecipeAudioPlayer`       | yes               |        2 |       0 | —             | padded |
| `organism/transcriber`     | legacy | contract          | `RecipeTranscriber`       | yes               |        5 |       0 | —             | padded |

## Custom renders

- `atom/audio-record-button`: the recorded file and the event log come from callback props.

[information](README.md) · [All modules](../README.md)
