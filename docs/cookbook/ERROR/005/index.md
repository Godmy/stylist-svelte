# ERROR-005: Отсутствует export default

**Серьёзность:** ❌ Error  
**Правило ADR:** Файлы `index.svelte.ts` (паттерн `state`) обязаны иметь `export default`.

---

## Что произошло

Скрипт нашёл файл `*.svelte.ts`, который содержит `export function`, но не имеет `export default`.  
Svelte state-файлы используют специальный паттерн: именованная функция + `export default` для её регистрации.

---

## Пример

```ts
// ❌ function/state/some-state/index.svelte.ts
// Есть export function, но нет export default

export function createSomeState() {
  let value = $state(0);
  return { value };
}
// Отсутствует: export default createSomeState;
```

---

## Как исправить

Добавить `export default` с именем функции в конец файла:

```ts
// ✅ function/state/some-state/index.svelte.ts

export function createSomeState() {
  let value = $state(0);
  return { value };
}

export default createSomeState;
```

### Стандартный паттерн state-файла

```ts
// index.svelte.ts

export function create<Name>() {
  // Svelte 5 runes: $state, $derived, $effect
  let x = $state<Type>(initialValue);
  
  return {
    get x() { return x; },
    setX(v: Type) { x = v; }
  };
}

export default create<Name>;
```

Скрипт аудита не считает `export function` + `export default` множественными экспортами (ERROR-002) — это единственный разрешённый случай двух экспортов в одном файле.

---

## Связанные правила

- [ERROR-002](../ERROR-002/) — Множественные экспорты
- [WARNING-001](../WARNING-001/) — Неверное имя файла
