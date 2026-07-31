<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import FriendList from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showStatus', type: 'boolean', defaultValue: true },
			{ name: 'showLastSeen', type: 'boolean', defaultValue: true },
			{ name: 'showTags', type: 'boolean', defaultValue: true },
			{ name: 'showSearch', type: 'boolean', defaultValue: true },
			{ name: 'groupByStatus', type: 'boolean', defaultValue: false },
			{
				name: 'sortBy',
				type: 'select',
				options: ['name', 'status', 'lastSeen'],
				defaultValue: 'name'
			}
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	const friends = [
		{
			id: '1',
			name: 'Alice Johnson',
			username: 'alicej',
			avatar: 'https://placehold.co/40x40',
			status: 'online' as const,
			lastSeen: new Date(Date.now() - 60000),
			isFavorite: true,
			tags: ['work', 'college']
		},
		{
			id: '2',
			name: 'Bob Smith',
			username: 'bobsmith',
			avatar: 'https://placehold.co/40x40',
			status: 'away' as const,
			lastSeen: new Date(Date.now() - 1200000),
			tags: ['family']
		},
		{
			id: '3',
			name: 'Carol Davis',
			username: 'carold',
			avatar: 'https://placehold.co/40x40',
			status: 'busy' as const,
			lastSeen: new Date(Date.now() - 3600000),
			tags: ['work']
		}
	];

	function handleFriendSelect(friend: any) {
		console.log('Friend selected:', friend.name);
	}

	function handleSendMessage(friend: any) {
		console.log('Send message to:', friend.name);
	}
</script>

<Story {id} {title} {description} component={FriendList} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-friend-list _c1">
			<div class="_c2">
				<p class="_c3">Primary Friend List Example</p>
				<p class="_c4">Interactive friend list with customizable options.</p>

				<div class="_c5">
					<FriendList
						{friends}
						showStatus={values.showStatus}
						showLastSeen={values.showLastSeen}
						showTags={values.showTags}
						showSearch={values.showSearch}
						groupByStatus={values.groupByStatus}
						sortBy={values.sortBy}
						onFriendSelect={handleFriendSelect}
						onSendMessage={handleSendMessage}
					/>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Friend List Variations</h3>
				<p class="_c8">Different friend list configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Grouped by Status</p>
						<div class="_c12">
							<FriendList {friends} groupByStatus={true} onFriendSelect={handleFriendSelect} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Without Tags</p>
						<div class="_c12">
							<FriendList
								{friends}
								showTags={false}
								showLastSeen={false}
								onFriendSelect={handleFriendSelect}
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
