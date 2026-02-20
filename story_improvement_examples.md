# Примеры доработки story-файлов для компонентов

## Введение

В этом документе представлены примеры того, как можно улучшить story-файлы для различных типов компонентов. Мы будем использовать компоненты, которые были идентифицированы как требующие доработки, и показать, как превратить простой story-файл в полнофункциональный пример с интерактивными элементами управления.

## Пример 1: Улучшение ColorSwatch

### До (простой story-файл):
```svelte
<script lang="ts">
	import ColorSwatch from './index.svelte';

	let color = '#0ea5e9';
	let size = 32;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">ColorSwatch</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Color</span>
			<input type="text" bind:value={color} class="w-28 rounded border p-1" />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Size</span>
			<input type="number" bind:value={size} class="w-20 rounded border p-1" />
		</label>
	</div>

	<div class="inline-flex items-center rounded border p-4">
		<ColorSwatch {color} {size} />
	</div>
</div>
```

### После (улучшенный story-файл):
```svelte
<script lang="ts">
	import ColorSwatch from './index.svelte';

	// Переменные для интерактивного управления
	let color = '#0ea5e9';
	let size = 32;
	let shape: 'circle' | 'square' = 'circle';
	let showTooltip: boolean = true;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">ColorSwatch</h1>

	<!-- Интерактивная демонстрация -->
	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Интерактивный пример</h2>
		<div class="flex flex-col gap-4 mb-4">
			<div class="inline-block">
				<ColorSwatch {color} {size} {shape} {showTooltip} />
			</div>
		</div>

		<div class="flex flex-wrap gap-4">
			<div>
				<label class="block text-sm mb-1">Цвет:</label>
				<input type="text" bind:value={color} class="w-32 rounded border p-1" />
			</div>
			<div>
				<label class="block text-sm mb-1">Размер:</label>
				<input type="number" bind:value={size} class="w-20 rounded border p-1" />
			</div>
			<div>
				<label class="block text-sm mb-1">Форма:</label>
				<select bind:value={shape} class="rounded border p-1">
					<option value="circle">Круг</option>
					<option value="square">Квадрат</option>
				</select>
			</div>
			<div class="flex items-end">
				<label class="flex items-center gap-1">
					<input type="checkbox" bind:checked={showTooltip} />
					Показать подсказку
				</label>
			</div>
		</div>
	</div>

	<!-- Демонстрация всех вариантов -->
	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Все формы</h2>
		<div class="flex flex-wrap items-center gap-4">
			<div class="flex flex-col items-center">
				<ColorSwatch color="#ef4444" size={40} shape="circle" />
				<span class="mt-1 text-xs">Круг</span>
			</div>
			<div class="flex flex-col items-center">
				<ColorSwatch color="#22c55e" size={40} shape="square" />
				<span class="mt-1 text-xs">Квадрат</span>
			</div>
		</div>
	</div>

	<!-- Демонстрация различных цветов -->
	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Популярные цвета</h2>
		<div class="flex flex-wrap gap-2">
			<ColorSwatch color="#ef4444" size={24} />
			<ColorSwatch color="#f97316" size={24} />
			<ColorSwatch color="#eab308" size={24} />
			<ColorSwatch color="#22c55e" size={24} />
			<ColorSwatch color="#3b82f6" size={24} />
			<ColorSwatch color="#8b5cf6" size={24} />
			<ColorSwatch color="#ec4899" size={24} />
		</div>
	</div>
</div>
```

## Пример 2: Улучшение Divider

### До (простой story-файл):
(предположим, что был простой пример без интерактивности)

