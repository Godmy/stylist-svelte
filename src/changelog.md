# Изменения структуры исходников

Записи относятся к Git-истории, а не к опубликованным npm-релизам.

## 2026-10-08

- [681e886ea](https://github.com/Godmy/stylist-svelte/commit/681e886eaf5be8b34944c70b4e2ffc5eda476617):
  реализации вынесены в плоские module-репозитории; добавлены реестр владельцев,
  физические алиасы и сборка package-input; travel выделен в приватную границу.
  Корневые экспорты требуют последующей человеческой регенерации.
- [afb625862](https://github.com/Godmy/stylist-svelte/commit/afb6258628fba28b6a9bfec6b959f1ea9dd3e4ea):
  добавлены публичная/full точки входа и source preflight, обновлены package-files,
  Prettier/ESLint; graph-данные восстановлены в static, token preset отвязан от geo.
  Это изменения кода до module-переноса, не подтверждение текущей сборки.
- [400dec575](https://github.com/Godmy/stylist-svelte/commit/400dec57503ed7906780e282c40db78ea21d12c8):
  манифест переведён на словари и file presets, descriptors вычисляются по запросу;
  добавлены тесты формата. Размер закреплённого файла и его область измерения:
  [component-manifest-presets.md](../../.docs/stylist-svelte/component-manifest-presets.md).

## 2026-10-07

- [PR #2](https://github.com/Godmy/stylist-svelte/pull/2): добавлены три аудита,
  скриншоты песочницы и пример их получения. Issue #3 потребовал переписать
  документы с учётом проверяемых фактов и изменившейся структуры.

Текущая карта исходников: [readme.md](readme.md). Изменения документации и
исторические записи пакета: [CHANGELOG.md](../CHANGELOG.md).
