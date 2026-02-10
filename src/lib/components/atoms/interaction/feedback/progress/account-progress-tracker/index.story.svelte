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
	{#snippet children(props: Props)}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">AccountProgressTracker Story</h2>
			<AccountProgressTracker
				{...props}
				steps={['Account Info', 'Verification', 'Preferences', 'Complete']}
			/>
		</div>
	{/snippet}
</Story>
