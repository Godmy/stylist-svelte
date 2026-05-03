<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import FormHelperText from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'Use 8 or more characters.' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'info', 'success', 'warning', 'danger'] }
	];
</script>

<Story component={FormHelperText} title="FormHelperText" description="Supportive hint text for form controls." {controls}>
	{#snippet children(values: any)}
		<FormHelperText text={values.text} variant={values.variant} />
	{/snippet}
</Story>



