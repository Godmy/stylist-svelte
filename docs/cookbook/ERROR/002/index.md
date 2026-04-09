# ERROR-002: Множественные экспорты

**Серьёзность:** ❌ Error  
**Правило ADR:** Один файл `index.ts` экспортирует **ровно одну** сущность.

---

## Что произошло

Скрипт нашёл файл `index.ts`, в котором объявлено N > 1 экспортов.  
Это нарушение принципа SRP: каждая сущность должна иметь собственную папку.

---

## Пример

```ts
// ❌ analytics/type/struct/analytics-chart/index.ts
// Найдено 5 экспортов — нарушение

export type AnalyticsChart = { ... }
export type AnalyticsChartData = { ... }
export type AnalyticsChartConfig = { ... }
export type AnalyticsChartSeries = { ... }
export type AnalyticsChartTheme = { ... }
```

---

## Как исправить

Каждый экспорт выносится в свою подпапку со своим `index.ts`.  
Родительский `index.ts` становится **баррелем** — не редактировать вручную.

```
# ✅ После:
analytics/type/struct/analytics-chart/
  index.ts                      ← баррель (авто)
  analytics-chart/
    index.ts                    ← export type AnalyticsChart = { ... }
  analytics-chart-data/
    index.ts                    ← export type AnalyticsChartData = { ... }
  analytics-chart-config/
    index.ts                    ← export type AnalyticsChartConfig = { ... }
  analytics-chart-series/
    index.ts                    ← export type AnalyticsChartSeries = { ... }
  analytics-chart-theme/
    index.ts                    ← export type AnalyticsChartTheme = { ... }
```

### Правила именования подпапок

- Имя папки = имя сущности в kebab-case
- Семейные черты: `<family>-<trait>`, например `theme-consumer`, `camera-axis-x`
- Не использовать суффиксы типа `-type`, `-interface` — кластер уже задаёт тип

---

## Связанные правила

- [ERROR-001](../ERROR-001/) — Нет экспортов
- [ERROR-004](../ERROR-004/) — Неверный тип экспорта
- [WARNING-002](../WARNING-002/) — Legacy-структура
