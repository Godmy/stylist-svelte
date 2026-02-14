# styles

## Назначение
Папка `styles` хранит `*StyleManager` классы и только их.

## Стандарт
- Один менеджер = одна зона ответственности.
- Предпочтение узким менеджерам (`IconStyleManager`, `ImageStyleManager`, `InteractionStyleManager`, `AnimationStyleManager`).
- Композитные фасады допустимы только как compatibility-слой.

## Правила структуры
- `styles/<domain>.ts` экспортирует один основной `DomainStyleManager`.
- Менеджер читает class maps из `classes/*` и defaults/preset из `state/*`.
- Бизнес-логика и runtime state-вычисления в `styles` не размещаются.

## Текущее исключение
- `MediaStyleManager` оставлен как backward-compatible фасад.
- Новые использования должны идти через `IconStyleManager`, `ImageStyleManager`, `CountryFlagStyleManager`.

## Чеклист добавления нового менеджера
1. Создать `styles/<domain>.ts` с `DomainStyleManager`.
2. Использовать только данные из `classes/*` и `state/*`.
3. Добавить экспорт через генератор index.
4. Перегенерировать `index.ts` через CLI.
