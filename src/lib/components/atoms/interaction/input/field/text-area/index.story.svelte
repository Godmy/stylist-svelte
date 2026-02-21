<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import TextArea from './index.svelte';

	let value = $state('');

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Message' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Type your message...' },
		{ name: 'rows', type: 'number', defaultValue: 4, min: 2, max: 10, step: 1 },
		{ name: 'maxlength', type: 'number', defaultValue: 160, min: 20, max: 1000, step: 10 },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={TextArea} title="TextArea" description="Multiline input with counter and error display." {controls}>
	{#snippet children(values: any)}
		<TextArea
			id="story-textarea"
			label={values.label}
			placeholder={values.placeholder}
			rows={values.rows}
			maxlength={values.maxlength}
			required={values.required}
			disabled={values.disabled}
			error={values.error}
			errors={values.error ? ['Content is required'] : []}
			bind:value
		/>
	{/snippet}
</Story>
