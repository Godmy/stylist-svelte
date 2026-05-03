<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Usage Limit Reached' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Upgrade to continue processing requests.' },
		{ name: 'variant', type: 'select', defaultValue: 'warning', options: ['info', 'success', 'warning', 'error'] }
	];
</script>

<Story title="AlertCard" description="Attention card with severity styling and actions." {controls}>
	{#snippet children(values: any)}
		<div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4">
			<div class="text-base font-semibold">{values.title}</div>
			{#if values.subtitle}
				<div class="mt-1 text-sm text-[var(--color-text-secondary)]">{values.subtitle}</div>
			{/if}
			<div class="mt-4 flex gap-2">
				<button type="button" class="rounded bg-[var(--color-primary-600)] px-3 py-1 text-[var(--color-text-inverse)]">Upgrade</button>
				<button type="button" class="rounded border border-[var(--color-border-primary)] px-3 py-1">Dismiss</button>
			</div>
		</div>
	{/snippet}
</Story>



