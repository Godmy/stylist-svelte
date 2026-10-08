# Архитектура

Источники правил: [AGENTS.md](../AGENTS.md), [modules.json](../modules.json).
Ниже различаются целевая структура и состояние генерируемых файлов.

## Владение и адресация

Umbrella-репозиторий содержит приложение, конфигурацию, инструменты упаковки и
генерируемые корневые экспорты. Реализации находятся в физических владельцах
`modules/<module>/<domain>`. У `geo` и `wbd` корень репозитория является доменом.
Список владельцев: [modules/readme.md](../modules/readme.md).

Внутри домена адрес сущности — `<domain>/<cluster>/<joint>/<family>`.
Модуль группирует владение Git-историей. Вложенные theme/svg/typography/layout
и server сохраняют отдельные границы репозиториев.

| Cluster   | Вид сущности                |
| --------- | --------------------------- |
| data      | Данные и runtime-ресурсы    |
| const     | `export const`              |
| type      | `export type`               |
| interface | `export interface`          |
| class     | `export class`              |
| function  | `export function`           |
| component | Svelte-компоненты и stories |

Направление сборки: `data → const → type → interface → class → function → component`.
DSIAP внутри `interface`: атомарные `behavior`, `slot` и опциональные `contract`
собираются в `recipe`; обратная зависимость запрещена. Разрешённые joint и
имена файлов перечислены в AGENTS.md; новые инструкции здесь не вводятся.

Правило одной экспортируемой сущности применяется к реализации. Генерируемые
barrel-файлы собирает индексатор, вручную они не редактируются. Наличие старых
файлов вроде `state.svelte.ts` рядом с компонентом не меняет обязательную
политику размещения новых сущностей.

## Логические импорты

[SvelteKit](../svelte.config.js) и [Vite](../vite.config.ts) используют
`moduleAliases`. Пример:

```text
$stylist/button/component/atom/button/index.svelte
  → modules/interaction/button/component/atom/button/index.svelte
```

Привязки вычисляются без записи symlink, junction или копий в `src/lib`.
Vite использует `dedupe: ['svelte']`. Stories ищутся glob по физическим путям,
а логические адреса семей сохраняются для explorer и API.

## Дерево песочницы

Манифест владельца observer хранит только `tree`. Уровни domain/cluster/joint/
family представлены словарями; значение family — ключ `PRESET_FILE`.
Каталог связывает ключ с типом и полным набором имён файлов. Путь файла
восстанавливается из адреса family и имени файла.

`expandComponentTree` восстанавливает дерево для explorer.
`resolveComponentDescriptor` строит проекцию выбранного компонента по
соглашениям об именах и существовании файлов в дереве. Эта проекция не является
графом импортов. `countDomainStories` считает stories по preset.
Подробный контракт: [component-manifest-presets.md](../docs/component-manifest-presets.md).

## Публичный пакет

Поток упаковки в [package.json](../package.json):

```text
checkPackageSource → .package-input → @sveltejs/package → dist
                                                         → publint (yarn build)
```

Проверка источников проходит от публичного корня по статическим импортам и
экспортам, включая литеральные динамические импорты. Она запрещает исключённые
домены и зависимость от `stylist-svelte-travel`. Это source preflight, а не
проверка установленного tarball.

Assembly сохраняет публичные внутренние реализации и runtime-ресурсы.
`geo`, `wbd`, `server`, travel-домены, stories, тесты и `index.full` исключаются.
Только скопированный корень переводится с физических путей на пути пакета.
Travel — отдельная приватная граница пакета; его metadata здесь не проверялись.

На `681e886ea` корневые `src/lib/index.ts` и `index.full.ts` ещё не переведены
на физические module-пути. Требуется человеческая регенерация из корня сайта;
[backlog.md](backlog.md) фиксирует это как препятствие выпуску.

## Сайт и генерация

`build:site` создаёт зеркало исходников, собирает SvelteKit и пишет
`.assetsignore` для Cloudflare. Это отдельный процесс от сборки npm-пакета.
API просмотра текста читает зеркало, а диагностические API читают результаты
внешних инструментов `stylist/*/output`.

В standalone-клоне этих Python-инструментов и site-root scripts нет. Дмитрий
управляет глобальной индексацией, аудитом и error-check CLI в родительском
проекте. Для `weoracle.online` обычная разработка использует workspace-исходники
и существующий hot reload; регенерация `dist` требует отдельного поручения.
