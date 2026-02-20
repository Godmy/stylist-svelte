<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import AccordionHeader from './index.svelte';

	let header: string = 'Accordion Header';
	let chevronSize: 'sm' | 'md' | 'lg' = 'md';
	let padding: 'sm' | 'md' | 'lg' = 'md';
	let customClass: string = '';

	const controls: ControlConfig[] = [
		{
			name: 'header',
			type: 'text',
			defaultValue: 'Accordion Header',
			description: 'The header text'
		},
		{
			name: 'chevronSize',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			description: 'Size of the chevron icon'
		},
		{
			name: 'padding',
			type: 'select',
			defaultValue: 'md',
			options: ['sm', 'md', 'lg'],
			description: 'Padding size'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Accordion Header Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Accordion Header</h2>
		<div class="mb-4">
			<AccordionHeader value="test-value" {header} {chevronSize} {padding} class={customClass}>
				{#snippet children()}
					{header}
				{/snippet}
			</AccordionHeader>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div>
				<label for="accordion-header-text" class="mb-1 block text-sm">Header Text:</label>
				<input
					id="accordion-header-text"
					type="text"
					bind:value={header}
					class="rounded border p-1"
				/>
			</div>

			<div>
				<label for="accordion-header-chevron-size" class="mb-1 block text-sm">Chevron Size:</label>
				<select
					id="accordion-header-chevron-size"
					bind:value={chevronSize}
					class="rounded border p-1"
				>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div>
				<label for="accordion-header-padding" class="mb-1 block text-sm">Padding:</label>
				<select
					id="accordion-header-padding"
					bind:value={padding}
					class="rounded border p-1"
				>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="lg">Large</option>
				</select>
			</div>

			<div>
				<label for="accordion-header-class" class="mb-1 block text-sm">Custom Class:</label>
				<input
					id="accordion-header-class"
					type="text"
					bind:value={customClass}
					class="rounded border p-1"
					placeholder="Add custom CSS class"
				/>
			</div>
		</div>
	</div>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Chevron Sizes</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Small Chevron</h3>
				<AccordionHeader value="chevron-sm" chevronSize="sm" padding="md">
					{#snippet children()}
						Small Chevron
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Medium Chevron</h3>
				<AccordionHeader value="chevron-md" chevronSize="md" padding="md">
					{#snippet children()}
						Medium Chevron
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Large Chevron</h3>
				<AccordionHeader value="chevron-lg" chevronSize="lg" padding="md">
					{#snippet children()}
						Large Chevron
					{/snippet}
				</AccordionHeader>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Padding Variations</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Small Padding</h3>
				<AccordionHeader value="padding-sm" chevronSize="md" padding="sm">
					{#snippet children()}
						Small Padding
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Medium Padding</h3>
				<AccordionHeader value="padding-md" chevronSize="md" padding="md">
					{#snippet children()}
						Medium Padding
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Large Padding</h3>
				<AccordionHeader value="padding-lg" chevronSize="md" padding="lg">
					{#snippet children()}
						Large Padding
					{/snippet}
				</AccordionHeader>
			</div>
		</div>
	</div>
</div>



