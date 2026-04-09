# scripts/svg/index.ts — Генерация enum иконок по доменам

## Назначение
Сканирует все домены в `src/lib/*/data/svg/` и генерирует типизированные const/type enum для каждого домена.

## Запуск
```bash
npx tsx scripts/svg/index.ts
```

## Что генерирует

Для каждого домена, содержащего `data/svg/`:

### 1. `{domain}/const/enum/icon/index.ts`
Массив-константа с именами всех SVG-файлов домена:
```ts
export const TOKEN_INFORMATION_ICON = [
  'badge',
  'card',
  // ...
] as const;
```

### 2. `{domain}/type/enum/icon/index.ts`
Тип, выведенный из константы:
```ts
import { TOKEN_INFORMATION_ICON } from '$stylist/information/const/enum/icon';

export type TokenInformationIcon = (typeof TOKEN_INFORMATION_ICON)[number];
```

## Структура файлов домена
```
src/lib/{domain}/
├── const/
│   └── enum/
│       └── icon/
│           └── index.ts          # TOKEN_{DOMAIN}_ICON
├── type/
│   └── enum/
│       └── icon/
│           └── index.ts          # Token{Domain}Icon
└── data/
    └── svg/
        ├── badge.svg
        ├── card.svg
        └── ...                   # SVG файлы (без index.ts)
```

## Использование в коде
```ts
import type { TokenInformationIcon } from '$stylist/information/type/enum/icon';
import { TOKEN_INFORMATION_ICON } from '$stylist/information/const/enum/icon';

// Типизированная переменная
const icon: TokenInformationIcon = 'badge';

// Итерация по всем иконкам домена
for (const name of TOKEN_INFORMATION_ICON) {
  console.log(name);
}
```

## Поддерживаемые домены (автоматически обнаруживаются)
- analytics
- architecture
- calendar
- development
- file
- information
- interaction
- layout
- social
- theme
- typography

## Примечания
- Имена иконок берутся из `.svg` файлов без расширения
- Сортировка по алфавиту
- Старые `icon-registry.ts` и `data/svg/index.ts` удаляются при запуске
- Запускать при каждом изменении SVG файлов в доменах
