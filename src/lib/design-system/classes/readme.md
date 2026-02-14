# classes

## Назначение
Папка `classes` хранит только декларативные карты CSS-классов и константы, связанные со стилями.

## Что хранится в папке
- `Record<Variant, string>` и `Record<Size, string>` карты классов.
- Базовые class-константы (`*_BASE_CLASS`, `*_CLASSES`).
- Константы визуальных токенов, если они выражены через CSS-классы.

## Что не хранится в папке
- Пресеты (`Preset`, `InputPreset`, `*_PRESET`).
- Дефолты состояния (`*_DEFAULTS`).
- Фабрики/утилиты для построения state (`createBasePreset`, `createDefaultValues`, `createState*`).
- Интерфейсы/типы runtime state.

## Граница с `state`
- `classes/*` -> только декларация стилей.
- `state/*` -> только runtime-логика состояния и preset/default конфигурация.

## Примеры импорта
- Из `classes`: `VARIANT_CLASSES`, `INPUT_VARIANT_CLASSES`, `LABEL_SIZE_CLASSES`.
- Из `state`: `BUTTON_PRESET`, `INPUT_FIELD_PRESET`, `createBasePreset`, `createState`.

## Чеклист при добавлении нового компонента
1. Добавить class maps в `classes/<domain>.ts`.
2. Если нужны пресет/дефолты, добавить в `state/<domain>.ts` или `state/<domain>-preset.ts`.
3. Не переносить state-типы и фабрики обратно в `classes`.
4. Перегенерировать `index.ts` через CLI.
