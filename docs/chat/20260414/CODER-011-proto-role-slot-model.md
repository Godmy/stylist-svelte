CODER-011-proto-role-slot-model

# Целевой состав `interface`: role, slot, recipe, contract

**Статус:** сессионная архитектурная заметка  
**Дата:** 2026-04-16  
**Область:** `stylist-svelte/src/lib/**`

## 1. Позиция

Идея списка joints для `interface` в составе:

```text
role
slot
recipe
contract
```

выглядит сильнее, чем попытка разделить `proto` на подпапки `role` и `slot`.

Причина простая: `role`, `slot`, `recipe`, `contract` являются не разновидностями `proto`, а самостоятельными логическими типами интерфейсов. Если оставить их внутри `proto`, то `proto` сохранит статус размытого контейнера и начнет требовать исключений из правила `<domain>/<cluster>/<joint>/<family>`.

Целевая модель должна быть такой:

```text
src/lib/<domain>/interface/role/<family>/index.ts
src/lib/<domain>/interface/slot/<family>/index.ts
src/lib/<domain>/interface/recipe/<family>/index.ts
src/lib/<domain>/interface/contract/<family>/index.ts
```

`proto` в этой модели становится legacy-joint и должен постепенно исчезнуть из нового кода.

## 2. Семантика joints

### `interface/role`

`role` описывает поведенческую способность компонента или объекта.

Примеры:

```text
interaction/interface/role/clickable/index.ts   -> RoleClickable
interaction/interface/role/focusable/index.ts   -> RoleFocusable
interaction/interface/role/draggable/index.ts   -> RoleDraggable
interaction/interface/role/hoverable/index.ts   -> RoleHoverable
```

Правило: если интерфейс отвечает на вопрос "что объект умеет делать?", это `role`.

### `interface/slot`

`slot` описывает точку содержимого, данных или структурного фрагмента компонента.

Примеры:

```text
typography/interface/slot/label/index.ts        -> SlotLabel
typography/interface/slot/caption/index.ts      -> SlotCaption
typography/interface/slot/badge/index.ts        -> SlotBadge
information/interface/slot/status/index.ts      -> SlotStatus
media/interface/slot/icon/index.ts              -> SlotIcon
```

Правило: если интерфейс отвечает на вопрос "какое место для данных или содержимого есть у компонента?", это `slot`.

### `interface/recipe`

`recipe` описывает собранный интерфейсный рецепт компонента. Это нормальный второй уровень после атомарных `role` и `slot`.

Пример:

```text
control/interface/recipe/button/index.ts         -> ButtonRecipe
control/interface/recipe/button-composed/index.ts -> ButtonComposedRecipe
```

Рецепт может собирать:

```text
RoleClickable
RoleFocusable
SlotLabel
SlotIcon
SlotBadge
ThemeBackgroundRecipe
BorderRecipe
ContainerProps
```

Правило: если интерфейс является композицией нескольких атомарных интерфейсных возможностей для конкретного компонента или семейства, это `recipe`.

### `interface/contract`

`contract` нужен для устойчивых внешних или междоменных договоров, которые не являются ни поведением, ни слотом, ни компонентным рецептом.

Кандидаты:

```text
theme/interface/contract/theme/index.ts
style/interface/contract/token/index.ts
architecture/interface/contract/component/index.ts
```

Правило: если интерфейс фиксирует обязательства между подсистемами, API, темами, провайдерами, адаптерами или внешним потребителем, это `contract`.

Важное ограничение: `contract` не должен становиться обязательным третьим уровнем после `recipe`. Базовая сборка остается двухуровневой:

```text
role/slot -> recipe
```

`contract` подключается только там, где действительно есть отдельный межсистемный договор.

## 3. Почему `proto` надо выводить, а не расширять

Путь вида:

```text
interaction/interface/proto/role/clickable/index.ts
```

нарушает текущую форму SAMO:

```text
<domain>/<cluster>/<joint>/<family>
```

Здесь `role` становится не joint, а дополнительным уровнем внутри joint. Это плохой прецедент: после него появится давление делать такие же вложенности в `type`, `const`, `function` и других clusters.

Путь вида:

```text
interaction/interface/proto/role-clickable/index.ts
```

