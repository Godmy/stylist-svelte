<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SessionAssumptionsPanel from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'readonly', type: 'boolean', defaultValue: false },
		{
			name: 'assumptions',
			type: 'text',
			defaultValue: 'Use approved 2026 CAPEX, exclude unlicensed acreage, and assume current tax regime.'
		}
	];

	function handleUpdateAssumptions(assumptions: string): void {
		console.info('WBD assumptions updated', assumptions);
	}
</script>

<Story
	title="Session Assumptions Panel"
	component={SessionAssumptionsPanel}
	category="Organisms/Wbd"
	description="Shared assumptions visible before expert estimation."
	{controls}
>
	{#snippet children(values: any)}
		<SessionAssumptionsPanel
			assumptions={values.assumptions}
			readonly={values.readonly}
			onUpdateAssumptions={handleUpdateAssumptions}
		/>
	{/snippet}
</Story>
