<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import AdvancedToggle from './index.svelte';

	type AdvancedToggleStoryProps = {
		label: string;
		checked: boolean;
		disabled: boolean;
	};

	const controls: ControlConfig[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Enable notifications'
		},
		{
			name: 'checked',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story
	id="molecules-advanced-toggle"
	title="AdvancedToggle"
	component={AdvancedToggle}
	category="Molecules"
	description="An advanced toggle switch component."
	tags={['form', 'input', 'switch']}
	{controls}
>
	{#snippet children(props: AdvancedToggleStoryProps)}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">AdvancedToggle Story</h2>
			<AdvancedToggle label={props.label} checked={props.checked} disabled={props.disabled} />
		</div>
	{/snippet}
</Story>
