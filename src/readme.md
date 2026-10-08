# src — исходники библиотеки и песочницы

`src` содержит корневые точки входа библиотеки, приложение SvelteKit и тесты.
Реализации доменов находятся в физических репозиториях `modules/`, согласно
[modules.json](../modules.json).

| Путь                               | Назначение                                      |
| ---------------------------------- | ----------------------------------------------- |
| [lib/](lib/readme.md)              | Генерируемые публичная и полная точки входа     |
| [routes/](routes/readme.md)        | Страница песочницы и серверные API              |
| [test/](test)                      | Тесты и harness-компоненты темы                 |
| [app.css](app.css)                 | Общие стили приложения                          |
| [app.html](app.html)               | HTML-шаблон SvelteKit                           |
| [hooks.server.ts](hooks.server.ts) | Запись серверных ошибок через DiagnosticManager |

SvelteKit и Vite используют физические алиасы из
[scripts/prepare-module-sources.mjs](../scripts/prepare-module-sources.mjs).
`$stylist/button/...` адресует `modules/interaction/button/...`; дополнительного
дерева исходников в `src/lib/button` нет.

Глобальная генерация точек входа, манифеста и отчётов ошибок выполняется Дмитрием
из родительского проекта. Правила редактирования и ограничения hot reload:
[AGENTS.md](../AGENTS.md).

Навигация по документации: [index.md](index.md). Устройство проекта:
[architecture.md](architecture.md). Проверенные изменения:
[changelog.md](changelog.md). Оставшиеся действия перед выпуском:
[backlog.md](backlog.md).
