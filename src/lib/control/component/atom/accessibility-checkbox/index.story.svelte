<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AccessibilityCheckbox from './index.svelte';

	type AccessibilityCheckboxStoryProps = {
		label: string;
		checked: boolean;
		disabled: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Accept terms and conditions'
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
	id="molecules-accessibility-checkbox"
	title="AccessibilityCheckbox"
	component={AccessibilityCheckbox}
	category="Molecules"
	description="An accessible checkbox component with proper labeling."
	tags={['form', 'input', 'accessibility']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h2 class="_c2">AccessibilityCheckbox Story</h2>
			<AccessibilityCheckbox
				label={values.label}
				checked={values.checked}
				disabled={values.disabled}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
	}
</style>
