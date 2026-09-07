<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CommentThread from './index.svelte';
	import type { SlotCommentThreadItem as CommentThreadItem } from '$stylist/social/interface/slot/comment-thread-item';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Discussion Thread' },
		{ name: 'showTitle', type: 'boolean', defaultValue: true },
		{ name: 'showReply', type: 'boolean', defaultValue: true },
		{ name: 'showLikes', type: 'boolean', defaultValue: true }
	];

	const comments: CommentThreadItem[] = [
		{
			id: '1',
			author: {
				id: 'user1',
				name: 'Alice Johnson',
				avatar: 'https://placehold.co/40x40',
				role: 'Admin'
			},
			content: 'This discussion is very useful.',
			timestamp: new Date(Date.now() - 3600000),
			likes: 5,
			replies: [
				{
					id: '1-1',
					author: {
						id: 'user2',
						name: 'Bob Smith',
						avatar: 'https://placehold.co/40x40',
						role: 'User'
					},
					content: 'Agreed, thanks for sharing.',
					timestamp: new Date(Date.now() - 1800000),
					likes: 2
				}
			]
		},
		{
			id: '2',
			author: {
				id: 'user3',
				name: 'Carol Davis',
				avatar: 'https://placehold.co/40x40',
				role: 'Moderator'
			},
			content: 'Looking forward to more contributions.',
			timestamp: new Date(Date.now() - 7200000),
			likes: 3
		}
	];
</script>

<Story
	id="organisms-comment-thread"
	title="Comment Thread"
	component={CommentThread}
	category="Organisms"
	description="Focused nested discussion thread: title plus replies and like/reply actions, without full comment-system moderation controls."
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-comment-thread _c1">
			<div class="_c2">
				<p class="_c3">Single discussion thread</p>
				<p class="_c4">Use when the page already owns the surrounding comment form, user context or moderation workflow.</p>
			</div>
			<CommentThread
				title={values.title}
				{comments}
				currentUserId="user1"
				showTitle={values.showTitle}
				showReply={values.showReply}
				showLikes={values.showLikes}
			/>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1.5rem;
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		display: grid;
		gap: 0.25rem;
	}
	._c3 {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c4 {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
