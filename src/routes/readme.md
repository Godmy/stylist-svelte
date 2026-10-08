# src/routes — песочница и API

Маршруты используют домены `domain` и `server` владельца `modules/observer`,
а тема подключается из `modules/design-system/theme`. Ниже описано поведение
исходников на `681e886ea`; успешный запуск этой ревизии здесь не подтверждён.

## Маршруты

| Адрес / метод                          | Реализация                                                       | Назначение                                                           |
| -------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| `/`                                    | [+page.server.ts](+page.server.ts), [+page.svelte](+page.svelte) | Получает `{ tree }` через DomainManager и открывает DomainPlayground |
| Общий layout                           | [+layout.svelte](+layout.svelte)                                 | Подключает app.css и ThemeProvider                                   |
| `GET /api/content?path=`               | [api/[endpoint]/+server.ts](api/[endpoint]/+server.ts)           | Возвращает текст файла по логическому адресу                         |
| `GET /api/descriptor?entityPath=`      | Тот же обработчик                                                | Строит проекцию компонента по компактному дереву                     |
| `GET /api/di?component=&dependency=`   | Тот же обработчик                                                | Читает отчёты зависимостей через DiagnosticManager                   |
| `GET /api/dashboard/audit-tree`        | [Обработчик](api/dashboard/audit-tree/+server.ts)                | Дерево аудита                                                        |
| `GET /api/dashboard/errors/latest`     | [Обработчик](api/dashboard/errors/latest/+server.ts)             | Последний отчёт ошибок                                               |
| `GET /api/dashboard/indexation/latest` | [Обработчик](api/dashboard/indexation/latest/+server.ts)         | Последний отчёт индексации                                           |
| `GET /api/dashboard/reports/latest`    | [Обработчик](api/dashboard/reports/latest/+server.ts)            | Сводка отчётов                                                       |

Для известных endpoint `content`, `descriptor`, `di` обработчик POST возвращает
405; неизвестный endpoint возвращает 404. `app.svelte` — обычный файл примера,
а не отдельный маршрут SvelteKit. `hooks.server.ts` находится в корне `src`.

## Страница и stories

Страница начинает с экрана `LANDING`, передавая `initialDomain="wbd"`,
`initialCluster="component"`, `initialJoint="atom"`, `initialPreviewMode="story"`.
В DomainPlayground доступны landing, explorer и diagnostics; explorer и
diagnostics импортируются лениво. Выбор экрана хранится в состоянии компонента.

Explorer восстанавливает файлы из дерева и выбирает domain, cluster, joint и
family. Stories загружаются через glob по физическим `modules/*/*/component/**`,
а для `geo`/`wbd` — по корню домена. Ключи приводятся к прежним логическим
адресам `/src/lib/<domain>/...`. `Story` находится в домене `theme`.

Манифест хранится в
`modules/observer/domain/data/json/domain-page-manifest/index.json`. Он содержит
только `tree`; массива `descriptors` нет. DomainManager передаёт компактное
дерево странице, а `resolveComponentDescriptor` строит проекцию по запросу.
Число stories на landing вычисляет `countDomainStories`. Формат и измерения:
[component-manifest-presets.md](../../docs/component-manifest-presets.md).

## Превью исходников и отчёты

`/api/content` читает зеркало `/generated/lib-source` через `event.fetch`,
на Cloudflare — через `platform.env.ASSETS`, если binding доступен. Зеркало
создаёт [generate-lib-source-mirror.mjs](../../scripts/generate-lib-source-mirror.mjs)
из физических владельцев; Git-метаданные не копируются. Сервер не читает
произвольный исходный файл напрямую: `.` и `..` в адресе отклоняются, для
отсутствующего файла возвращается 404, для превышения лимита — 413.

`yarn dev` сам зеркало не создаёт. Для просмотра исходников локально запустите
`node scripts/generate-lib-source-mirror.mjs` из корня библиотеки; это снимок
файлов, который нужно обновлять после изменений. `build:site` выполняет этот
шаг автоматически. DI/dashboard используют результаты внешних инструментов
`stylist/*/output`; их наличие не гарантируется checkout библиотеки.

## Размер превью и скриншоты

Device switcher задаёт поверхности Story `max-width`: Mobile — 375 px,
Tablet — 768 px, Desktop — 1440 px, Fullscreen — без ограничения. Поверхность
использует `container-type: inline-size`. Это изменение контейнера; `@media`
продолжает зависеть от окна браузера. Доступная ширина также ограничена оболочкой.

[examples/capture-story-screenshots.mjs](../../examples/capture-story-screenshots.mjs)
переключает эти режимы в explorer и сохраняет PNG и JSON с метриками.
Playwright не объявлен зависимостью проекта. Пример пока читает исходники из
старого `src/lib/<entityPath>`: после переноса модулей эти поля контекста могут
быть `null`. Его совместимость с текущей песочницей не подтверждена.

Скриншоты в `docs/screenshots` относятся к предыдущему аудиту из PR #2.
Они не доказывают текущее состояние UI. Проверки сайта перед выпуском описаны
в [backlog.md](../backlog.md).
