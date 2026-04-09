# SVELTE-003: TypeScript-паттерны в Svelte 5

**Применимо к:** Svelte 5 + TypeScript

---

## 1. $props() и типизация

```svelte
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    label: string;
    size?: 'sm' | 'md' | 'lg';
  } & HTMLAttributes<HTMLButtonElement>;

  let { label, size = 'md', ...restProps }: Props = $props();
</script>
```

---

## 2. HTMLAttributes — указывать тип элемента

```typescript
// ❌ Требует type argument
let props: { label: string } & HTMLAttributes = $props();

// ✅ Указывай конкретный HTML-элемент
let props: { label: string } & HTMLAttributes<HTMLButtonElement> = $props();
let props: { label: string } & HTMLAttributes<HTMLInputElement>  = $props();
let props: { label: string } & HTMLAttributes<HTMLDivElement>    = $props();
```

### Замены для несуществующих типов

```typescript
// ❌ Этих типов нет в svelte/elements
import type { HTMLSVGAttributes }   from 'svelte/elements';
import type { HTMLLabelAttributes } from 'svelte/elements';
import type { HTMLPreAttributes }   from 'svelte/elements';

// ✅ Используй HTMLAttributes с нужным элементом
// SVG:   HTMLAttributes<SVGSVGElement>
// Label: HTMLAttributes<HTMLLabelElement>
// Pre:   HTMLAttributes<HTMLPreElement>
```

---

## 3. Индексация объектов

```typescript
// ❌ Implicit 'any' при индексации строкой
let sizeClass = $derived(
  { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }[size]
);

// ✅ Явно типизировать ключ
type Size = 'sm' | 'md' | 'lg';
let sizeClass = $derived(
  { sm: 'text-sm', md: 'text-base', lg: 'text-lg' }[size as Size]
);
```

---

## 4. $state() — только как инициализатор

```typescript
// ❌ Нельзя присваивать после объявления
let myVar;
myVar = $state(0);

// ✅ Только при объявлении переменной
let myVar = $state(0);
```

---

## 5. Локальные типы вместо глобальных

Типы, используемые только в одном компоненте, определяй локально:

```svelte
<script lang="ts">
  interface Position2D { x: number; y: number; }
  interface NodeData { id: string; position: Position2D; }

  let { node }: { node: NodeData } = $props();
</script>
```
