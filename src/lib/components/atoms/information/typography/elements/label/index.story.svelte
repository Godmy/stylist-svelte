<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Label from './index.svelte';
	import Input from '$stylist/components/atoms/interaction/input/field/input-field/index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'text', type: 'text', defaultValue: 'Demo label' }
	];
</script>

<Story
	id="atoms-label"
	title="Label"
	category="Atoms"
	component={Label}
	description="Form label for input fields"
	tags={['form', 'label', 'input']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="space-y-2">
			<Label
				htmlFor="demo-input"
				size={values.size}
				required={values.required}
				disabled={values.disabled}
				text={values.text}
			/>
			<Input id="demo-input" label="" placeholder="Enter value" disabled={values.disabled} />
		</div>
	{/snippet}
</Story>
