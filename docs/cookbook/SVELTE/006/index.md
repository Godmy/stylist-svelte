# SVELTE-006: Тип в Svelte-компоненте

**Правило:** `type` объявления в `<script>` блоке должны быть вынесены в `type` кластер.

```ts
// ❌ Неверно — в index.svelte
type Mode = 'light' | 'dark';

// ✅ Верно — в domain/type/enum/mode/index.ts
export type Mode = 'light' | 'dark';
```
