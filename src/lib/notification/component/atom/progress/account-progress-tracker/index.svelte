<script lang="ts">
	import { createAccountProgressTrackerState } from '$stylist/notification/function/state/account-progress-tracker';

	const props = $props();
	const state = createAccountProgressTrackerState(props);
</script>

<div class={state.containerClasses} {...props}>
	{#each state.steps as step, i}
		<div class="flex items-center">
			<div class={state.getStepClasses(i)}>
				{i + 1}
			</div>
			{#if i < state.steps.length - 1}
				<div class={state.getConnectorClasses(i)}></div>
			{/if}
		</div>
	{/each}
	<div class="account-progress-tracker-progress">
		<p>Step {state.localCurrentStep + 1} of {state.steps.length}: {state.steps[state.localCurrentStep]}</p>
	</div>
</div>






