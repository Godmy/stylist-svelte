<script lang="ts">
	import AccordionHeader from './AccordionHeader.svelte';

	let isOpen: boolean = false;
	let isDisabled: boolean = false;
	let customClass: string = '';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">AccordionHeader Component</h1>

	<div class="mb-6 rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">Controlled Accordion Header</h2>
		<div class="mb-4 flex items-center gap-4">
			<AccordionHeader value="test-value" open={isOpen} disabled={isDisabled} class={customClass}>
				{#snippet children()}
					Click me to toggle accordion
				{/snippet}
			</AccordionHeader>

			<div class="flex gap-2">
				<button
					class={`rounded px-3 py-1 ${isOpen ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
					onclick={() => (isOpen = !isOpen)}
				>
					{isOpen ? 'Opened' : 'Closed'}
				</button>
				<button
					class={`rounded px-3 py-1 ${isDisabled ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
					onclick={() => (isDisabled = !isDisabled)}
				>
					{isDisabled ? 'Disabled' : 'Enabled'}
				</button>
			</div>
		</div>

		<div class="space-y-3">
			<div class="flex items-center gap-2">
				<label class="text-sm" for="customClassInput">Custom Class:</label>
				<input
					id="customClassInput"
					type="text"
					class="rounded border p-1 text-sm"
					bind:value={customClass}
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
				<AccordionHeader value="open-test" open={true} disabled={false}>
					{#snippet children()}
						Open Accordion Header
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Closed State</h3>
				<AccordionHeader value="closed-test" open={false} disabled={false}>
					{#snippet children()}
						Closed Accordion Header
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Disabled (Open)</h3>
				<AccordionHeader value="disabled-open-test" open={true} disabled={true}>
					{#snippet children()}
						Disabled Open Accordion Header
					{/snippet}
				</AccordionHeader>
			</div>
			<div class="rounded border p-3">
				<h3 class="mb-2 font-medium">Disabled (Closed)</h3>
				<AccordionHeader value="disabled-closed-test" open={false} disabled={true}>
					{#snippet children()}
						Disabled Closed Accordion Header
					{/snippet}
				</AccordionHeader>
			</div>
		</div>
	</div>

	<div class="rounded border p-4">
		<h2 class="text-md mb-2 font-semibold">With Custom Content</h2>
		<div class="space-y-3">
			<AccordionHeader value="custom-content-1" open={false} disabled={false}>
				{#snippet children()}
					<div class="flex items-center gap-2">
						<span class="font-bold">Custom Content Header</span>
						<span class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">Label</span>
					</div>
				{/snippet}
			</AccordionHeader>

			<AccordionHeader value="custom-content-2" open={true} disabled={false}>
				{#snippet children()}
					<div class="flex w-full items-center justify-between">
						<span>Detailed Header with Status</span>
						<span class="rounded bg-green-100 px-2 py-1 text-xs text-green-800">Active</span>
					</div>
				{/snippet}
			</AccordionHeader>
		</div>
	</div>
</div>
