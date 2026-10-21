# Story migration report: interaction / calendar

|          | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| -------- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| calendar |       17 |            16 |               1 |             5 |                12 |           0 |             0 |                                   17 |           1 |             3 |

| Family                            | Before | After             | Recipe                       | State uses recipe | Controls | Presets | Token options       | Layout   |
| --------------------------------- | ------ | ----------------- | ---------------------------- | ----------------- | -------: | ------: | ------------------- | -------- |
| `atom/calendar-day`               | legacy | contract + render | `RecipeCalendarDay`          | —                 |        8 |       3 | —                   | centered |
| `atom/time-slot`                  | legacy | contract + render | `RecipeTimeSlot`             | yes               |        5 |       3 | —                   | centered |
| `molecule/calendar-grid`          | legacy | contract + render | `RecipeCalendarGrid`         | —                 |        2 |       1 | —                   | centered |
| `molecule/date-picker`            | legacy | contract + render | `RecipeDatePicker`           | yes               |        2 |       1 | —                   | padded   |
| `molecule/date-time-picker`       | legacy | contract + render | `RecipeDateTimePicker`       | yes               |        3 |       1 | —                   | padded   |
| `molecule/form-date-picker`       | legacy | contract          | `RecipeFormDatePicker`       | yes               |        6 |       0 | —                   | padded   |
| `molecule/time-picker`            | legacy | contract          | `RecipeTimePicker`           | yes               |        3 |       1 | —                   | padded   |
| `molecule/timeline`               | legacy | contract          | `RecipeTimeline`             | yes               |        1 |       1 | `TOKEN_ORIENTATION` | padded   |
| `organism/calendar`               | legacy | contract + render | `RecipeCalendar`             | yes               |        3 |       2 | —                   | centered |
| `organism/calendar-range`         | legacy | contract + render | `RecipeCalendarRange`        | yes               |        2 |       1 | —                   | centered |
| `organism/calendar-view`          | legacy | contract + render | `RecipeCalendarView`         | yes               |        2 |       2 | `TOKEN_CALENDAR`    | padded   |
| `organism/date-pair-picker`       | none   | contract + render | `RecipeDatePairPicker` (new) | —                 |        8 |       3 | —                   | centered |
| `organism/date-range-picker`      | legacy | contract          | `RecipeDateRangePicker`      | yes               |        2 |       1 | —                   | padded   |
| `organism/date-time-range-picker` | legacy | contract          | `RecipeDateTimeRangePicker`  | yes               |        2 |       1 | —                   | padded   |
| `organism/event-calendar`         | legacy | contract + render | `RecipeEventCalendar`        | yes               |        2 |       2 | `TOKEN_CALENDAR`    | padded   |
| `organism/mini-calendar`          | legacy | contract + render | `RecipeMiniCalendar`         | yes               |        3 |       3 | —                   | centered |
| `organism/time-grid`              | legacy | contract + render | `RecipeTimeGrid`             | yes               |        4 |       2 | —                   | padded   |

## Custom renders

- `atom/calendar-day`: the day cell needs a Date, which story args do not carry.
- `atom/time-slot`: the slot needs Date start/end and Date-based events.
- `molecule/calendar-grid`: the days are built from Dates by generateCalendarDays.
- `molecule/date-picker`: the picker is bound to a local Date with a Date min/max range.
- `molecule/date-time-picker`: the picker only shows a Date value; the ISO text arg is converted.
- `organism/calendar`: value and minDate are Dates built from the text/boolean knobs.
- `organism/calendar-range`: the selected Date range lives in local state shown above the calendar.
- `organism/calendar-view`: the events and the initial date are Dates.
- `organism/date-pair-picker`: the picker is controlled, so the story keeps the picked dates and computes the end.
- `organism/event-calendar`: the events and the initial date are Dates of the current month.
- `organism/mini-calendar`: the events and the initial date are Dates of the current month.
- `organism/time-grid`: the visible week and the events are Dates relative to today.

[interaction](README.md) · [All modules](../README.md)
