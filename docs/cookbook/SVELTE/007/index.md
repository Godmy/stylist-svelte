# SVELTE-007: Интерфейс в Svelte-компоненте

**Правило:** `interface` объявления в `<script>` блоке должны быть вынесены в `interface` кластер.

```ts
// ❌ Неверно — в index.svelte
interface ClickContext { x: number; y: number; }

// ✅ Верно — в domain/interface/proto/click-context/index.ts
export interface ClickContext { x: number; y: number; }
```
