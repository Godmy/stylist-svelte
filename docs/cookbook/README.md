# Cookbook

Три секции, три типа рецептов.

```
cookbook/
  ERROR/
    001/   ← Нет экспортов
    002/   ← Множественные экспорты
    003/   ← Реэкспорт запрещён
    004/   ← Неверный тип экспорта
    005/   ← Отсутствует export default
  WARNING/
    001/   ← Неверное имя файла
    002/   ← Legacy-структура
    003/   ← Неэкспортируемое объявление
  SVELTE/
    001/   ← children / Snippet вместо <slot>
    002/   ← on:click → onclick
    003/   ← TypeScript: $props, HTMLAttributes
    004/   ← a11y: label, role, keyboard
```

**ERROR** и **WARNING** — коды из скрипта аудита `stylist/audit/cli.py`.  
Каждое замечание в отчёте содержит прямую ссылку на рецепт.

**SVELTE** — паттерны Svelte 5, не связанные с аудитом.  
Актуальны при написании новых компонентов.

Полный список с описаниями: [index.md](./index.md)
