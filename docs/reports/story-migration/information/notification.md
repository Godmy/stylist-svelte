# Story migration report: information / notification

|              | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ------------ | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| notification |       11 |            11 |               0 |             7 |                 4 |           0 |             0 |                                   11 |           0 |             4 |

| Family                            | Before | After             | Recipe                        | State uses recipe | Controls | Presets | Token options                                         | Layout   |
| --------------------------------- | ------ | ----------------- | ----------------------------- | ----------------- | -------: | ------: | ----------------------------------------------------- | -------- |
| `atom/alert`                      | legacy | contract          | `RecipeAlert`                 | yes               |        4 |       3 | `TOKEN_COLOR_TONE`                                    | padded   |
| `atom/count-badge`                | legacy | contract          | `RecipeCountBadge`            | yes               |        3 |       2 | —                                                     | centered |
| `atom/counter`                    | legacy | contract          | `RecipeCounter`               | yes               |        4 |       2 | `TOKEN_COLOR_TONE`, `TOKEN_SIZE`                      | centered |
| `atom/error-message`              | legacy | contract + render | `RecipeErrorMessage`          | yes               |        3 |       0 | —                                                     | padded   |
| `atom/message-timestamp`          | legacy | contract + render | `RecipeMessageTimestamp`      | yes               |        3 |       1 | `TOKEN_TIMESTAMP_FORMAT`                              | centered |
| `atom/notification-badge`         | legacy | contract          | `RecipeNotificationBadge`     | yes               |        5 |       3 | `TOKEN_ALIGNMENT`, `TOKEN_COLOR_TONE`, `TOKEN_MARKER` | centered |
| `molecule/notification-settings`  | legacy | contract          | `RecipeNotificationSettings`  | yes               |        4 |       0 | —                                                     | padded   |
| `molecule/toast-stack`            | legacy | contract + render | `RecipeToastStack`            | yes               |        3 |       0 | —                                                     | padded   |
| `organism/notification-center`    | legacy | contract + render | `RecipeNotificationCenter`    | yes               |        5 |       1 | —                                                     | padded   |
| `organism/notification-list`      | legacy | contract          | `RecipeNotificationList`      | yes               |        4 |       1 | —                                                     | padded   |
| `organism/scheduled-notification` | legacy | contract          | `RecipeScheduledNotification` | yes               |        4 |       0 | —                                                     | padded   |

## Custom renders

- `atom/error-message`: the retry button appears only with an onRetry callback.
- `atom/message-timestamp`: the timestamp is a Date computed from the minutesAgo knob.
- `molecule/toast-stack`: the toast list is local state with dismiss and action callbacks.
- `organism/notification-center`: the toolbar and Load more need callbacks over local notifications.

[information](README.md) · [All modules](../README.md)
