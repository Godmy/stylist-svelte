<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PinInputDigit from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'value', type: 'text', defaultValue: '4' },
		{ name: 'focused', type: 'boolean', defaultValue: false },
		{ name: 'invalid', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'outline', 'ghost'] }
	];
</script>

<Story component={PinInputDigit} title="InputPinDigit" description="Single digit input used in OTP/PIN flows." {controls}>
	{#snippet children(values: any)}
		<div class="flex gap-2">
			<PinInputDigit id="pin-1" label="1" value={values.value} focused={values.focused} invalid={values.invalid} size={values.size} variant={values.variant} />
			<PinInputDigit id="pin-2" label="2" value="" size={values.size} variant={values.variant} />
			<PinInputDigit id="pin-3" label="3" value="" size={values.size} variant={values.variant} />
			<PinInputDigit id="pin-4" label="4" value="" size={values.size} variant={values.variant} />
		</div>
	{/snippet}
</Story>
