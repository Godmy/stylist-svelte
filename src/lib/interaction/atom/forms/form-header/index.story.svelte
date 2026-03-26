<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import FormHeader from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Personal information' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Step 1 of 3' },
		{ name: 'description', type: 'text', defaultValue: 'Fill in profile details to continue setup.' },
		{ name: 'showBackButton', type: 'boolean', defaultValue: true },
		{ name: 'backButtonLabel', type: 'text', defaultValue: 'Back' }
	];
</script>

<Story component={FormHeader} title="FormHeader" description="Consistent heading section for multi-step forms." {controls}>
	{#snippet children(values: any)}
		<div class="rounded-xl border border-[--color-border-primary] bg-[var(--color-background-primary)] p-5">
			<FormHeader
				title={values.title}
				subtitle={values.subtitle}
				description={values.description}
				backButtonLabel={values.backButtonLabel}
				backAction={values.showBackButton ? () => {} : undefined}
			/>
		</div>
	{/snippet}
</Story>




