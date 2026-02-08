<script lang="ts">
	import type { IAccountProgressTrackerProps } from '$stylist/design-system/presets/interaction/interaction-presets';
	import { AccountProgressTrackerStyleManager } from '$stylist/design-system/presets/interaction/interaction-presets';

	let {
		steps = [],
		currentStep = 0,
		class: className = ''
	}: IAccountProgressTrackerProps = $props();

	let localCurrentStep = $state(currentStep);

	$effect(() => {
		localCurrentStep = currentStep;
	});
</script>

<div class={AccountProgressTrackerStyleManager.generateContainerClass(className)}>
	{#each steps as step, i}
		<div class="flex items-center">
			<div
				class={i <= localCurrentStep
					? 'flex h-8 w-8 items-center justify-center rounded-full bg-[--color-primary-500] text-white'
					: 'flex h-8 w-8 items-center justify-center rounded-full border-2 border-[--color-border-primary]'}
			>
				{i + 1}
			</div>
			{#if i < steps.length - 1}
				<div
					class={i < localCurrentStep
						? 'mx-2 h-1 w-16 bg-[--color-primary-500]'
						: 'mx-2 h-1 w-16 border-b-2 border-[--color-border-primary]'}
				></div>
			{/if}
		</div>
	{/each}
	<div class={AccountProgressTrackerStyleManager.generateProgressTextClass()}>
		<p>Step {localCurrentStep + 1} of {steps.length}: {steps[localCurrentStep]}</p>
	</div>
</div>
