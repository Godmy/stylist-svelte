<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PushNotification from './index.svelte';

	let closed = $state(false);

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Build completed' },
		{ name: 'message', type: 'text', defaultValue: 'Your release was deployed successfully.' },
		{ name: 'type', type: 'select', defaultValue: 'success', options: ['info', 'success', 'warning', 'error'] },
		{ name: 'showIcon', type: 'boolean', defaultValue: true },
		{ name: 'autoDismiss', type: 'boolean', defaultValue: false },
		{ name: 'duration', type: 'number', defaultValue: 5000, min: 500, max: 15000, step: 500 }
	];
</script>

<Story component={PushNotification} title="PushNotification" description="Compact inline notification with status styles and auto-dismiss." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3 rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">
			{#if !closed}
				<PushNotification
					title={values.title}
					message={values.message}
					type={values.type}
					showIcon={values.showIcon}
					autoDismiss={values.autoDismiss}
					duration={values.duration}
					onClose={() => (closed = true)}
				/>
			{:else}
				<button class="rounded-md border border-[--color-border-primary] px-3 py-1 text-sm" onclick={() => (closed = false)}>Show again</button>
			{/if}
		</div>
	{/snippet}
</Story>
