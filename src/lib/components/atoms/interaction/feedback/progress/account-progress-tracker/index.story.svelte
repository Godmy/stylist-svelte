<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import AccountProgressTracker from './index.svelte';

	type Props = {
		steps?: string[];
		currentStep?: number;
		class?: string;
	};

	const controls: ControlConfig[] = [
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
	{#snippet children(props: Record<string, unknown>)}
		{@const currentStep = typeof props.currentStep === 'number' ? props.currentStep : 0}
		{@const className = typeof props.class === 'string' ? props.class : undefined}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">AccountProgressTracker Story</h2>
			<AccountProgressTracker
				steps={['Account Info', 'Verification', 'Preferences', 'Complete']}
				currentStep={currentStep}
				class={className}
			/>
		</div>
	{/snippet}
</Story>



