<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import AccountProgressTracker from './index.svelte';

	type Props = {
		steps?: string[];
		currentStep?: number;
		class?: string;
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'currentStep',
			type: 'number',
			defaultValue: 0,
			min: 0,
			max: 3
		}
	];
</script>

<Story
	id="molecules-account-progress-tracker"
	title="AccountProgressTracker"
	component={AccountProgressTracker}
	category="Molecules"
	description="Track account setup progress through multiple steps."
	{controls}
>
	{#snippet children(values: any)}
		{@const currentStep = typeof values.currentStep === 'number' ? values.currentStep : 0}
		{@const className = typeof values.class === 'string' ? values.class : undefined}
		<div class="rounded-lg bg-[var(--color-background-secondary)] p-8">
			<h2 class="mb-4 text-xl font-bold">AccountProgressTracker Story</h2>
			<AccountProgressTracker
				steps={['Account Info', 'Verification', 'Preferences', 'Complete']}
				currentStep={currentStep}
				class={className}
			/>
		</div>
	{/snippet}
</Story>








