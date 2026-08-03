<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DiscussionMessageComposer from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'placeholder',
			type: 'text',
			defaultValue: 'Add rationale, assumption, or challenge...'
		}
	];

	function handleSubmitMessage(message: string, parentId?: string): void {
		console.info('WBD discussion message', { message, parentId });
	}
</script>

<Story
	title="Discussion Message Composer"
	component={DiscussionMessageComposer}
	category="Molecules/Wbd"
	description="Textarea composer used by anonymous experts in question discussion threads."
	{controls}
>
	{#snippet children(values: any)}
		<DiscussionMessageComposer
			placeholder={values.placeholder}
			onSubmitMessage={handleSubmitMessage}
		/>
	{/snippet}
</Story>
