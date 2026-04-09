# SVELTE-004: Доступность (a11y) в компонентах

**Применимо к:** Svelte 5  
**Источник:** svelte-check a11y warnings

---

## 1. Label не связан с элементом управления

**Ошибка:** `A form label must be associated with a control`

```svelte
<!-- ❌ -->
<label>Username</label>
<input bind:value={username} id="username-field" />

<!-- ✅ -->
<label for="username-field">Username</label>
<input bind:value={username} id="username-field" />
```

---

## 2. Кликабельный элемент без клавиатурного обработчика

**Ошибка:** `Visible, non-interactive elements with a click event must be accompanied by a keyboard event handler`

```svelte
<!-- ❌ -->
<div class="card" onclick={handleClick}>Card</div>

<!-- ✅ -->
<div
  class="card"
  onclick={handleClick}
  role="button"
  tabindex="0"
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Card
</div>
```

---

## 3. Интерактивный элемент без ARIA role

**Ошибка:** `<div> with a click handler must have an ARIA role`

```svelte
<!-- ❌ -->
<div onclick={handleClick}>Click me</div>

<!-- ✅ -->
<div onclick={handleClick} role="button" tabindex="0">Click me</div>
```

---

## 4. Вложенные интерактивные элементы

```svelte
<!-- ❌ button внутри button — невалидный HTML -->
<button onclick={outer}>
  <button onclick={inner}>Inner</button>
</button>

<!-- ✅ -->
<div onclick={outer} role="button" tabindex="0">
  <button onclick={inner}>Inner</button>
</div>
```

---

## 5. Неиспользуемые CSS-селекторы

```svelte
<!-- ❌ .unused не используется -->
<style>
  .used   { color: red; }
  .unused { color: blue; }
</style>

<!-- ✅ Удалить неиспользуемый -->
<style>
  .used { color: red; }
</style>
```

> `@apply` в Tailwind вызывает ложные предупреждения svelte-check — не влияет на сборку.
