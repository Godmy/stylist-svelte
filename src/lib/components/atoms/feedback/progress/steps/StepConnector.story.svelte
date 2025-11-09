<script lang="ts">
	import { Story } from '$lib/playground';
	import type { ControlConfig } from '$lib/playground';
	import StepConnector from './StepConnector.svelte';
	import StepIcon from './StepIcon.svelte'; // For demonstration context

	const statusOptions = ['pending', 'active', 'completed', 'error'] as const;

	type Props = {
		status: (typeof statusOptions)[number];
	};

	const controls: ControlConfig[] = [
		{ name: 'status', type: 'select', defaultValue: 'pending', options: [...statusOptions] }
	];
</script>

<Story
	id="atoms-navigation-step-connector"
	title="StepConnector"
	component={StepConnector}
	category="Atoms"
	description="A visual connector between steps in a multi-step process."
	controls={controls}
>
	{#snippet children(props: Props)}
		<div class="flex flex-col gap-4">
			<h3 class="mb-4 text-lg font-bold">StepConnector States</h3>
			<div class="flex items-center gap-2">
				<StepIcon status="completed" stepNumber={1} />
				<StepConnector status="completed" />
				<StepIcon status="active" stepNumber={2} />
				<StepConnector status={props.status} />
				<StepIcon status="pending" stepNumber={3} />
			</div>

			<h3 class="mt-8 mb-4 text-lg font-bold">Different Connector Statuses</h3>
			<div class="flex flex-col gap-2">
				<div class="flex items-center gap-2">
					<StepIcon status="completed" stepNumber={1} size="sm" />
					<StepConnector status="completed" class="w-16" />
					<StepIcon status="completed" stepNumber={2} size="sm" />
				</div>
				<div class="flex items-center gap-2">
					<StepIcon status="active" stepNumber={1} size="sm" />
					<StepConnector status="active" class="w-16" />
					<StepIcon status="pending" stepNumber={2} size="sm" />
				</div>
				<div class="flex items-center gap-2">
					<StepIcon status="error" stepNumber={1} size="sm" />
					<StepConnector status="error" class="w-16" />
					<StepIcon status="pending" stepNumber={2} size="sm" />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
