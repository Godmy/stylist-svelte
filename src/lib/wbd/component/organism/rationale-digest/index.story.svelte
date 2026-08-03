<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdRationaleItem } from '$stylist/wbd/type/struct/rationale-item';
	import RationaleDigest from './index.svelte';

	const controls: SlotStory[] = [];
	const items: StructWbdRationaleItem[] = [
		{
			id: 'r-1',
			questionId: 'q-1',
			questionText: 'Recoverable resource base',
			roundNumber: 2,
			rationale: 'Upside depends on seismic interpretation being accepted by all workstreams.',
			confidence: 4,
			consensusLevel: 'medium'
		},
		{
			id: 'r-2',
			questionId: 'q-2',
			questionText: 'License approval probability',
			roundNumber: 1,
			rationale: 'Historical regulator cadence supports the central estimate.',
			confidence: 3,
			consensusLevel: 'high'
		}
	];
</script>

<Story
	title="Rationale Digest"
	component={RationaleDigest}
	category="Organisms/Wbd"
	description="Anonymous rationale excerpts grouped for coordinator review."
	{controls}
>
	{#snippet children()}
		<RationaleDigest {items} />
	{/snippet}
</Story>
