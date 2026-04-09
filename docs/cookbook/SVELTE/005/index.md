# SVELTE-005: Константа в Svelte-компоненте

**Правило:** `const` объявления в `<script>` блоке должны быть вынесены в `const` кластер.

```ts
// ❌ Неверно — в index.svelte
const TICK_HEIGHT = 6;

// ✅ Верно — в domain/const/struct/tick-height/index.ts
export const TICK_HEIGHT = 6;
```

Исключения: Svelte runes (`$state`, `$derived`, `$props`, `$effect` и т.д.) и деструктуризация props.
