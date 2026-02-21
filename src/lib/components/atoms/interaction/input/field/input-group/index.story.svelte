<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import InputGroup from './index.svelte';

	let value = $state('iris@company.com');
	let clicks = $state(0);

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Invite teammate' },
		{ name: 'placeholder', type: 'text', defaultValue: 'name@company.com' },
		{ name: 'buttonLabel', type: 'text', defaultValue: 'Send invite' },
		{ name: 'buttonVariant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'buttonDisabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={InputGroup} title="InputGroup" description="Input paired with an action button." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<InputGroup
				id="story-input-group"
				label={values.label}
				value={value}
				placeholder={values.placeholder}
				buttonLabel={values.buttonLabel}
				buttonVariant={values.buttonVariant}
				disabled={values.disabled}
				buttonDisabled={values.buttonDisabled}
				onValueChange={(next) => (value = next)}
				onButtonClick={() => (clicks += 1)}
			/>
			<p class="text-sm text-[--color-text-secondary]">Value: {value} | Clicks: {clicks}</p>
		</div>
	{/snippet}
</Story>
