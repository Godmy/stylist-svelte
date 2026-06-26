<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import InputError from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'Email is required.' },
		{ name: 'visible', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	component={InputError}
	title="InputError"
	description="Validation message shown below invalid input fields."
	{controls}
>
	{#snippet children(values: any)}
		<InputError text={values.text} visible={values.visible} />
	{/snippet}
</Story>
