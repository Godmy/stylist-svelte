<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import CharacterCount from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'current', type: 'number', defaultValue: 40, min: 0, max: 300, step: 1 },
		{ name: 'max', type: 'number', defaultValue: 120, min: 1, max: 500, step: 1 },
		{ name: 'showPercentage', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'warning', 'danger'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={CharacterCount} title="CharactersCount" description="Character progress indicator for text fields." {controls}>
	{#snippet children(values: any)}
		<CharacterCount
			current={values.current}
			max={values.max}
			showPercentage={values.showPercentage}
			variant={values.variant}
			size={values.size}
		/>
	{/snippet}
</Story>
