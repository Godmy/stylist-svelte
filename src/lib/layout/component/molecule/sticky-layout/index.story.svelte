<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import StickyLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'headerShadow', type: 'boolean', defaultValue: true },
		{ name: 'footerShadow', type: 'boolean', defaultValue: true },
		{ name: 'fillHeight', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={StickyLayout}
	title="StickyLayout"
	description="Layout with sticky header/footer and scrollable content zone."
	{controls}
>
	{#snippet children(values: any)}
		<StickyLayout
			headerShadow={values.headerShadow}
			footerShadow={values.footerShadow}
			fillHeight={values.fillHeight}
			class="h-64 overflow-hidden rounded-lg border border-[--color-border-primary]"
		>
			{#snippet header()}
				<div
					class="border-b border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3 text-sm font-semibold"
				>
					Sticky Header
				</div>
			{/snippet}
			{#snippet children()}
				<div class="space-y-3 p-4">
					{#each Array(10) as _, i}
						<div class="rounded border border-[--color-border-primary] p-2 text-sm">
							Scrollable item {i + 1}
						</div>
					{/each}
				</div>
			{/snippet}
			{#snippet footer()}
				<div
					class="border-t border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3 text-sm"
				>
					Sticky Footer
				</div>
			{/snippet}
		</StickyLayout>
	{/snippet}
</Story>
