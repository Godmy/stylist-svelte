<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DiscussionAliasBadge from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'alias', type: 'text', defaultValue: 'Expert Green' },
		{ name: 'isOwn', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	title="Discussion Alias Badge"
	component={DiscussionAliasBadge}
	category="Atoms/Wbd"
	description="Anonymous expert identity marker for WBD discussions."
	{controls}
>
	{#snippet children(values: any)}
		<DiscussionAliasBadge alias={values.alias} isOwn={values.isOwn} />
	{/snippet}
</Story>
