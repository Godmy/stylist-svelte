# Design System

## Слои и структура
```
design-system/
  tokens/         # базовые токены (colors, spacing, typography, radius, shadows, sizes, classes, variants)
  themes/         # темы + контекст (light, dark, types, context)
  interaction/    # контракт Preset, factory, props/defaults, интерактивные токены
  utils/          # css-vars: themeToCSSVars/applyCSSVars/removeCSSVars/applyThemeToDOM/generateThemeCSS
```

- Публичный импорт: `$stylist/design-system` (токены, темы, createPreset, контекст).
- Паттерн пресетов живёт в `design-system/interaction/factory.ts` и реэкспортируется через `design-system`.
- Svelte-специфика (hooks, руны, компоненты) должна оставаться за пределами `design-system/`.

## Паттерн пресетов
`Preset<V,S>` описывает варианты/размеры + классы/дефолты для интерактивных компонентов. `createPreset` собирает пресет из токенов (`variant`, `size`, `state`, `focusVisible`).

Минимальный пример:
```ts
import { createPreset } from '$stylist/design-system';

const BUTTON_PRESET = createPreset({
  defaults: { variant: 'primary', size: 'md' },
  classes: {
    base: 'inline-flex items-center gap-2'
  }
});
```

## Токены и темы
- Цвета/отступы/типографика/радиусы/тени/размеры - из `tokens/*`.
- Темы (`light`, `dark`) - из `themes`; меняются через `applyThemeToDOM` + `themeToCSSVars`.
- Интерактивные токены (`INTERACTION_TOKENS`, `VARIANT_CLASSES`, `SIZE_CLASSES`, `STATE_CLASSES`) - в `interaction/tokens`.

## CSS Vars (utils)
- `themeToCSSVars(theme)` -> `Record<'--var', value>` (без префикса `--` в ключах возвращается как `color-primary-500` и т.п.).
- `applyCSSVars(element, vars)` / `removeCSSVars(element, names)` - запись/очистка custom properties.
- `applyThemeToDOM(theme)` - применяет тему к `document.documentElement`, ставит `data-theme`.
- `generateThemeCSS(theme, selector?)` - строка с CSS-переменными для статической генерации.

## Рекомендации
- Не хардкодить цвета/отступы - использовать токены или CSS vars.
- В `design-system/` держать только фреймворк-агностичные вещи; Svelte-helpers и компоненты - в `components/` или `utils/` (но не здесь).
- Для новых пресетов: начинайте с `createPreset`, добавляйте только недостающие классы, не копируйте токены вручную.
- Если нужна новая тема/палитра/размер - сначала добавьте токен, потом используйте его в пресетах.
