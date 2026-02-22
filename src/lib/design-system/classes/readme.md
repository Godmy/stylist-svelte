# classes

## Назначение
`classes` хранит декларативные class maps и CSS-константы.

## Что хранится
- `*_CLASSES`
- `Record<Variant, string>` / `Record<Size, string>`
- Константы визуальных классов.

## Что не хранится
- Runtime state-функции.
- Preset/default фабрики.
- Бизнес-логика и side effects.

## Граница со `styles`
- `classes`: что такое классы.
- `styles`: как эти классы собираются в итог по контексту.

## Граница с `presets/defaults/state`
- `classes` не зависит от `state`.
- Конфигурации поведения — в `presets/defaults`.
- Вычисление состояния — в `state`.

## Критерий качества
Если в `classes` появляется условная логика поведения, файл в неправильном слое.
