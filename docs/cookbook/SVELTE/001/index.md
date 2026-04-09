# SVELTE-001: children / Snippet вместо `<slot>`

**Применимо к:** Svelte 5  
**Источник:** `on:slot` deprecated, используй `{@render ...}`

---

## Проблема

В Svelte 5 синтаксис `<slot>` устарел. Компилятор выдаёт:

```
Using `<slot>` to render parent content is deprecated. Use `{@render ...}` tags instead
```

---

## Решение

Используй проп `children` типа `Snippet` вместо `<slot>`.

### Простой случай

```svelte
<!-- ❌ Было -->
<div class="wrapper">
  <slot />
</div>

<!-- ✅ Стало -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  type Props = { children?: Snippet };
  let { children }: Props = $props();
</script>

<div class="wrapper">
  {#if children}
    {@render children()}
  {/if}
</div>
```

### С fallback-контентом

```svelte
<!-- ❌ Было -->
<slot>Default content</slot>

<!-- ✅ Стало -->
{#if children}
  {@render children()}
{:else}
  Default content
{/if}
```

### Условный рендер

```svelte
<!-- ❌ Было -->
{#if condition}
  <slot />
{/if}

<!-- ✅ Стало -->
{#if condition && children}
  {@render children()}
{/if}
```

---

## Приоритет контента

Если компонент принимает и `children`, и текстовые пропы:

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  type Props = {
    children?: Snippet;   // 1. приоритет
    content?: string;     // 2.
    label?: string;       // 3.
  };
  let { children, content, label }: Props = $props();
</script>

{#if children}
  {@render children()}
{:else if content}
  {content}
{:else if label}
  {label}
{/if}
```

---

## Именованные слоты

```svelte
<!-- ❌ Было -->
<slot name="header" />
<slot name="footer" />

<!-- ✅ Стало -->
<script lang="ts">
  import type { Snippet } from 'svelte';
  type Props = {
    header?: Snippet;
    footer?: Snippet;
  };
  let { header, footer }: Props = $props();
</script>

{#if header}{@render header()}{/if}
{#if footer}{@render footer()}{/if}
```