### После (улучшенный story-файл):
```svelte
<script lang="ts">
	import Divider from './index.svelte';

	let orientation: 'horizontal' | 'vertical' = 'horizontal';
	let variant: 'solid' | 'dashed' | 'dotted' = 'solid';
	let align: 'start' | 'center' | 'end' = 'center';
	let text: string = 'или';
	let withText: boolean = false;
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Divider</h1>

	<!-- Интерактивная демонстрация -->
	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Интерактивный пример</h2>
		
		{#if orientation === 'horizontal'}
			<div class="py-4">
				<p>Текст над разделителем</p>
				{#if withText}
					<Divider {orientation} {variant} {align}>{text}</Divider>
				{:else}
					<Divider {orientation} {variant} />
				{/if}
				<p>Текст под разделителем</p>
			</div>
		{:else}
			<div class="flex items-center h-32">
				<span>Левая часть</span>
				{#if withText}
					<Divider {orientation} {variant} {align}>{text}</Divider>
				{:else}
					<Divider {orientation} {variant} />
				{/if}
				<span>Правая часть</span>
			</div>
		{/if}

		<div class="mt-4 flex flex-wrap gap-4">
			<div>
				<label class="block text-sm mb-1">Ориентация:</label>
				<select bind:value={orientation} class="rounded border p-1">
					<option value="horizontal">Горизонтальная</option>
					<option value="vertical">Вертикальная</option>
				</select>
			</div>
			<div>
				<label class="block text-sm mb-1">Вариант:</label>
				<select bind:value={variant} class="rounded border p-1">
					<option value="solid">Сплошная</option>
					<option value="dashed">Пунктирная</option>
					<option value="dotted">Точечная</option>
				</select>
			</div>
			{#if orientation === 'horizontal' && withText}
			<div>
				<label class="block text-sm mb-1">Выравнивание текста:</label>
				<select bind:value={align} class="rounded border p-1">
					<option value="start">Слева</option>
					<option value="center">По центру</option>
					<option value="end">Справа</option>
				</select>
			</div>
			{/if}
			<div>
				<label class="block text-sm mb-1">Текст:</label>
				<input type="text" bind:value={text} class="rounded border p-1" />
			</div>
			<div class="flex items-end">
				<label class="flex items-center gap-1">
					<input type="checkbox" bind:checked={withText} />
					С текстом
				</label>
			</div>
		</div>
	</div>

	<!-- Демонстрация всех вариантов -->
	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Все варианты</h2>
		<div class="space-y-4">
			<div>
				<p>Сплошная линия:</p>
				<Divider variant="solid" />
			</div>
			<div>
				<p>Пунктирная линия:</p>
				<Divider variant="dashed" />
			</div>
			<div>
				<p>Точечная линия:</p>
				<Divider variant="dotted" />
			</div>
		</div>
	</div>

	<!-- Демонстрация с текстом -->
	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">С текстом</h2>
		<div class="space-y-4">
			<Divider align="start">Начало</Divider>
			<Divider align="center">Центр</Divider>
			<Divider align="end">Конец</Divider>
		</div>
	</div>
</div>
```

## Пример 3: Улучшение Badge

### После (улучшенный story-файл):
```svelte
<script lang="ts">
	import Badge from './index.svelte';

	let variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' = 'primary';
	let size: 'sm' | 'md' | 'lg' = 'md';
	let rounded: boolean = true;
	let disabled: boolean = false;
	let label: string = 'Badge';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Badge</h1>

	<!-- Интерактивная демонстрация -->
	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Интерактивный пример</h2>
		<div class="flex flex-col gap-4 mb-4">
			<Badge {variant} {size} {rounded} {disabled}>
				{label}
			</Badge>
		</div>

		<div class="flex flex-wrap gap-4">
			<div>
				<label class="block text-sm mb-1">Вариант:</label>
				<select bind:value={variant} class="rounded border p-1">
					<option value="primary">Primary</option>
					<option value="secondary">Secondary</option>
					<option value="success">Success</option>
					<option value="warning">Warning</option>
					<option value="danger">Danger</option>
					<option value="info">Info</option>
				</select>
			</div>
			<div>
				<label class="block text-sm mb-1">Размер:</label>
				<select bind:value={size} class="rounded border p-1">
					<option value="sm">Маленький</option>
					<option value="md">Средний</option>
					<option value="lg">Большой</option>
				</select>
			</div>
			<div>
				<label class="block text-sm mb-1">Текст:</label>
				<input type="text" bind:value={label} class="rounded border p-1" />
			</div>
			<div class="flex items-end gap-4">
				<label class="flex items-center gap-1">
					<input type="checkbox" bind:checked={rounded} />
					Закругленный
				</label>
				<label class="flex items-center gap-1">
					<input type="checkbox" bind:checked={disabled} />
					Отключен
				</label>
			</div>
		</div>
	</div>

	<!-- Демонстрация всех вариантов -->
	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Все варианты</h2>
		<div class="flex flex-wrap gap-2">
			<Badge variant="primary">Primary</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="danger">Danger</Badge>
			<Badge variant="info">Info</Badge>
		</div>
	</div>

	<!-- Демонстрация всех размеров -->
	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Все размеры</h2>
		<div class="flex flex-wrap items-center gap-2">
			<Badge size="sm">Маленький</Badge>
			<Badge size="md">Средний</Badge>
			<Badge size="lg">Большой</Badge>
		</div>
	</div>
</div>
```

## Заключение

Эти примеры показывают, как можно улучшить story-файлы, добавив:

1. Интерактивные элементы управления для всех настраиваемых параметров
2. Демонстрацию всех вариантов компонента
3. Демонстрацию всех размеров компонента
4. Примеры реальных сценариев использования
5. Четкую структуру с заголовками и пояснениями

Такой подход значительно улучшает качество документации и делает компоненты более доступными для разработчиков.