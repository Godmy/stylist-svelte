<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import SocialActivityFeed from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showAvatars', type: 'boolean', defaultValue: true },
			{ name: 'showTimestamp', type: 'boolean', defaultValue: true },
			{
				name: 'filterType',
				type: 'select',
				options: ['all', 'unread', 'important'],
				defaultValue: 'all'
			}
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	type ActivityType =
		| 'like'
		| 'comment'
		| 'follow'
		| 'share'
		| 'mention'
		| 'achievement'
		| 'system'
		| 'announcement';

	type User = {
		id: string;
		name: string;
		username?: string;
		avatar?: string;
		isVerified?: boolean;
	};

	type Activity = {
		id: string;
		type: ActivityType;
		actor: User;
		target?: User;
		subject?: string;
		content?: string;
		timestamp: Date;
		relatedUrl?: string;
		isRead?: boolean;
		isImportant?: boolean;
	};

	const sampleActivities: Activity[] = [
		{
			id: '1',
			type: 'like',
			actor: {
				id: 'u1',
				name: 'Alice Johnson',
				avatar: 'https://placehold.co/40x40',
				isVerified: true
			},
			subject: 'your post',
			timestamp: new Date(Date.now() - 300000)
		},
		{
			id: '2',
			type: 'follow',
			actor: { id: 'u2', name: 'Bob Smith', avatar: 'https://placehold.co/40x40' },
			target: { id: 'u3', name: 'You' },
			timestamp: new Date(Date.now() - 3600000)
		},
		{
			id: '3',
			type: 'comment',
			actor: { id: 'u4', name: 'Carol Davis', avatar: 'https://placehold.co/40x40' },
			subject: 'your photo',
			content: 'Great shot!',
			timestamp: new Date(Date.now() - 7200000)
		}
	];

	function handleActivityClick(activity: Activity) {
		console.log('Activity clicked:', activity);
	}
</script>

<Story {id} {title} {description} component={SocialActivityFeed} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-social-activity-feed _c1">
			<div class="_c2">
				<p class="_c3">Primary Social Activity Feed Example</p>
				<p class="_c4">Interactive social activity feed with customizable options.</p>

				<div class="_c5">
					<SocialActivityFeed
						activities={sampleActivities}
						showAvatars={values.showAvatars}
						showTimestamp={values.showTimestamp}
						onActivityClick={handleActivityClick}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Activity Feed Variations</h3>
				<p class="_c8">Different activity feed configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Avatars</p>
						<div class="_c12">
							<SocialActivityFeed
								activities={sampleActivities}
								showAvatars={false}
								onActivityClick={handleActivityClick}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Important Only</p>
						<div class="_c12">
							<SocialActivityFeed
								activities={sampleActivities}
								onActivityClick={handleActivityClick}
							/>
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c12 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-left: auto;
		margin-right: auto;
		margin-top: 1.5rem;
		max-width: 28rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
