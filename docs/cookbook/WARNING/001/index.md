# WARNING-001: Неверное имя файла

**Серьёзность:** ⚠ Warning  
**Правило ADR:** Все TypeScript-файлы с кодом должны называться `index.ts`. State-файлы — `index.svelte.ts`. Произвольные имена запрещены.

---

## Что произошло

Скрипт нашёл `.ts`-файл с именем, отличным от `index.ts` (или `index.svelte.ts` для state).  
Это признак legacy-структуры: раньше файлы именовались по содержимому (`drawing-surface.ts`, `theme.ts`).

---

## Примеры

```
⚠ Неверное имя файла: `drawing-surface.ts`
   в canvas/type/struct/drawing-surface/drawing-surface.ts

⚠ Неверное имя файла: `theme.ts`
   в theme/type/struct/theme/theme.ts

⚠ Неверное имя файла: `container-props.ts`
   в layout/type/struct/container/container-props.ts
```

---

## Как исправить

Каждый именованный файл должен стать папкой с `index.ts` внутри.

```
# Было:
canvas/type/struct/drawing-surface/
  index.ts                      ← баррель (ссылается на drawing-surface.ts)
  drawing-surface.ts            ← export type DrawingSurface

# Стало:
canvas/type/struct/drawing-surface/
  index.ts                      ← баррель (авто, не трогать)
  drawing-surface/
    index.ts                    ← export type DrawingSurface
```

### Шаги

1. Создать папку `<имя-файла-без-расширения>/` рядом с именованным файлом
2. Переместить содержимое именованного файла в `<папка>/index.ts`
3. Удалить именованный файл
4. Обновить импорты, ссылавшиеся на старый путь
5. Пересобрать баррель родительской папки

### Исключение

Файл `index.svelte.ts` — допустимое имя для state-паттерна.  
Файл `index.svelte` — допустимое имя для Svelte-компонента.  
Файл `index.story.svelte` — допустимое имя для story-файла.

---

## Замечание

Это предупреждение почти всегда появляется вместе с [WARNING-002](../WARNING-002/) (Legacy-структура). Исправление одного автоматически закрывает оба.

---

## Связанные правила

- [WARNING-002](../WARNING-002/) — Legacy-структура
- [ERROR-002](../ERROR-002/) — Множественные экспорты
