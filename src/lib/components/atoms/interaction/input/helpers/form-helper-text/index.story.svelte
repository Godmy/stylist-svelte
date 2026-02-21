<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import FormHelperText from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'text', type: 'text', defaultValue: 'Use 8 or more characters.' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'info', 'success', 'warning', 'danger'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={FormHelperText} title="FormHelperText" description="Supportive hint text for form controls." {controls}>
	{#snippet children(values: any)}
		<FormHelperText text={values.text} variant={values.variant} size={values.size} />
	{/snippet}
</Story>
