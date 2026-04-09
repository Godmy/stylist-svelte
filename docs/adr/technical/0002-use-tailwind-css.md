# ADR 0002: Tailwind CSS как базовый слой стилизации

**Status:** Accepted (Validated)
**Date:** 2025-01-03
**Validated:** 2026-02-20

## Контекст
Нужен единый и масштабируемый подход к стилизации большого набора компонентов.

## Решение
Используем Tailwind CSS как основной способ описания UI-стилей.

## Проверка по кодовой базе
- `tailwind.config.js` присутствует в проекте.
- Tailwind-классы используются в компонентах по всей библиотеке.
- Конфигурация сборки согласована с `vite`/`svelte` конфигами.

## Конфигурация интеграции

Рабочая связка (`postcss.config.js` + `vite.config.ts` + `svelte.config.js`):

```js
// postcss.config.js
export default { plugins: { tailwindcss: {}, autoprefixer: {} } };
```

```ts
// vite.config.ts — css.postcss: {} заставляет Vite взять postcss.config.js
css: { postcss: {} }
```

```js
// svelte.config.js — без явного postcss в vitePreprocess, Vite сам подхватит
preprocess: vitePreprocess()
```

## Известные ложные предупреждения svelte-check

- `Unknown at rule @apply` — ложное срабатывание статического анализа, не влияет на сборку.
- `Unused CSS selector` для dark-mode классов — классы применяются динамически, предупреждение ложное.

## Последствия
- Высокая повторяемость и предсказуемость стилей.
- Низкий порог для масштабирования библиотечных компонентов.
