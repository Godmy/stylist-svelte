# SVELTE-008: Функция в Svelte-компоненте

**Правило:** `function` объявления в `<script>` блоке должны быть вынесены в `function` кластер.

```ts
// ❌ Неверно — в index.svelte
function formatDate(d: Date) { ... }

// ✅ Верно — в domain/function/script/format-date/index.ts
export function formatDate(d: Date) { ... }
```

Исключения: обработчики событий (event handlers), которые используют локальное состояние компонента.
