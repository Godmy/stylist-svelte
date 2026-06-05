<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import PhoneNumberInput from './index.svelte';

	let value = $state('79999999999');

	const controls: InterfaceControllerSettings[] = [
		{ name: 'placeholder', type: 'text', defaultValue: '+7 (___) ___-__-__' },
		{ name: 'helpText', type: 'text', defaultValue: 'Supports Russian +7 format.' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	component={PhoneNumberInput}
	title="PhoneNumberInput"
	description="Formatted phone input with normalized value output."
	{controls}
>
	{#snippet children(values: any)}
		<div class="max-w-sm space-y-2">
			<PhoneNumberInput
				{value}
				placeholder={values.placeholder}
				helpText={values.helpText}
				disabled={values.disabled}
				required={values.required}
				error={values.error}
				onValueChange={(next) => (value = next)}
			/>
			<p class="text-sm text-[--color-text-secondary]">Raw value: {value}</p>
		</div>
	{/snippet}
</Story>
