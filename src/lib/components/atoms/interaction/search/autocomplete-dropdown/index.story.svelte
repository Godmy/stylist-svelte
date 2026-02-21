<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import AutocompleteDropdown from './index.svelte';

	let value = $state('');

	const options = [
		{ label: 'Design', value: 'design' },
		{ label: 'Development', value: 'development' },
		{ label: 'Marketing', value: 'marketing' },
		{ label: 'Operations', value: 'operations' }
	];

	const controls: ControlConfig[] = [
		{ name: 'placeholder', type: 'text', defaultValue: 'Select a team...' }
	];
</script>

<Story component={AutocompleteDropdown} title="AutocompleteDropdown" description="Dropdown selector with option list and controlled value." {controls}>
	{#snippet children(values: any)}
		<div class="max-w-sm space-y-2">
			<AutocompleteDropdown options={options} value={value} placeholder={values.placeholder} onValueChange={(next) => (value = next)} />
			<p class="text-sm text-[--color-text-secondary]">Selected: {value || 'none'}</p>
		</div>
	{/snippet}
</Story>
