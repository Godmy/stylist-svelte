<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Tooltip from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'content', type: 'text', defaultValue: 'Helpful contextual info' },
		{ name: 'placement', type: 'select', defaultValue: 'top', options: ['top', 'bottom', 'left', 'right'] },
		{ name: 'trigger', type: 'select', defaultValue: 'hover', options: ['hover', 'click', 'focus'] },
		{ name: 'variant', type: 'select', defaultValue: 'with-arrow', options: ['default', 'with-arrow', 'simple'] },
		{ name: 'delay', type: 'number', defaultValue: 0, min: 0, max: 1200, step: 50 },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={Tooltip} title="Tooltip" description="Context helper with trigger, placement, and variant controls." {controls}>
	{#snippet children(values: any)}
		<div class="flex min-h-40 items-center justify-center rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-8">
			<Tooltip
				content={values.content}
				placement={values.placement}
				trigger={values.trigger}
				variant={values.variant}
				delay={values.delay}
				disabled={values.disabled}
			>
				{#snippet children()}
					<button class="rounded-lg bg-[--color-primary-600] px-4 py-2 text-sm font-semibold text-white">Target element</button>
				{/snippet}
			</Tooltip>
		</div>
	{/snippet}
</Story>
