<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ChatHeader from './index.svelte';
	import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
	import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';

	export let primaryScenario: { chat: Chat; currentUser: User };
	export let variantScenarios: { chat: Chat; currentUser: User }[] = [];
	export let controls: SlotStory[] = [{ name: 'showActions', type: 'boolean', defaultValue: true }];

	// Sample data for scenarios
	const sampleUser1: User = {
		id: 'user1',
		name: 'Alex Morgan',
		status: 'online'
	};

	const sampleUser2: User = {
		id: 'user2',
		name: 'Taylor Swift',
		status: 'away'
	};

	const sampleUser3: User = {
		id: 'user3',
		name: 'Jamie Johnson',
		status: 'offline'
	};

	const sampleGroupUser: User = {
		id: 'user4',
		name: 'Jordan Smith',
		status: 'online'
	};

	const sampleCurrentUser: User = {
		id: 'current',
		name: 'You',
		status: 'online'
	};

	const defaultPrimaryScenario = {
		chat: {
			id: 'chat1',
			name: 'Alex Morgan',
			participants: [sampleUser1, sampleCurrentUser],
			isGroup: false,
			lastMessage: 'Hey, how are you doing?',
			lastMessageTime: new Date(Date.now() - 300000), // 5 minutes ago
			unreadCount: 2
		},
		currentUser: sampleCurrentUser
	};

	const variantScenariosData = [
		{
			chat: {
				id: 'group1',
				name: 'Design Team',
				participants: [sampleUser1, sampleUser2, sampleUser3, sampleCurrentUser],
				isGroup: true,
				lastMessage: 'Meeting at 3pm today',
				lastMessageTime: new Date(Date.now() - 1800000), // 30 minutes ago
				unreadCount: 5
			},
			currentUser: sampleCurrentUser
		},
		{
			chat: {
				id: 'chat2',
				name: 'Taylor Swift',
				participants: [sampleUser2, sampleCurrentUser],
				isGroup: false,
				lastMessage: 'Thanks for your help!',
				lastMessageTime: new Date(Date.now() - 3600000), // 1 hour ago
				unreadCount: 0
			},
			currentUser: sampleCurrentUser
		},
		{
			chat: {
				id: 'group2',
				name: 'Family Group',
				participants: [sampleUser1, sampleUser2, sampleGroupUser, sampleCurrentUser],
				isGroup: true,
				lastMessage: 'Dinner tonight?',
				lastMessageTime: new Date(Date.now() - 7200000), // 2 hours ago
				unreadCount: 12
			},
			currentUser: sampleCurrentUser
		}
	];

	// Use provided scenarios or defaults
	primaryScenario = primaryScenario || defaultPrimaryScenario;
	variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;

	// Event handlers for demo purposes
	function handleCall(event: CustomEvent<{ chat: Chat }>) {
		console.log('Call initiated for chat:', event.detail.chat.id);
	}

	function handleVideoCall(event: CustomEvent<{ chat: Chat }>) {
		console.log('Video call initiated for chat:', event.detail.chat.id);
	}

	function handleInfo(event: CustomEvent<{ chat: Chat }>) {
		console.log('Info requested for chat:', event.detail.chat.id);
	}

	type Props = {
		showActions: boolean;
	};
</script>

<Story
	id="organisms-chat-header"
	title="Organisms / Interaction / Communication / Chat / ChatHeader"
	component={ChatHeader}
	category="Organisms/Interaction/Communication/Chat"
	description="Interactive chat header with user status and actions."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Chat Header Example</p>
				<p class="_c4">Interactive chat header with user status and actions.</p>

				<div class="_c5">
					<div class="_c6">
						<ChatHeader
							chat={primaryScenario.chat}
							currentUser={primaryScenario.currentUser}
							showActions={values.showActions}
							onCall={() => console.log('Call initiated for chat:', primaryScenario.chat.id)}
							onVideoCall={() =>
								console.log('Video call initiated for chat:', primaryScenario.chat.id)}
							onInfo={() => console.log('Info requested for chat:', primaryScenario.chat.id)}
						/>
					</div>
				</div>
			</div>

			<div class="_c7">
				<h3 class="_c8">Chat Header Variations</h3>
				<p class="_c9">
					Different chat contexts: one-on-one, group chats, and with various action states.
				</p>

				<div class="_c10">
					{#each variantScenarios as scenario, i}
						<article class="_c11">
							<div class="_c12">
								<p class="_c13">
									{scenario.chat.isGroup ? 'Group Chat' : 'One-on-One'} #{i + 1}
								</p>
								<p class="_c14">
									{scenario.chat.name} • {scenario.chat.participants.length} participants
								</p>
							</div>
							<div class="_c15">
								<ChatHeader
									chat={scenario.chat}
									currentUser={scenario.currentUser}
									showActions={true}
									onCall={() => console.log('Call initiated for chat:', scenario.chat.id)}
									onVideoCall={() =>
										console.log('Video call initiated for chat:', scenario.chat.id)}
									onInfo={() => console.log('Info requested for chat:', scenario.chat.id)}
								/>
							</div>
						</article>
					{/each}
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
		margin-top: 1.25rem;
	}
	._c10 > * + * {
		margin-top: 1rem;
	}
	._c11 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c12 {
		margin-bottom: 0.5rem;
	}
	._c13 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c14 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c15 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
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
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
	}
	._c7 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c8 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c9 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