формально совместим, но методологически слабее. Семантика `role` спрятана в имени family, а не выражена структурой.

Поэтому целевой вариант:

```text
interaction/interface/role/clickable/index.ts
```

## 4. Что делать с текущими `*-props`

Файлы вида:

```text
interaction/interface/proto/clickable-props/index.ts
interaction/interface/proto/focusable-props/index.ts
interaction/interface/proto/draggable-props/index.ts
```

не являются `slot`. Это входные интерфейсы для runtime state.

В целевой модели их не надо механически переносить в `slot`. Возможны два решения:

1. Если props выражают публичную способность компонента, они должны быть поглощены соответствующим `Role*`.
2. Если props являются частью конкретного компонентного контракта, они должны быть включены в `Recipe*`.

Отдельный joint `interface/input` сейчас не нужен. Он усложнит модель и создаст пятый joint без достаточной выгоды. Лучше сначала проверить, нельзя ли разложить эти props между `role` и `recipe`.

## 5. Что делать с `theme/interface/proto/thema`

`thema` не является `slot`.

Возможные целевые варианты:

```text
theme/interface/role/themed/index.ts       -> RoleThemed
theme/interface/contract/theme/index.ts    -> ThemeContract
```

Выбор зависит от смысла текущего интерфейса:

- если он означает "компонент умеет принимать тему", это `RoleThemed`
- если он фиксирует структуру темы или договор между theme-provider и потребителем, это `ThemeContract`

Автоматически относить тему к `slot` нельзя: тема не является местом содержимого.

## 6. Целевая формула сборки компонента

Нормальная компонентная сборка:

```text
interface/role
interface/slot
interface/contract?     optional
  -> interface/recipe
  -> function/state
  -> svelte/(atom|molecule|organism)
```

Для кнопки:

```text
RoleClickable
RoleFocusable
SlotLabel
SlotIcon
SlotBadge
ThemeContract? или RoleThemed?
  -> ButtonRecipe
  -> createButtonState
  -> Button.svelte
```

`recipe` описывает интерфейсную композицию. `function/state` собирает реализацию поведения. `svelte` соединяет state, разметку и slots.

## 7. Правила именования

Целевые имена:

```text
RoleClickable
RoleFocusable
RoleDraggable
RoleHoverable

SlotLabel
SlotCaption
SlotBadge
SlotStatus
SlotIcon

ButtonRecipe
AccordionRecipe
ThemeContract
```

Старые имена вида `IClickable`, `IFocusable`, `ILabelSlot`, `IIconSlot` следует считать переходными. Они допустимы до миграции, но не должны быть эталоном для нового кода.

## 8. Миграционный порядок

1. Принять ADR: `interface` имеет joints `role`, `slot`, `recipe`, `contract`; `proto` объявляется legacy/transitional.
2. Обновить `AGENTS.md`: заменить разрешенный список `interface: proto, recipe, api` на `interface: role, slot, recipe, contract` или временно добавить их рядом с `proto` на период миграции.
3. Обновить аудит SAMO и indexation, если они валидируют список joints.
4. Составить inventory всех `interface/proto/**` и классифицировать как `role`, `slot`, `recipe-candidate`, `contract`, `legacy`.
5. Перенести сначала поведенческие роли: `clickable`, `focusable`, `draggable`, `hoverable`.
6. Затем перенести slots: `label-slot`, `caption-slot`, `badge-slot`, `status-slot`, `icon-slot`.
7. Отдельно разобрать `*-props`: поглощать в `role` или `recipe`, не переносить в `slot`.
8. Отдельно разобрать theme/thema: `RoleThemed` или `ThemeContract`.
9. После каждого пакета запускать indexation и errors.

## 9. Итог

Предложенный список:

```text
role
slot
recipe
contract
```

является хорошей целевой моделью для `interface`.

Он лучше, чем `proto -> role/slot`, потому что сохраняет плоскую SAMO-структуру:

```text
<domain>/<cluster>/<joint>/<family>
```

и делает тип интерфейса видимым на уровне joint.

Короткое правило:

- `role` — способность поведения
- `slot` — место содержимого или данных
- `recipe` — собранный интерфейс компонента
- `contract` — межсистемный или внешний договор
- `proto` — legacy-контейнер, не целевая архитектура
