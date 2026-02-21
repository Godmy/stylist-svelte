<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import FormFooter from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'primaryButtonLabel', type: 'text', defaultValue: 'Continue' },
		{ name: 'secondaryButtonLabel', type: 'text', defaultValue: 'Cancel' },
		{ name: 'showSecondaryButton', type: 'boolean', defaultValue: true },
		{ name: 'primaryButtonDisabled', type: 'boolean', defaultValue: false },
		{ name: 'secondaryButtonDisabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={FormFooter} title="FormFooter" description="Action row with primary and optional secondary button." {controls}>
	{#snippet children(values: any)}
		<div class="rounded-xl border border-[--color-border-primary] bg-white p-5">
			<FormFooter
				primaryButtonLabel={values.primaryButtonLabel}
				secondaryButtonLabel={values.secondaryButtonLabel}
				showSecondaryButton={values.showSecondaryButton}
				primaryButtonDisabled={values.primaryButtonDisabled}
				secondaryButtonDisabled={values.secondaryButtonDisabled}
			/>
		</div>
	{/snippet}
</Story>
