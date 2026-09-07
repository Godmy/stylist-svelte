<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CommentSystem from './index.svelte';
	import type { SlotCommentItem as CommentItem } from '$stylist/social/interface/slot/comment-item';
	import type { SlotCommentUser as CommentUser } from '$stylist/social/interface/slot/comment-user';

	const controls: SlotStory[] = [
		{ name: 'showReply', type: 'boolean', defaultValue: true },
		{ name: 'showLikes', type: 'boolean', defaultValue: true },
		{ name: 'showDislikes', type: 'boolean', defaultValue: true },
		{ name: 'showEdit', type: 'boolean', defaultValue: true },
		{ name: 'showDelete', type: 'boolean', defaultValue: true }
	];

	const currentUser: CommentUser = {
		id: 'current',
		name: 'You',
		avatar: 'https://placehold.co/40x40',
		role: 'User'
	};

	const comments: CommentItem[] = [
		{
			id: '1',
			author: {
				id: 'user1',
				name: 'Alice Johnson',
				avatar: 'https://placehold.co/40x40',
				role: 'Admin'
			},
			content: 'This is a great article. Very useful details.',
			timestamp: new Date(Date.now() - 3600000),
			likes: 5,
			dislikes: 0,
			replies: [
				{
					id: '1-1',
					author: {
						id: 'user2',
						name: 'Bob Smith',
						avatar: 'https://placehold.co/40x40',
						role: 'User'
					},
					content: 'Agreed, helped me a lot.',
					timestamp: new Date(Date.now() - 1800000),
					likes: 2,
					dislikes: 0
				}
			]
		},
		{
			id: '2',
			author: {
				id: 'user4',
				name: 'David Wilson',
				avatar: 'https://placehold.co/40x40',
				role: 'User'
			},
			content: 'I found one typo, but overall excellent.',
			timestamp: new Date(Date.now() - 7200000),
			likes: 1,
			dislikes: 0
		}
	];
</script>

<Story
	id="organisms-comment-system"
	title="Comment System"
	component={CommentSystem}
	category="Organisms"
	description="Full comment product surface: current user context, replies, likes/dislikes, edit and delete controls."
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-comment-system _c1">
			<div class="_c2">
				<p class="_c3">Article comment system</p>
				<p class="_c4">Use when a page needs the whole commenting experience, including moderation-style actions.</p>
			</div>
			<CommentSystem
				{comments}
				{currentUser}
				showReply={values.showReply}
				showLikes={values.showLikes}
				showDislikes={values.showDislikes}
				showEdit={values.showEdit}
				showDelete={values.showDelete}
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
