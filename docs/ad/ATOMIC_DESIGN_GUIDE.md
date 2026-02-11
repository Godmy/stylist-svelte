# Справочник по Atomic Design для библиотеки stylist-svelte

## Введение

Atomic Design - это методология проектирования интерфейсов, разработанная Брэдом Фростом. Она позволяет создавать согласованные, масштабируемые и поддерживаемые интерфейсы, разбивая их на иерархические компоненты.

## Концепция Atomic Design

Atomic Design состоит из пяти уровней:

1. **Атомы (Atoms)** - Наименьшие строительные блоки интерфейса
2. **Молекулы (Molecules)** - Комбинации атомов
3. **Организмы (Organisms)** - Комбинации молекул и атомов
4. **Шаблоны (Templates)** - Структура страниц
5. **Страницы (Pages)** - Конкретные реализации шаблонов

В библиотеке stylist-svelte мы используем первые три уровня, поскольку библиотека предоставляет переиспользуемые компоненты, а не полные страницы.

## Уровни Atomic Design в stylist-svelte

### 1. Атомы (Atoms)

Атомы - это самые простые компоненты, которые не могут быть разделены на более мелкие. Они не зависят от других компонентов и могут использоваться в различных контекстах.

#### Характеристики:

- Простые и одноразовые
- Не имеют сложной логики
- Являются базовыми элементами интерфейса
- Могут иметь вариации (props)

#### Примеры в stylist-svelte:

```
Button (кнопка)
Input (поле ввода)
Textarea (многострочное поле ввода)
Select (выпадающий список)
Checkbox (флажок)
Spinner (индикатор загрузки)
Avatar (аватар)
Badge (бейдж)
Switch (переключатель)
Tag (тег)
Divider (разделитель)
Icon (иконка)
```

#### Структура файла:

```
src/lib/components/atoms/
├── Button.svelte
├── Input.svelte
├── Avatar.svelte
└── ...
```

#### Правила создания атомов:

- Должны иметь минимальный набор props
- Не должны иметь зависимости от других компонентов
- Должны быть максимально универсальными
- Должны следовать принципам доступности (a11y)
- Должны использовать TypeScript для типизации

#### Пример атома:

```svelte
<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type ButtonVariant =
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'ghost'
		| 'link';
	type ButtonSize = 'sm' | 'md' | 'lg';

	type Props = {
		variant?: ButtonVariant;
		size?: ButtonSize;
		disabled?: boolean;
		loading?: boolean;
		block?: boolean;
	} & HTMLButtonAttributes;

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		block = false,
		class: className = '',
		...restProps
	}: Props = $props();

	// Логика для определения CSS классов
	let variantClasses = $derived(
		{
			primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
			secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
			success: 'bg-green-600 hover:bg-green-700 text-white',
			warning: 'bg-yellow-600 hover:bg-yellow-700 text-white',
			danger: 'bg-red-600 hover:bg-red-700 text-white',
			ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300',
			link: 'bg-transparent hover:bg-gray-100 text-indigo-600 underline'
		}[variant]
	);

	let sizeClasses = $derived(
		{
			sm: 'px-3 py-1.5 text-sm',
			md: 'px-4 py-2 text-base',
			lg: 'px-6 py-3 text-lg'
		}[size]
	);

	let disabledClass = $derived(
		disabled || loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
	);

	let blockClass = $derived(block ? 'w-full' : '');

	let classes = $derived(
		`inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${blockClass} ${className}`
	);
</script>

<button {...restProps} class={classes}>
	{#if loading}
		<svg class="mr-2 -ml-1 h-4 w-4 animate-spin text-current" fill="none" viewBox="0 0 24 24">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
		Загрузка...
	{:else}
		<slot />
	{/if}
</button>
```

### 2. Молекулы (Molecules)

Молекулы - это небольшие группы атомов, работающие вместе как единое целое. Они представляют собой функциональные блоки, которые можно использовать в разных частях интерфейса.

#### Характеристики:

- Состоят из атомов
- Имеют конкретное функциональное назначение
- Имеют внутреннюю структуру
- Могут иметь логику взаимодействия
- Переиспользуемые компоненты

#### Примеры в stylist-svelte:

```
InputField (Input + Label + HelperText + Error) - поле ввода с меткой и сообщениями об ошибках
SearchBar (Input + Button) - строка поиска
EmptyState (Icon + Title + Description + Button) - сообщение о пустом состоянии
FormFieldGroup (Label + InputField + Error messages) - группа полей формы
FormSection (FieldGroup + Divider + Description) - раздел формы
ButtonGroup - группа кнопок
InputGroup - группа связанных полей ввода
Rating - компонент рейтинга
```

