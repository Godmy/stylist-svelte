<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Overlay from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'loading', type: 'boolean', defaultValue: true },
		{ name: 'message', type: 'text', defaultValue: 'Loading visualization...' },
		{ name: 'spinnerSize', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={Overlay} title="Overlay" description="Blocking loading layer for charts, cards, and panels." {controls}>
	{#snippet children(values: any)}
		<div class="relative min-h-56 overflow-hidden rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
			<div class="space-y-2">
				<h3 class="text-base font-semibold text-[--color-text-primary]">Sales performance</h3>
				<p class="text-sm text-[--color-text-secondary]">Chart container placeholder used for overlay preview.</p>
			</div>
			<div class="mt-5 grid grid-cols-3 gap-3">
				<div class="h-24 rounded-lg bg-[--color-background-primary]"></div>
				<div class="h-24 rounded-lg bg-[--color-background-primary]"></div>
				<div class="h-24 rounded-lg bg-[--color-background-primary]"></div>
			</div>
			<Overlay loading={values.loading} message={values.message} spinnerSize={values.spinnerSize} />
		</div>
	{/snippet}
</Story>
