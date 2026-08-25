<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PostCard from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'layout',
			type: 'select',
			defaultValue: 'featured',
			options: ['featured', 'compact', 'announcement']
		}
	];

	function handleAction(label: string) {
		console.log(`Post card action: ${label}`);
	}
</script>

<Story
	{controls}
	title="PostCard"
	description="Social post preview card with author metadata, tags, and action buttons."
>
	{#snippet children(values: any)}
		<div class="_showcase">
			{#if values.layout === 'featured'}
				<PostCard
					title="Design system release notes"
					subtitle="Component library update"
					image="https://picsum.photos/seed/social-post-card/960/540"
					date="Aug 22, 2026"
					excerpt="The social package now includes cleaner feed primitives, reaction controls, and structured post surfaces for editorial and community views."
					author="Platform Team"
					tags={['Design', 'Social', 'Release']}
					actions={[
						{ label: 'Read', onClick: () => handleAction('Read') },
						{ label: 'Share', onClick: () => handleAction('Share') }
					]}
				/>
			{:else if values.layout === 'compact'}
				<PostCard
					title="Community digest"
					subtitle="Weekly highlights"
					date="Aug 21, 2026"
					excerpt="A short roundup of discussions, feedback, and component requests from the latest community cycle."
					author="Editorial"
					tags={['Digest', 'Community']}
					actions={[{ label: 'Open', onClick: () => handleAction('Open') }]}
				/>
			{:else}
				<PostCard
					title="Maintenance window"
					date="Aug 20, 2026"
					excerpt="Scheduled maintenance is planned for the preview environment. Publishing and story browsing remain available."
					author="Operations"
					tags={['Notice']}
				/>
			{/if}
		</div>
	{/snippet}
</Story>

<style>
	._showcase {
		width: min(100%, 42rem);
		padding: 1rem;
	}
</style>
