<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import { alertCardControls } from '$stylist/commerce/const/alert-card/controls';
  import { createAlertCardStoryState, type AlertCardStoryProps } from '$stylist/commerce/function/state/alert-card-story';

  import AlertCardComponent from './index.svelte';

  let props: AlertCardStoryProps = $props();
  const state = createAlertCardStoryState({ ...props, component: AlertCardComponent as any });
</script>

<Story component={state.component} title={state.title} description={state.description} controls={state.controls}>
	{#snippet children(values: any)}
		<AlertCard
			title={values.title}
			subtitle={values.subtitle}
			variant={values.variant}
			actions={[{ label: 'Upgrade', onClick: () => {} }, { label: 'Dismiss', onClick: () => {} }]}
		/>
	{/snippet}
</Story>
