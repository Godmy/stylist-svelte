# SVELTE-002: Миграция обработчиков событий

**Применимо к:** Svelte 5  
**Источник:** `on:event` syntax deprecated

---

## Проблема

В Svelte 5 синтаксис `on:event` устарел. Компилятор выдаёт предупреждения при использовании `on:click`, `on:change` и других директив событий.

---

## Решение

Заменить директивы `on:event` на атрибуты `onevent`.

```svelte
<!-- ❌ Было -->
<button on:click={handleClick} on:change={handleChange}>Click</button>
<input on:input={handleInput} on:focus={handleFocus} on:blur={handleBlur} />

<!-- ✅ Стало -->
<button onclick={handleClick} onchange={handleChange}>Click</button>
<input oninput={handleInput} onfocus={handleFocus} onblur={handleBlur} />
```

---

## Полная таблица замен

| Было | Стало |
|------|-------|
| `on:click` | `onclick` |
| `on:change` | `onchange` |
| `on:input` | `oninput` |
| `on:focus` | `onfocus` |
| `on:blur` | `onblur` |
| `on:mouseenter` | `onmouseenter` |
| `on:mouseleave` | `onmouseleave` |
| `on:mousemove` | `onmousemove` |
| `on:mousedown` | `onmousedown` |
| `on:mouseup` | `onmouseup` |
| `on:mouseout` | `onmouseout` |
| `on:dblclick` | `ondblclick` |
| `on:contextmenu` | `oncontextmenu` |
| `on:dragover` | `ondragover` |
| `on:drop` | `ondrop` |
| `on:wheel` | `onwheel` |
| `on:keydown` | `onkeydown` |
| `on:keyup` | `onkeyup` |
| `on:keypress` | `onkeypress` |

---

## Keyboard + Mouse совместимость

Когда обработчик ожидает `MouseEvent`, но нужен и клавиатурный эквивалент:

```svelte
<div
  onclick={handleClick}
  role="button"
  tabindex="0"
  onkeydown={(e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const mouseEvent = new MouseEvent('click', {
        view: window, bubbles: true, cancelable: true
      });
      handleClick(mouseEvent);
    }
  }}
>
  Clickable area
</div>
```

---

## MouseEvent — не импортировать из svelte/elements

```typescript
// ❌ Не существует в svelte/elements
import { MouseEvent } from 'svelte/elements';

// ✅ MouseEvent доступен глобально в браузере
function handleClick(e: MouseEvent) { ... }
```
