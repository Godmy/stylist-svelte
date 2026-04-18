<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import SlotRadio from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Email notifications' },
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={SlotRadio} title="SlotRadio" description="Single radio option with clear checked and disabled states." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-4">
			<SlotRadio
				id="radio-main"
				name="story-radio"
				value="primary"
				label={values.label}
				checked={values.checked}
				disabled={values.disabled}
				required={values.required}
				size={values.size}
			/>
			<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-3 text-sm text-[--color-text-secondary]">
				Use one `name` for a group. This story renders a single controllable option.
			</div>
		</div>
	{/snippet}
</Story>



