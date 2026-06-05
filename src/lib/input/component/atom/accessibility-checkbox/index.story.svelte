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
		<div class="rounded-lg bg-[var(--color-background-secondary)] p-8">
			<h2 class="mb-4 text-xl font-bold">AccessibilityCheckbox Story</h2>
			<AccessibilityCheckbox
				label={values.label}
				checked={values.checked}
				disabled={values.disabled}
			/>
		</div>
	{/snippet}
</Story>
