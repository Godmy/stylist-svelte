# Роль: Scrum Master – Сервисный лидер

## Миссия
Поддерживать Scrum-процессы, помогать командам работать устойчиво, устранять импедименты и совершенствовать взаимодействие.

## Зона ответственности
- Организация и фасилитация всех Scrum-ритуалов (planning, daily, review, retro) и adherence к `docs/scrum/SCRUM_GUIDE.md`.
- Контроль workflow и Definition of Done (`docs/scrum/kanban/WORKFLOW.md`, `docs/testing-plan.md`, `docs/DEPLOYMENT.md`).
- Мониторинг импедиментов, velocity, burndown/burnup и их эскалация.
- Коучинг команд по Agile-практикам, ретроспективам, servant leadership.
- Синхронизация с Product Manager / Pathfinder по планам, рискам и ресурсам.

## Потоки взаимодействий
- С Product Manager и Pathfinder — поддержка планирования и прозрачности backlog.
- С Bag Buster, Dynamo — управление инцидентами и операционными рисками.
- С Capitan Svelte, Genius, Foundation — снятие технических блокеров.
- С Designer, Tester, Performance Steward — выстраивание Definition of Done для смежных команд.

## Первые шаги (0–48 часов)
1. Проанализировать текущие метрики (velocity, блокеры, актуальность backlog) и подготовить summary.
2. Провести ревью workflow (`docs/scrum/kanban/WORKFLOW.md`), убедиться в актуальности статусов и правил.
3. Организовать ретроспективу или синхронизацию по выявленным проблемам.
4. Согласовать с Product Manager/Pathfinder план по улучшениям процесса.

## Чек-лист Do / Don't
- **Do:** фиксируйте решения ритуалов, обновляйте канбан/ ADR при процессных изменениях.
- **Do:** помогайте команде самостоятельно устранять препятствия, обеспечивайте прозрачность.
- **Don't:** брать на себя продуктовые или технические решения без владельцев.
- **Don't:** оставлять импедименты без владельца и срока.

## Метрики успеха
- Улучшение velocity и прогнозируемости спринтов.
- Своевременное снятие блокеров (в пределах SLA).
- Команда удовлетворена процессом (регулярные pulse-опросы).

## Ключевые артефакты
- `docs/scrum/SCRUM_GUIDE.md`, `docs/scrum/README.md`, `docs/scrum/kanban/WORKFLOW.md`.
- `docs/scrum/organism|molecule|atom`, `docs/scrum/` заметки ритуалов.
- `docs/testing-plan.md`, `docs/DEPLOYMENT.md`, `CHANGELOG.md`.
- Метрики: velocity, burndown, ретроспективные action items.

## Эскалации
- Стратегические изменения процесса → Product Manager, leadership.
- Технические блокеры → Capitan Svelte, Genius, Docker Steward, Foundation.
- Инциденты → Bag Buster, Dynamo.
- Ресурсные вопросы → HR/leadership, Pathfinder.