#### Структура файла:

```
src/lib/components/molecules/
├── InputField.svelte
├── SearchBar.svelte
├── EmptyState.svelte
└── ...
```

#### Правила создания молекул:

- Должны использовать только атомы и другие молекулы
- Не должны иметь зависимости от организмов
- Должны быть независимыми от контекста
- Должны быть стилистически согласованными
- Должны иметь минимально необходимый API

#### Пример молекулы:

```svelte
<script lang="ts">
	import { Input } from '../atoms';
	import type { InputProps } from '../atoms/Input.svelte';

	type Props = InputProps & {
		helperText?: string;
	};

	let { helperText, errors = [], ...rest }: Props = $props();
</script>

<div class="space-y-1">
	<Input {...rest} {errors} />

	{#if helperText && errors.length === 0}
		<p class="text-xs text-gray-500">{helperText}</p>
	{/if}
</div>
```

### 3. Организмы (Organisms)

Организмы - это сложные структуры, состоящие из атомов, молекул и других организмов. Они представляют собой крупные блоки интерфейса, часто уникальные для конкретного контекста.

#### Характеристики:

- Состоят из атомов, молекул и других организмов
- Имеют сложную структуру и логику
- Часто уникальны для конкретного контекста
- Могут использовать сторы и внешние данные
- Представляют собой значимые части интерфейса

#### Примеры в stylist-svelte:

```
ChatWindow (ChatHeader + MessageList + MessageInput) - окно чата
KanbanBoard (KanbanColumn[] + AddColumnButton) - доска Kanban
Modal (Overlay + Header + Body + Footer) - модальное окно
Table (TableHeader + TableBody + TableRow[] + TableCell[]) - таблица
Pagination - пагинация
Breadcrumbs - хлебные крошки
MessageList (MessageItem[]) - список сообщений
DataTable - расширенная таблица данных
SchemaExplorer - обозреватель схемы
AdvancedGraphQLVisualizer - визуализатор GraphQL запросов
```

#### Структура файла:

```
src/lib/components/organisms/
├── ChatWindow.svelte
├── KanbanBoard.svelte
├── Modal.svelte
└── ...
```

#### Правила создания организмов:

- Могут использовать атомы, молекулы и другие организмы
- Могут иметь сложную внутреннюю логику
- Могут использовать сторы и внешние данные
- Должны быть максимально самодостаточными
- Должны использовать события для общения с родителями

#### Пример организма:

```svelte
<script lang="ts">
	import type { Chat, User, Message } from '$stylist/types';
	import { MessageList, MessageInput, ChatHeader } from '../organisms';

	// Props
	let {
		chat,
		currentUser,
		messages = []
	}: {
		chat: Chat;
		currentUser: User;
		messages: Message[];
	} = $props();

	// Events
	const dispatch = createEventDispatcher<{
		messageSend: { content: string; chatId: string };
		messageReaction: { messageId: string; reaction: string };
		call: { chat: Chat };
		videoCall: { chat: Chat };
		chatInfo: { chat: Chat };
	}>();

	// Обработка отправки сообщения
	function handleMessageSend(content: string) {
		dispatch('messageSend', {
			content,
			chatId: chat.id
		});
	}

	// Обработка реакции на сообщение
	function handleMessageReaction(messageId: string, reaction: string) {
		dispatch('messageReaction', { messageId, reaction });
	}

	// Обработка вызова
	function handleCall() {
		dispatch('call', { chat });
	}

	// Обработка видеовызова
	function handleVideoCall() {
		dispatch('videoCall', { chat });
	}

	// Обработка информации о чате
	function handleChatInfo() {
		dispatch('chatInfo', { chat });
	}
</script>

<div class="chat-window">
	<ChatHeader
		{chat}
		{currentUser}
		oncall={handleCall}
		onvideoCall={handleVideoCall}
		oninfo={handleChatInfo}
	/>

	<div class="chat-messages">
		<MessageList
			{messages}
			{currentUser}
			onmessageReaction={(e) => handleMessageReaction(e.detail.message.id, e.detail.reaction)}
		/>
	</div>

	<div class="chat-input">
		<MessageInput onsend={(e) => handleMessageSend(e.detail.content)} />
	</div>
</div>

<style>
	.chat-window {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		background-color: #f0f4f8;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
	}

	.chat-messages {
		flex: 1;
		overflow-y: auto;
	}

	.chat-input {
		border-top: 1px solid #e2e8f0;
		background-color: white;
	}
</style>
```

