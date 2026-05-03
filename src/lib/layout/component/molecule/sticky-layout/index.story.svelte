<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import StickyLayout from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'headerShadow', type: 'boolean', defaultValue: true },
		{ name: 'footerShadow', type: 'boolean', defaultValue: true },
		{ name: 'fillHeight', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={StickyLayout} title="StickyLayout" description="Layout with sticky header/footer and scrollable content zone." {controls}>
	{#snippet children(values: any)}
		<StickyLayout
			headerShadow={values.headerShadow}
			footerShadow={values.footerShadow}
			fillHeight={values.fillHeight}
			class="h-64 border border-[--color-border-primary] rounded-lg overflow-hidden"
		>
			{#snippet header()}
				<div class="bg-[--color-background-primary] px-4 py-3 text-sm font-semibold border-b border-[--color-border-primary]">
					Sticky Header
				</div>
			{/snippet}
			{#snippet children()}
				<div class="p-4 space-y-3">
					{#each Array(10) as _, i}
						<div class="rounded border border-[--color-border-primary] p-2 text-sm">
							Scrollable item {i + 1}
						</div>
					{/each}
				</div>
			{/snippet}
			{#snippet footer()}
				<div class="bg-[--color-background-primary] px-4 py-3 text-sm border-t border-[--color-border-primary]">
					Sticky Footer
				</div>
			{/snippet}
		</StickyLayout>
	{/snippet}
</Story>
