<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import { alertCardControls } from '$stylist/commerce/const/alert-card/controls';
	import type { AlertCardStoryProps } from '$stylist/commerce/interface/recipe/alert-card-story-props';
  import { createAlertCardStoryState } from '$stylist/commerce/function/state/alert-card-story';

	import AlertCardComponent from './index.svelte';

  let props: AlertCardStoryProps = $props();
  const state = createAlertCardStoryState({ ...props, component: AlertCardComponent as any });
</script>

<Story component={state.component} title={state.title} description={state.description} controls={state.controls}>
	{#snippet children(values: any)}
		<div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4">
			<div class="text-base font-semibold">{values.title}</div>
			{#if values.subtitle}
				<div class="mt-1 text-sm text-[var(--color-text-secondary)]">{values.subtitle}</div>
			{/if}
			<div class="mt-4 flex gap-2">
				<button type="button" class="rounded bg-[var(--color-primary-600)] px-3 py-1 text-[var(--color-text-inverse)]">Upgrade</button>
				<button type="button" class="rounded border border-[var(--color-border-primary)] px-3 py-1">Dismiss</button>
			</div>
		</div>
	{/snippet}
</Story>
