# WARNING-002: Legacy-структура

**Серьёзность:** ⚠ Warning  
**Правило ADR:** Файл `index.ts` рядом с другими `.ts`-файлами в одной папке — признак устаревшей структуры. Баррель должен находиться только рядом с подпапками или `index.svelte`-файлами.

---

## Что произошло

Скрипт нашёл `index.ts`, который лежит в папке вместе с другими `.ts`-файлами.  
В новой архитектуре `index.ts` в такой папке — это **баррель**, а каждый соседний `.ts`-файл — это сущность, которая должна быть в своей подпапке.

---

## Пример

```
⚠ Legacy-структура: index.ts находится среди других .ts файлов
  (drawing-surface-contract.ts, drawing-surface.ts)
  в canvas/type/struct/drawing-surface/index.ts
```

```
# Как выглядит папка сейчас (legacy):
canvas/type/struct/drawing-surface/
  index.ts                       ← реэкспортирует соседей вручную
  drawing-surface-contract.ts    ← export interface DrawingSurfaceContract
  drawing-surface.ts             ← export type DrawingSurface + другие типы
```

---

## Как исправить

Каждый именованный `.ts`-файл превращается в подпапку.

```
# ✅ Целевая структура:
canvas/type/struct/drawing-surface/
  index.ts                          ← баррель (авто, не трогать)
  drawing-surface-contract/
    index.ts                        ← export interface DrawingSurfaceContract
  drawing-surface/
    index.ts                        ← export type DrawingSurface
```

### Пошаговый алгоритм

Для каждого именованного `.ts`-файла рядом с `index.ts`:

1. Проверить файл на наличие [ERROR-002](../ERROR-002/) (если несколько экспортов — сначала разбить)
2. Определить имя семейства по содержимому (обычно совпадает с именем файла без расширения)
3. Создать папку `<family>/`
4. Создать `<family>/index.ts` с единственным экспортом из этого файла
5. Удалить именованный файл
6. Обновить все импорты, ссылавшиеся на старый путь
7. Пересобрать баррель (`index.ts` текущей папки)

### Допустимые соседи для index.ts

| Сосед                  | Допустимо? |
|------------------------|------------|
| Подпапки               | ✅ да (баррель) |
| `index.svelte`         | ✅ да (компонент) |
| `index.story.svelte`   | ✅ да (компонент) |
| `index.svelte.ts`      | ✅ да (state) |
| Любые другие `.ts`     | ❌ нет (legacy) |
| `README.md`            | ✅ да (документация) |

---

## Связанные правила

- [WARNING-001](../WARNING-001/) — Неверное имя файла
- [ERROR-002](../ERROR-002/) — Множественные экспорты
- [ERROR-001](../ERROR-001/) — Нет экспортов
