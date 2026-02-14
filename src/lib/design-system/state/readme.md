# state

## Назначение
Папка `state` хранит runtime-логику состояния компонентов и конфигурации preset/default.

## Что хранится в папке
- Контракты и фабрики пресетов: `Preset`, `createBasePreset`.
- Дефолты компонентов: `*_DEFAULTS`.
- Preset-конфигурации компонентов: `*_PRESET`.
- Runtime state-вычисления: `createState`, `createInputState`.
- State-типы, используемые при вычислении (`ComponentStateOptions`, `InputStateOptions`).

## Что не хранится в папке
- Карты CSS-классов (`Record<Variant, string>` / `Record<Size, string>`).
- Базовые визуальные class-константы.

## Основные файлы
- `preset.ts`: базовый контракт и фабрика интерактивных пресетов.
- `defaults.ts`: общие state-типы и `createDefaultValues`.
- `button.ts`, `badge.ts`, `label.ts`, `tabs.ts`, `input-preset.ts`: preset/default конфигурации доменов.
- `interaction.ts`, `input.ts`: runtime state-вычисления.

## Правило зависимостей
- `state` может читать `classes`.
- `classes` не должен зависеть от `state`.

## Чеклист при добавлении нового state-модуля
1. Описать preset/default в `state/<domain>.ts`.
2. Если нужен runtime-builder, добавить `create<Domain>State` в `state/<domain>.ts` или отдельный модуль.
3. Экспортировать из `state/index.ts`.
4. Перегенерировать `index.ts` через CLI.
