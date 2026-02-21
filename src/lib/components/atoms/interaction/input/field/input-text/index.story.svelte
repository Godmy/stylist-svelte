<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import InputText from './index.svelte';

	let value = $state('');

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Name' },
		{ name: 'type', type: 'select', defaultValue: 'text', options: ['text', 'email', 'password', 'number'] },
		{ name: 'placeholder', type: 'text', defaultValue: 'Enter text...' },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'outlined', 'filled', 'ghost'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={InputText} title="InputText" description="Base text input component with validation states." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-2">
			<InputText
				id="story-input-text"
				label={values.label}
				type={values.type}
				placeholder={values.placeholder}
				required={values.required}
				disabled={values.disabled}
				variant={values.variant}
				size={values.size}
				bind:value
			/>
			<p class="text-sm text-[--color-text-secondary]">Value: {value}</p>
		</div>
	{/snippet}
</Story>