## Правила именования файлов

### Правила:

1. Используйте PascalCase для имен компонентов
2. Добавляйте `.svelte` расширение для компонентов
3. Добавляйте `.story.svelte` расширение для историй Histoire
4. Добавляйте `.test.ts` или `.spec.ts` для тестов

### Примеры:

```
Button.svelte          # Компонент атома
Button.story.svelte    # История для компонента Button
InputField.svelte      # Компонент молекулы
InputField.story.svelte # История для компонента InputField
ChatWindow.svelte      # Компонент организма
ChatWindow.story.svelte # История для компонента ChatWindow
```

## Структура директорий

```
src/lib/
├── components/
│   ├── atoms/          # Атомы - базовые компоненты
│   │   ├── Button.svelte
│   │   ├── Input.svelte
│   │   └── ...
│   ├── molecules/      # Молекулы - комбинации атомов
│   │   ├── InputField.svelte
│   │   ├── SearchBar.svelte
│   │   └── ...
│   ├── organisms/      # Организмы - сложные компоненты
│   │   ├── ChatWindow.svelte
│   │   ├── Modal.svelte
│   │   └── ...
│   └── index.ts        # Экспорт всех компонентов
├── types/              # Определения типов
├── utils/              # Вспомогательные функции
├── stores/             # Svelte сторы
└── index.ts            # Главный файл экспорта библиотеки
```

## Система типов

Все компоненты должны использовать TypeScript для определения типов:

```typescript
// В атомах
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = {
	variant?: ButtonVariant;
	size?: ButtonSize;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
} & HTMLButtonAttributes;
```

```typescript
// В молекулах
type Props = InputProps & {
	helperText?: string;
};
```

```typescript
// В организмах
let {
	chat,
	currentUser,
	messages = []
}: {
	chat: Chat;
	currentUser: User;
	messages: Message[];
} = $props();
```

## Доступность (a11y)

Все компоненты должны быть доступными:

1. Использовать семантические HTML теги
2. Добавлять ARIA-атрибуты при необходимости
3. Обеспечивать навигацию с клавиатуры
4. Поддерживать контрастность цветов

## Тестирование

Каждый компонент должен иметь соответствующие тесты:

1. **Атомы**: Юнит-тесты для проверки различных props
2. **Молекулы**: Компонентные тесты для проверки взаимодействия атомов
3. **Организмы**: Интеграционные тесты для проверки сложной логики

## Документация с Histoire

Каждый компонент должен иметь историю в Histoire:

```
Button.story.svelte
InputField.story.svelte
ChatWindow.story.svelte
```

Истории должны включать:

- Основные варианты использования
- Различные состояния компонента
- Интерактивные примеры
- Документацию API

## Экспорт компонентов

Каждый уровень имеет свой `index.ts` файл для экспорта:

```typescript
// src/lib/components/atoms/index.ts
export { default as Button } from './Button.svelte';
export { default as Input } from './Input.svelte';
// ...

// src/lib/components/molecules/index.ts
export { default as InputField } from './InputField.svelte';
export { default as SearchBar } from './SearchBar.svelte';
// ...

// src/lib/components/organisms/index.ts
export { default as ChatWindow } from './ChatWindow.svelte';
export { default as Modal } from './Modal.svelte';
// ...

// src/lib/index.ts
export * from './components/atoms';
export * from './components/molecules';
export * from './components/organisms';
```

## Рекомендации по разработке

1. **Начинайте с атомов**: Создавайте сначала базовые компоненты
2. **Реиспользуйте**: Повторное использование компонентов повышает согласованность
3. **Думайте масштабируемо**: Создавайте компоненты, которые легко масштабировать
4. **Следите за стилями**: Используйте общую систему стилей (например, Tailwind CSS)
5. **Документируйте**: Добавляйте JSDoc для пропсов и методов
6. **Тестируйте**: Пишите тесты для каждого уровня

## Примеры лучших практик

### Хороший атом (Button):

- Управляет только своим состоянием и внешним видом
- Не зависит от других компонентов
- Имеет ограниченный набор props
- Следует принципам доступности

### Хорошая молекула (InputField):

- Комбинирует Input и Label
- Управляет валидацией и отображением ошибок
- Использует только атомы

### Хороший организм (ChatWindow):

- Состоит из нескольких молекул и атомов
- Управляет сложной логикой чата
- Использует события для коммуникации
