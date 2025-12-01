# Button (atom)

Основная кнопка библиотеки. Поддерживает варианты, размеры, состояния загрузки, а также доступность из коробки.

## Файлы
- `Button.svelte` — компонент, прокидывает HTML-атрибуты и управляет состояниями.
- `types.ts` — типы пропсов/вариантов/размеров.
- `styles.ts` — сборка классов (variant/size/disabled/block/loader).
- `Button.css` — стили вариантов, loader-токены, focus-ring.
- `Button.story.svelte` — интерактивный пример.

## Пропсы
- `variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link' | 'outline'` (по умолчанию `primary`)
- `size?: 'sm' | 'md' | 'lg'` (по умолчанию `md`)
- `disabled?: boolean`
- `loading?: boolean` — включает лоадер и `aria-busy`
- `block?: boolean` — `w-full`
- `class?: string`
- `ariaLabel?: string` — aria-label, нужен для иконок без текста (fallback к переданному `aria-label` в `restProps`)
- `loadingLabel?: string` — sr-only текст при загрузке (по умолчанию `Loading...`)
- `type?: 'button' | 'submit' | 'reset'` — по умолчанию `button`
- `children?: Snippet` — контент
- остальные HTML-атрибуты кнопки через `...restProps`

## Варианты и стили
Классы хранятся в `Button.css`, выбираются через `ButtonStyleManager.getVariantClasses`.
- `primary` — синий фон, белый текст, hover темнее.
- `secondary` — тёмно-серый фон/бордер, белый текст (контрастно в light и dark).
- `success` — зелёный фон.
- `warning` — янтарный фон.
- `danger` — красный фон.
- `outline` — прозрачный фон, бордер, текст по токену `--color-text-primary`.
- `ghost` — прозрачный фон, без бордера.
- `link` — прозрачный фон, подчёркивание, цвет `primary`.

Размеры (`ButtonStyleManager.getSizeClasses`):
- `sm`: `px-3 py-1.5 text-sm`
- `md`: `px-4 py-2 text-base`
- `lg`: `px-6 py-3 text-lg`

Loader-токены (`:root` в Button.css):
- `--button-loader-size-sm|md|lg`
- `--button-loader-margin-left-sm|md|lg`

## Поведение
- `type="button"` по умолчанию, чтобы не сабмитить формы.
- `loading`: показывает `Loader2`, ставит `aria-busy`, `aria-live="polite"` и sr-only текст из `loadingLabel`. Текст слота скрывается, если слота нет — показывается строка `Loading...`.
- `disabled || loading`: блокирует клики (`pointer-events-none`, `opacity-50`).
- Focus ring: `:focus-visible` с цветом `--color-primary-500` (есть фолбэк).

## A11y
- Для иконок без текста задавайте `ariaLabel` или `aria-label` в атрибутах.
- При загрузке используйте осмысленный `loadingLabel` (например, “Saving...”).
- Не переключайте `type` на `submit`, если кнопка не отправляет форму.

## Импорты
```svelte
<script>
  import { Button } from 'stylist-svelte'; // из корня
  // или точечно
  import { Button } from 'stylist-svelte/components/atoms/controls/buttons';
</script>
```

## Примеры
```svelte
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="outline" block>Full width</Button>
<Button loading loadingLabel="Saving draft...">Save</Button>
<Button ariaLabel="Add item">
  <IconPlus />
</Button>
<Button type="submit" variant="primary">Submit</Button>
```

## Как добавить новый вариант
1. Добавьте CSS-класс в `Button.css`.
2. Добавьте маппинг в `ButtonStyleManager.getVariantClasses`.
3. При необходимости расширьте токены ThemeProvider (цвета/бордеры).

## Чек-лист качества
- Контраст > WCAG AA (проверьте на светлой и тёмной теме).
- Фокус виден через `:focus-visible`.
- Есть `ariaLabel` для иконок и `loadingLabel` при лоадере.
- Экспорт присутствует в `index.ts` (кнопка уже экспортируется).
