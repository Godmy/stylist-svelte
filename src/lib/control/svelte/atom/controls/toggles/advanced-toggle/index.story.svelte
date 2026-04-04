<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import AdvancedToggle from './index.svelte';

	type AdvancedToggleStoryProps = {
		label: string;
		checked: boolean;
		disabled: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
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
	{#snippet children(values: any)}
		{@const storyProps = values as AdvancedToggleStoryProps}
		<div class="rounded-lg bg-[var(--color-background-secondary)] p-8">
			<h2 class="mb-4 text-xl font-bold">AdvancedToggle Story</h2>
			<AdvancedToggle
				label={storyProps.label}
				checked={storyProps.checked}
				disabled={storyProps.disabled}
			/>
		</div>
	{/snippet}
</Story>








