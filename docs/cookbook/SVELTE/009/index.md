# SVELTE-009: Контракт состояния Svelte-компонента

**Правило:** Каждый `index.svelte` компонент обязан иметь контракт состояния:
1. `const state = stateFn(props)` — вызов функции состояния
2. Импорт этой функции из `function/state/...`

```ts
// ✅ Верно — в index.svelte
<script lang="ts">
  import { buttonState } from '../../function/state/button-state';

  const props = $props();
  const state = buttonState(props);
</script>

// ❌ Неверно — нет const state и нет импорта из function/state
<script lang="ts">
  const props = $props();
  const label = props.label ?? 'Click';
</script>
```

**Почему:** Вся логика состояния компонента должна быть инкапсулирована в функцию состояния (`function/state/...`), а Svelte-компонент является чистым представлением (view), которое только вызывает эту функцию.
