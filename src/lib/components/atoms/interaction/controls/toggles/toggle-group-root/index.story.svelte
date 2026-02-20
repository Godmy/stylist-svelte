<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	import ToggleGroupRoot from './index.svelte';
	import ToggleGroupItem from '../toggle-group-item/index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'type', type: 'select', options: ['single', 'multiple'], defaultValue: 'single' },
			{ name: 'disabled', type: 'boolean', defaultValue: false }
		]
	}: {
		id: string;
		title: string;
		description: string;
		controls: ControlConfig[];
	} = $props();

	// State for tracking toggle group values
	let singleValue: string | null = $state(null);
	let multipleValue: string[] = $state([]);

	// Function to handle value change
	function handleValueChange(e: CustomEvent<{ value: string | string[] | null }>) {
		const newValue = e.detail.value;
		if (Array.isArray(newValue)) {
			multipleValue = newValue as string[];
		} else {
			singleValue = newValue as string | null;
		}
		console.log('Toggle group value changed:', newValue);
	}
</script>

<Story {id} {title} {description} component={ToggleGroupRoot} category="Molecules" {controls}>
	{#snippet children(props)}
		{@const type = props.type === 'multiple' ? 'multiple' : 'single'}
		{@const disabled = typeof props.disabled === 'boolean' ? props.disabled : false}
		<section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm"
			>
				<p class="text-sm font-semibold tracking-wide text-[--color-text-secondary] uppercase">
					Primary Toggle Group Root Example
				</p>
				<p class="mt-1 text-[--color-text-primary]">
					Toggle group root that manages the state for its items.
				</p>

				<div class="mt-6 space-y-8">
					<!-- Single Selection Toggle Group -->
					<div>
						<p class="mb-3 text-sm font-medium text-[--color-text-primary]">Single Selection:</p>
						<ToggleGroupRoot
							{type}
							{disabled}
							onValueChange={handleValueChange}
						>
							<ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
							<ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
							<ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
						</ToggleGroupRoot>
						<p class="mt-2 text-xs text-[--color-text-secondary]">
							Selected: {singleValue || 'None'}
						</p>
					</div>

					<!-- Multiple Selection Toggle Group -->
					<div>
						<p class="mb-3 text-sm font-medium text-[--color-text-primary]">Multiple Selection:</p>
						<ToggleGroupRoot
							type="multiple"
							{disabled}
							onValueChange={handleValueChange}
						>
							<ToggleGroupItem value="multi1">Multi 1</ToggleGroupItem>
							<ToggleGroupItem value="multi2">Multi 2</ToggleGroupItem>
							<ToggleGroupItem value="multi3">Multi 3</ToggleGroupItem>
							<ToggleGroupItem value="multi4">Multi 4</ToggleGroupItem>
						</ToggleGroupRoot>
						<p class="mt-2 text-xs text-[--color-text-secondary]">
							Selected: {multipleValue.length > 0 ? multipleValue.join(', ') : 'None'}
						</p>
					</div>
				</div>
			</div>

			<div
				class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm"
			>
				<h3 class="text-base font-semibold text-[--color-text-primary]">
					Toggle Group Root Variations
				</h3>
				<p class="text-sm text-[--color-text-secondary]">
					Different configurations and use cases for toggle group root.
				</p>

				<div class="mt-5 space-y-4">
					<article
						class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4"
					>
						<p class="mb-2 text-sm font-semibold text-[--color-text-primary]">Text Formatting</p>
						<ToggleGroupRoot type="multiple">
							<ToggleGroupItem value="bold">
								<span class="font-bold">B</span>
							</ToggleGroupItem>
							<ToggleGroupItem value="italic">
								<span class="italic">I</span>
							</ToggleGroupItem>
							<ToggleGroupItem value="underline">
								<span class="underline">U</span>
							</ToggleGroupItem>
						</ToggleGroupRoot>
					</article>

					<article
						class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4"
					>
						<p class="mb-2 text-sm font-semibold text-[--color-text-primary]">View Options</p>
						<ToggleGroupRoot type="single">
							<ToggleGroupItem value="list">List</ToggleGroupItem>
							<ToggleGroupItem value="grid">Grid</ToggleGroupItem>
							<ToggleGroupItem value="table">Table</ToggleGroupItem>
						</ToggleGroupRoot>
					</article>

					<article
						class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4"
					>
						<p class="mb-2 text-sm font-semibold text-[--color-text-primary]">Size Options</p>
						<ToggleGroupRoot type="single">
							<ToggleGroupItem value="s">S</ToggleGroupItem>
							<ToggleGroupItem value="m">M</ToggleGroupItem>
							<ToggleGroupItem value="l">L</ToggleGroupItem>
							<ToggleGroupItem value="xl">XL</ToggleGroupItem>
						</ToggleGroupRoot>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>





