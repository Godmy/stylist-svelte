# Story migration report: information / chart

|       | Families | Legacy before | No story before | Contract only | Contract + render | Legacy left | No story left | Recipe in component, state and story | New recipes | Token options |
| ----- | -------: | ------------: | --------------: | ------------: | ----------------: | ----------: | ------------: | -----------------------------------: | ----------: | ------------: |
| chart |       31 |            31 |               0 |            31 |                 0 |           0 |             0 |                                   31 |           0 |             5 |

| Family                              | Before | After    | Recipe                         | State uses recipe | Controls | Presets | Token options                   | Layout |
| ----------------------------------- | ------ | -------- | ------------------------------ | ----------------- | -------: | ------: | ------------------------------- | ------ |
| `atom/chart-axis-x`                 | legacy | contract | `RecipeChartAxisX`             | yes               |        5 |       0 | —                               | padded |
| `atom/chart-axis-y`                 | legacy | contract | `RecipeChartAxisY`             | yes               |        5 |       0 | —                               | padded |
| `atom/chart-axis-z`                 | legacy | contract | `RecipeChartAxisZ`             | yes               |        4 |       0 | —                               | padded |
| `atom/chart-background`             | legacy | contract | `RecipeChartBackground`        | yes               |        4 |       0 | —                               | padded |
| `atom/chart-name`                   | legacy | contract | `RecipeChartName`              | yes               |        4 |       0 | —                               | padded |
| `atom/chart-polyline`               | legacy | contract | `RecipeChartPolyline`          | yes               |        2 |       0 | —                               | padded |
| `atom/metric-bar`                   | legacy | contract | `RecipeMetricBar`              | yes               |        5 |       3 | —                               | padded |
| `molecule/bar-chart`                | legacy | contract | `RecipeBarChart`               | yes               |        6 |       0 | `TOKEN_THEME_SCHEME`            | padded |
| `molecule/chart-canvas`             | legacy | contract | `RecipeAnalyticsChartCanvas`   | yes               |        8 |       0 | —                               | padded |
| `molecule/chart-legend`             | legacy | contract | `RecipeChartLegend`            | yes               |        0 |       1 | —                               | padded |
| `molecule/chart-legend-band`        | legacy | contract | `RecipeChartLegendBand`        | yes               |        6 |       0 | —                               | padded |
| `molecule/chart-legend-bar`         | legacy | contract | `RecipeChartLegendBar`         | yes               |        6 |       0 | —                               | padded |
| `molecule/metric-bars-card`         | legacy | contract | `RecipeMetricBarsCard`         | yes               |        5 |       0 | —                               | padded |
| `molecule/pie-chart`                | legacy | contract | `RecipePieChart`               | yes               |        2 |       0 | —                               | padded |
| `molecule/range-bars-chart`         | legacy | contract | `RecipeRangeBarsChart`         | yes               |        4 |       0 | —                               | padded |
| `molecule/vertical-bars-chart`      | legacy | contract | `RecipeVerticalBarsChart`      | yes               |        5 |       0 | —                               | padded |
| `organism/analytics-chart`          | legacy | contract | `RecipeAnalyticsChart`         | yes               |        4 |       0 | `TOKEN_CANVAS_CHART_TYPE`       | padded |
| `organism/canvas-chart`             | legacy | contract | `RecipeCanvasChart`            | yes               |        2 |       1 | `TOKEN_CANVAS_CHART_TYPE`       | padded |
| `organism/chart`                    | legacy | contract | `RecipeChart`                  | yes               |        9 |       0 | —                               | padded |
| `organism/critical-path-timeline`   | legacy | contract | `RecipeCriticalPathTimeline`   | yes               |        3 |       0 | —                               | padded |
| `organism/exchange-oracle-forecast` | legacy | contract | `RecipeExchangeOracleForecast` | yes               |        3 |       0 | —                               | padded |
| `organism/expert-agreement-radar`   | legacy | contract | `RecipeExpertAgreementRadar`   | yes               |        2 |       0 | —                               | padded |
| `organism/expert-spread-matrix`     | legacy | contract | `RecipeExpertSpreadMatrix`     | yes               |        1 |       0 | —                               | padded |
| `organism/heatmap`                  | legacy | contract | `RecipeHeatmap`                | yes               |        7 |       0 | `TOKEN_THEME_SCHEME`            | padded |
| `organism/legend-band-diagram`      | legacy | contract | `RecipeLegendBandDiagram`      | yes               |        3 |       0 | —                               | padded |
| `organism/legend-bar-diagram`       | legacy | contract | `RecipeLegendBarDiagram`       | yes               |        3 |       0 | —                               | padded |
| `organism/line-chart`               | legacy | contract | `RecipeLineChart`              | yes               |       10 |       0 | `TOKEN_LINE_TYPE`, `TOKEN_SIZE` | padded |
| `organism/outlier-constellation`    | legacy | contract | `RecipeOutlierConstellation`   | yes               |        2 |       0 | —                               | padded |
| `organism/risk-impact-map`          | legacy | contract | `RecipeRiskImpactMap`          | yes               |        2 |       0 | —                               | padded |
| `organism/scatter-plot`             | legacy | contract | `RecipeScatterPlot`            | yes               |        3 |       0 | —                               | padded |
| `organism/wideband-delphi-diagram`  | legacy | contract | `RecipeWidebandDelphiDiagram`  | yes               |        3 |       0 | —                               | padded |

[information](README.md) · [All modules](../README.md)
