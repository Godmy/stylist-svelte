# ADR Index

Архитектурные решения разделены на две ветви.

---

## Ветвь 1 — Технические решения

Выбор инструментов и технологий проекта.  
Расположение: `technical/`

| Файл | Решение |
|------|---------|
| [0001-use-svelte-5-runes.md](./technical/0001-use-svelte-5-runes.md) | Svelte 5 Runes как реактивный слой |
| [0002-use-tailwind-css.md](./technical/0002-use-tailwind-css.md) | Tailwind CSS как базовый слой стилизации |
| [0003-co-located-stories.md](./technical/0003-co-located-stories.md) | `*.story.svelte` рядом с компонентами |
| [0004-package-manager-yarn.md](./technical/0004-package-manager-yarn.md) | Yarn 4 как стандарт управления пакетами |

---

## Ветвь 2 — Методологические решения

Архитектурные принципы организации исходного кода.  
Расположение: `methodology/`

| Файл | Решение |
|------|---------|
| [0001-domain-cluster-joint-family.md](./methodology/0001-domain-cluster-joint-family.md) | Таксономия домен / кластер / соединение / семейство |

---

## Связанные документы

- Книга рецептов аудита: [`docs/cookbook/`](../cookbook/)
- Скрипт аудита: [`stylist/audit/cli.py`](../../stylist/audit/cli.py)
