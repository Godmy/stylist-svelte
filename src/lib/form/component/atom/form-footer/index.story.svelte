<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import FormFooter from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'primaryButtonLabel', type: 'text', defaultValue: 'Continue' },
		{ name: 'secondaryButtonLabel', type: 'text', defaultValue: 'Cancel' },
		{ name: 'showSecondaryButton', type: 'boolean', defaultValue: true },
		{ name: 'primaryButtonDisabled', type: 'boolean', defaultValue: false },
		{ name: 'secondaryButtonDisabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={FormFooter} title="FormFooter" description="Action row with primary and optional secondary button." {controls}>
	{#snippet children(values: any)}
		<div class="rounded-xl border border-[--color-border-primary] bg-[var(--color-background-primary)] p-5">
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




