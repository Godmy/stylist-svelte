<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import AccordionHeaderDouble from './index.svelte';

	let open: boolean = false;
	let disabled: boolean = false;
	let customClass: string = '';

	const controls: ControlConfig[] = [
		{
			name: 'open',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the accordion is open'
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the accordion header is disabled'
		}
	];
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">Accordion Header Double Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Interactive Accordion Header Double</h2>
		<div class="mb-4 flex items-center gap-4">
			<AccordionHeaderDouble value="test-value" open={open} disabled={disabled} class={customClass}>
				{#snippet children()}
					Click me to toggle accordion
				{/snippet}
			</AccordionHeaderDouble>

			<div class="flex gap-2">
				<button
					class={`rounded px-3 py-1 ${open ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
					onclick={() => (open = !open)}
				>
					{open ? 'Opened' : 'Closed'}
				</button>
				<button
					class={`rounded px-3 py-1 ${disabled ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
					onclick={() => (disabled = !disabled)}
				>
					{disabled ? 'Disabled' : 'Enabled'}
				</button>
			</div>
		</div>

		<div class="mt-4 flex flex-wrap gap-2">
			<div class="flex items-end">
				<label for="accordion-header-open" class="flex items-center gap-1">
					<input
						id="accordion-header-open"
						type="checkbox"
						bind:checked={open}
					/>
					Open
				</label>
			</div>

			<div class="flex items-end">
				<label for="accordion-header-disabled" class="flex items-center gap-1">
					<input
						id="accordion-header-disabled"
						type="checkbox"
						bind:checked={disabled}
					/>
					Disabled
				</label>
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
		<h2 class="text-md mb-2 font-semibold">State Variations</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Open State</h3>
				<AccordionHeaderDouble value="open-test" open={true} disabled={false}>
					{#snippet children()}
						Open Accordion Header
					{/snippet}
				</AccordionHeaderDouble>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Closed State</h3>
				<AccordionHeaderDouble value="closed-test" open={false} disabled={false}>
					{#snippet children()}
						Closed Accordion Header
					{/snippet}
				</AccordionHeaderDouble>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Disabled (Open)</h3>
				<AccordionHeaderDouble value="disabled-open-test" open={true} disabled={true}>
					{#snippet children()}
						Disabled Open Accordion Header
					{/snippet}
				</AccordionHeaderDouble>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Disabled (Closed)</h3>
				<AccordionHeaderDouble value="disabled-closed-test" open={false} disabled={true}>
					{#snippet children()}
						Disabled Closed Accordion Header
					{/snippet}
				</AccordionHeaderDouble>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">With Custom Content</h2>
		<div class="space-y-3">
			<AccordionHeaderDouble value="custom-content-1" open={false} disabled={false}>
				{#snippet children()}
					<div class="flex items-center gap-2">
						<span class="font-bold">Custom Content Header</span>
						<span class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">Label</span>
					</div>
				{/snippet}
			</AccordionHeaderDouble>

			<AccordionHeaderDouble value="custom-content-2" open={true} disabled={false}>
				{#snippet children()}
					<div class="flex w-full items-center justify-between">
						<span>Detailed Header with Status</span>
						<span class="rounded bg-green-100 px-2 py-1 text-xs text-green-800">Active</span>
					</div>
				{/snippet}
			</AccordionHeaderDouble>
		</div>
	</div>
</div>



