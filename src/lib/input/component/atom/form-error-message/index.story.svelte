<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import FormErrorMessage from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'Email is required.' },
		{ name: 'visible', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={FormErrorMessage} title="FormErrorMessage" description="Validation message shown below invalid fields." {controls}>
	{#snippet children(values: any)}
		<FormErrorMessage text={values.text} visible={values.visible} />
	{/snippet}
</Story>



