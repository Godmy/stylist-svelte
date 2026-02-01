# Utils (Утилиты)

Слой утилит предоставляет функции для работы с CSS переменными и применения тем к DOM. Это фреймворк-агностичный слой, который обеспечивает связь между темами и реальным DOM.

## Структура утилит

```
utils/
├── css-vars/
│   └── index.ts      # Основные функции для работы с CSS переменными
├── index.ts          # Единая точка экспорта для всех утилит
└── README.md         # Описание утилит
```

## Доступные функции

### 1. themeToCSSVars(theme)
Преобразует объект темы в объект CSS переменных. Каждое свойство темы становится CSS переменной с префиксом `--`.

```ts
import { themeToCSSVars } from '$stylist/design-system/utils';
import { lightTheme } from '$stylist/design-system/themes';

const cssVars = themeToCSSVars(lightTheme);
// Результат: { 'color-primary-500': '#3b82f6', 'spacing-md': '0.75rem', ... }
```

### 2. applyCSSVars(element, vars)
Применяет CSS переменные к указанному DOM элементу.

```ts
import { applyCSSVars } from '$stylist/design-system/utils';

const vars = { 'color-primary-500': '#3b82f6', 'spacing-md': '0.75rem' };
applyCSSVars(document.documentElement, vars);
```

### 3. removeCSSVars(element, varNames)
Удаляет указанные CSS переменные из DOM элемента.

```ts
import { removeCSSVars } from '$stylist/design-system/utils';

removeCSSVars(document.documentElement, ['color-primary-500', 'spacing-md']);
```

### 4. applyThemeToDOM(theme, element?)
Применяет тему ко всему DOM (по умолчанию к `document.documentElement`), устанавливает `data-theme` атрибут и CSS переменные.

```ts
import { applyThemeToDOM } from '$stylist/design-system/utils';
import { darkTheme } from '$stylist/design-system/themes';

applyThemeToDOM(darkTheme);
```

### 5. generateThemeCSS(theme, selector?)
Генерирует строку CSS с переменными для статической генерации (например, для SSR или встроенных стилей).

```ts
import { generateThemeCSS } from '$stylist/design-system/utils';
import { lightTheme } from '$stylist/design-system/themes';

const cssString = generateThemeCSS(lightTheme, ':root');
// Результат: ':root {\n  --color-primary-500: #3b82f6;\n  --spacing-md: 0.75rem;\n}'
```

## Использование

### Динамическое переключение тем
```ts
import { applyThemeToDOM } from '$stylist/design-system/utils';
import { lightTheme, darkTheme } from '$stylist/design-system/themes';

function toggleTheme(isDark: boolean) {
  const theme = isDark ? darkTheme : lightTheme;
  applyThemeToDOM(theme);
}
```

### Интеграция с провайдером тем
```ts
// Пример использования в провайдере тем (вне design-system)
class ThemeProvider {
  setTheme(theme) {
    applyThemeToDOM(theme);
    this.currentTheme = theme;
  }
}
```

### Генерация статических CSS
```ts
// Для SSR или генерации статических стилей
const lightCSS = generateThemeCSS(lightTheme);
const darkCSS = generateThemeCSS(darkTheme, '[data-theme="dark"]');
```

## Принципы работы

1. **Фреймворк-агностичность**: Все функции работают с DOM API напрямую
2. **Префиксация**: Все переменные получают префиксы в формате `--color-primary-500`
3. **Полная темизация**: Все значения из тем преобразуются в CSS переменные
4. **Поддержка атрибутов**: Установка атрибута `data-theme` для CSS селекторов

## Интеграция с другими слоями

- **Темы**: Утилиты принимают объекты тем в качестве входных данных
- **Токены**: Результаты преобразования зависят от значений в темах, которые используют токены
- **Интеракция**: CSS переменные становятся доступны для классов, определенных в слое взаимодействия

Утилиты обеспечивают мост между абстрактными определениями тем и реальным представлением в браузере.
