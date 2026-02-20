# Рекомендации по улучшению story-файлов в библиотеке stylist-svelte

## Обзор

В результате анализа 449 story-файлов было выявлено, что 345 из них (около 77%) требуют доработки в части документации и примеров использования. 

## Основные проблемы

1. **Отсутствие интерактивных элементов управления** - многие story-файлы не содержат элементы для изменения пропсов компонента в реальном времени
2. **Отсутствие демонстрации всех вариантов компонента** - не показываются различные варианты (variants), размеры (sizes) и состояния компонентов
3. **Недостаточная документация** - отсутствует информация о пропсах, событиях и возможностях компонентов

## Рекомендации по улучшению

### 1. Добавление интерактивных элементов управления

Каждый story-файл должен содержать элементы управления для изменения основных пропсов компонента:

```svelte
<script lang="ts">
  import MyComponent from './index.svelte';

  // Определение переменных для управления
  let variant: 'primary' | 'secondary' | 'success' = 'primary';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let disabled: boolean = false;
</script>

<!-- Интерактивные элементы управления -->
<div class="flex flex-wrap gap-4 mb-4">
  <div>
    <label>Variant: 
      <select bind:value={variant}>
        <option value="primary">Primary</option>
        <option value="secondary">Secondary</option>
        <option value="success">Success</option>
      </select>
    </label>
  </div>
  <div>
    <label>Size: 
      <select bind:value={size}>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </label>
  </div>
  <div>
    <label>
      <input type="checkbox" bind:checked={disabled} />
      Disabled
    </label>
  </div>
</div>

<!-- Компонент с привязанными переменными -->
<MyComponent {variant} {size} {disabled}>
  Sample content
</MyComponent>
```

### 2. Демонстрация всех вариантов и размеров

Добавьте разделы, показывающие все доступные варианты и размеры компонента:

```svelte
<!-- Демонстрация всех вариантов -->
<div class="mb-6">
  <h3 class="text-lg font-semibold mb-2">Все варианты</h3>
  <div class="flex flex-wrap gap-2">
    <MyComponent variant="primary">Primary</MyComponent>
    <MyComponent variant="secondary">Secondary</MyComponent>
    <MyComponent variant="success">Success</MyComponent>
    <MyComponent variant="warning">Warning</MyComponent>
    <MyComponent variant="danger">Danger</MyComponent>
  </div>
</div>

<!-- Демонстрация всех размеров -->
<div class="mb-6">
  <h3 class="text-lg font-semibold mb-2">Все размеры</h3>
  <div class="flex flex-wrap items-center gap-2">
    <MyComponent size="sm">Small</MyComponent>
    <MyComponent size="md">Medium</MyComponent>
    <MyComponent size="lg">Large</MyComponent>
  </div>
</div>
```

### 3. Примеры сложных сценариев использования

Включите примеры использования компонента в реальных сценариях:

```svelte
<!-- Пример использования в форме -->
<div class="mb-6">
  <h3 class="text-lg font-semibold mb-2">Использование в форме</h3>
  <form class="space-y-4">
    <div>
      <label class="block mb-1">Имя пользователя</label>
      <MyComponent placeholder="Введите имя" />
    </div>
    <div>
      <label class="block mb-1">Пароль</label>
      <MyComponent type="password" placeholder="Введите пароль" />
    </div>
    <MyComponent type="submit" variant="primary">Отправить</MyComponent>
  </form>
</div>
```

## Приоритетные компоненты для улучшения

Следующие категории компонентов должны быть улучшены в первую очередь:

1. **Часто используемые компоненты** (кнопки, поля ввода, чекбоксы, переключатели)
2. **Компоненты с множеством вариантов** (карточки, панели, таблицы)
3. **Комплексные компоненты** (формы, диалоги, навигация)

## Шаблон для нового story-файла

```svelte
<script lang="ts">
  import MyComponent from './index.svelte';

  // Переменные для интерактивного управления
  let prop1: string = 'default';
  let prop2: number = 0;
  let prop3: boolean = false;
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">MyComponent</h1>

  <!-- Интерактивная демонстрация -->
  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Интерактивный пример</h2>
    <div class="flex flex-col gap-4 mb-4">
      <MyComponent {prop1} {prop2} {prop3}>
        Интерактивный контент
      </MyComponent>
    </div>

    <div class="flex flex-wrap gap-4">
      <!-- Элементы управления -->
      <div>
        <label class="block text-sm mb-1">Prop1:</label>
        <input type="text" bind:value={prop1} class="rounded border p-1" />
      </div>
      <div>
        <label class="block text-sm mb-1">Prop2:</label>
        <input type="number" bind:value={prop2} class="rounded border p-1" />
      </div>
      <div class="flex items-end">
        <label class="flex items-center gap-1">
          <input type="checkbox" bind:checked={prop3} />
          Prop3
        </label>
      </div>
    </div>
  </div>

  <!-- Демонстрация всех вариантов -->
  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Все варианты</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Примеры всех вариантов компонента -->
    </div>
  </div>

  <!-- Примеры использования -->
  <div class="rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Примеры использования</h2>
    <!-- Реальные сценарии использования -->
  </div>
</div>
```

## Заключение

Улучшение story-файлов значительно повысит качество документации библиотеки и упростит использование компонентов для разработчиков. Рекомендуется внедрять эти изменения поэтапно, начиная с наиболее часто используемых компонентов.