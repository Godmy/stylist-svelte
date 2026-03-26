<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import Radio from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Email notifications' },
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={Radio} title="Radio" description="Single radio option with clear checked and disabled states." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-4">
			<Radio
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



