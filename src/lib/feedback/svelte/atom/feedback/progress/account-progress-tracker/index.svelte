<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { IAccountProgressTrackerProps } from '$stylist/feedback/interface/component/feedback/other';
	import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

	let {
		steps = [],
		currentStep = 0,
		class: className = '',
		...restProps
	}: IAccountProgressTrackerProps & InteractionHTMLAttributes<HTMLDivElement> = $props();

	let localCurrentStep = $state(currentStep);

	$effect(() => {
		localCurrentStep = currentStep;
	});
</script>

<div class={mergeClasses('account-progress-tracker-container', className)} {...restProps}>
	{#each steps as step, i}
		<div class="flex items-center">
			<div
				class={i <= localCurrentStep
					? 'flex h-8 w-8 items-center justify-center rounded-full bg-[--color-primary-500] text-[var(--color-text-inverse)]'
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
	<div class="account-progress-tracker-progress">
		<p>Step {localCurrentStep + 1} of {steps.length}: {steps[localCurrentStep]}</p>
	</div>
</div>






