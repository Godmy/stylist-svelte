<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ErrorMessage from './index.svelte';

	let retried = $state(false);

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Failed to load data' },
		{ name: 'errorType', type: 'select', defaultValue: 'string', options: ['string', 'error', 'none'] },
		{ name: 'showRetry', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={ErrorMessage} title="ErrorMessage" description="Error feedback block with optional retry action." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<ErrorMessage
				title={values.title}
				error={values.errorType === 'none' ? null : values.errorType === 'error' ? new Error('Unexpected server error') : 'Unable to connect to the service.'}
				showRetry={values.showRetry}
				onRetry={() => (retried = true)}
			/>
			<p class="text-sm text-[--color-text-secondary]">Retry pressed: {retried ? 'yes' : 'no'}</p>
		</div>
	{/snippet}
</Story>
