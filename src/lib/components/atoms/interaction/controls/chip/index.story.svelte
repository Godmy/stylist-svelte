<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Chip from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Example chip' },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'closable', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="atoms-chip"
	title="Chip"
	category="Atoms"
	component={Chip}
	description="Compact component for displaying short labels or tags"
	tags={['tag', 'label', 'badge', 'chip']}
	{controls}
>
	{#snippet children(values: any)}
		<Chip
			label={values.label}
			variant={values.variant}
			size={values.size}
			closable={values.closable}
			disabled={values.disabled}
		/>
	{/snippet}
</Story>
