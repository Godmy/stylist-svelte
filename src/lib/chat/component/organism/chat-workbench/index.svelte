<script lang="ts">
	import { onDestroy } from 'svelte';
	import ChatList from '$stylist/chat/component/molecule/chat-list/index.svelte';
	import ChatHeader from '$stylist/chat/component/organism/chat-header/index.svelte';
	import MessageList from '$stylist/chat/component/molecule/message-list/index.svelte';
	import MessageComposer from '$stylist/chat/component/molecule/message-composer/index.svelte';
	import UserStatus from '$stylist/chat/component/molecule/user-status/index.svelte';
	import ChatPreview from '$stylist/chat/component/atom/chat-preview/index.svelte';
	import Badge from '$stylist/typography/component/atom/badge/index.svelte';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
	import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
	import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';

	type ChatWorkbenchMode = 'page' | 'panel';
	type ChatFilter = 'all' | 'unread' | 'groups';
	type ChatThread = {
		chat: Chat;
		messages: Message[];
		accent: string;
		summary: string;
	};

	interface ChatWorkbenchProps {
		mode?: ChatWorkbenchMode;
	}

	let { mode = 'page' }: ChatWorkbenchProps = $props();

	const currentUser: User = {
		id: 'u-me',
		name: 'Dmitrii',
		status: 'online'
	};

	const participants: Record<string, User> = {
		alex: { id: 'u-alex', name: 'Alex Morgan', status: 'online' },
		nina: { id: 'u-nina', name: 'Nina Patel', status: 'typing' },
		marc: { id: 'u-marc', name: 'Marc Chen', status: 'away' },
		sol: { id: 'u-sol', name: 'Sol Rivera', status: 'offline' },
		ira: { id: 'u-ira', name: 'Ira Volkova', status: 'online' }
	};

	let draftSearch = $state('');
	let activeFilter = $state<ChatFilter>('all');
	let activeChatId = $state('chat-product');
	let actionLog = $state<string[]>([
		'Communication demo initialized.',
		'Ready to inspect chat components.'
	]);
	let replyTimers: number[] = [];

	let chatThreads = $state<ChatThread[]>([
		{
			chat: {
				id: 'chat-product',
				name: 'Product Launch',
				participants: [currentUser, participants.alex, participants.nina, participants.marc],
				isGroup: true,
				lastMessage: {
					id: 'm-3',
					senderId: participants.nina.id,
					content: 'Landing page copy is ready for review.',
					timestamp: new Date('2026-05-03T19:28:00'),
					status: 'read'
				},
				lastMessageTime: new Date('2026-05-03T19:28:00'),
				unreadCount: 3
			},
			messages: [
				{
					id: 'm-1',
					senderId: participants.alex.id,
					content: 'We need a tighter launch checklist before Friday.',
					timestamp: new Date('2026-05-03T19:18:00'),
					status: 'read'
				},
				{
					id: 'm-2',
					senderId: currentUser.id,
					content: 'I can wire the diagnostics and story audit into the release flow.',
					timestamp: new Date('2026-05-03T19:22:00'),
					status: 'read'
				},
				{
					id: 'm-3',
					senderId: participants.nina.id,
					content: 'Landing page copy is ready for review.',
					timestamp: new Date('2026-05-03T19:28:00'),
					status: 'read'
				}
			],
			accent: '#0f766e',
			summary: 'Group thread with unread work on launch coordination.'
		},
		{
			chat: {
				id: 'chat-design',
				participants: [currentUser, participants.ira],
				isGroup: false,
				lastMessage: {
					id: 'm-6',
					senderId: currentUser.id,
					content: 'The new navigation cleanup is already in the branch.',
					timestamp: new Date('2026-05-03T18:54:00'),
					status: 'delivered'
				},
				lastMessageTime: new Date('2026-05-03T18:54:00'),
				unreadCount: 0
			},
			messages: [
				{
					id: 'm-4',
					senderId: participants.ira.id,
					content: 'Can you make the demo pages feel more like tools than galleries?',
					timestamp: new Date('2026-05-03T18:40:00'),
					status: 'read'
				},
				{
					id: 'm-5',
					senderId: participants.ira.id,
					content: 'Especially for chat and diagnostics.',
					timestamp: new Date('2026-05-03T18:42:00'),
					status: 'read'
				},
				{
					id: 'm-6',
					senderId: currentUser.id,
					content: 'The new navigation cleanup is already in the branch.',
					timestamp: new Date('2026-05-03T18:54:00'),
					status: 'delivered'
				}
			],
			accent: '#1d4ed8',
			summary: 'One-on-one design feedback loop.'
		},
		{
			chat: {
				id: 'chat-support',
				name: 'Support Signals',
				participants: [currentUser, participants.sol, participants.marc],
				isGroup: true,
				lastMessage: {
					id: 'm-9',
					senderId: participants.sol.id,
					content: 'User reports dropped after the fix, keeping watch.',
					timestamp: new Date('2026-05-03T17:10:00'),
					status: 'read'
				},
				lastMessageTime: new Date('2026-05-03T17:10:00'),
				unreadCount: 1
			},
			messages: [
				{
					id: 'm-7',
					senderId: participants.marc.id,
					content: 'CPU spikes came from the old barrel imports again.',
					timestamp: new Date('2026-05-03T16:58:00'),
					status: 'read'
				},
				{
					id: 'm-8',
					senderId: currentUser.id,
					content: 'Narrow imports are in place for the hot components.',
					timestamp: new Date('2026-05-03T17:03:00'),
					status: 'read'
				},
				{
					id: 'm-9',
					senderId: participants.sol.id,
					content: 'User reports dropped after the fix, keeping watch.',
					timestamp: new Date('2026-05-03T17:10:00'),
					status: 'read'
				}
			],
			accent: '#b45309',
			summary: 'Operational signal feed with one unread checkpoint.'
		}
	]);

	const componentInventory = [
		'chat-list',
		'chat-item',
		'chat-header',
		'chat-window',
		'message-list',
		'message-item',
		'message-composer',
		'message-input',
		'message-status',
		'chat-preview',
		'user-status',
		'collaborative-editor'
	] as const;

	const filteredThreads = $derived.by(() => {
		return chatThreads.filter((entry) => {
			const haystack = `${entry.chat.name ?? ''} ${entry.summary} ${entry.chat.participants.map((item) => item.name).join(' ')}`.toLowerCase();
			const matchesSearch = draftSearch.trim() === '' || haystack.includes(draftSearch.toLowerCase());
			const matchesFilter =
				activeFilter === 'all' ||
				(activeFilter === 'unread' && (entry.chat.unreadCount ?? 0) > 0) ||
				(activeFilter === 'groups' && entry.chat.isGroup);
			return matchesSearch && matchesFilter;
		});
	});

	const activeThread = $derived.by(() => {
		return (
			filteredThreads.find((entry) => entry.chat.id === activeChatId) ??
			chatThreads.find((entry) => entry.chat.id === activeChatId) ??
			filteredThreads[0] ??
			chatThreads[0]
		);
	});

	const unreadCount = $derived.by(() =>
		chatThreads.reduce((sum, entry) => sum + (entry.chat.unreadCount ?? 0), 0)
	);

	const livePreviewMessages = $derived.by(() => {
		return activeThread.messages.slice(-4).map((message) => {
			const sender =
				message.senderId === currentUser.id
					? currentUser
					: activeThread.chat.participants.find((item) => item.id === message.senderId);
			return {
				author: sender?.name ?? 'Unknown',
				sender: sender?.name ?? 'Unknown',
				text: message.content,
				timestamp: formatClock(message.timestamp),
				isOwn: message.senderId === currentUser.id,
				status: message.status,
				avatar: sender?.avatar
			};
		});
	});

	$effect(() => {
		if (!filteredThreads.some((entry) => entry.chat.id === activeChatId) && filteredThreads[0]) {
			activeChatId = filteredThreads[0].chat.id;
		}
	});

	onDestroy(() => {
		for (const timer of replyTimers) {
			clearTimeout(timer);
		}
	});

	function formatClock(timestamp: Date): string {
		return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	function pushLog(entry: string) {
		actionLog = [entry, ...actionLog].slice(0, 8);
	}

	function selectChat(chat: Chat) {
		activeChatId = chat.id;
		chatThreads = chatThreads.map((entry) =>
			entry.chat.id === chat.id
				? {
						...entry,
						chat: {
							...entry.chat,
							unreadCount: 0
						}
					}
				: entry
		);
		pushLog(`Opened ${chat.name ?? deriveChatName(chat)}.`);
	}

	function removeChat(chat: Chat) {
		chatThreads = chatThreads.filter((entry) => entry.chat.id !== chat.id);
		pushLog(`Removed ${chat.name ?? deriveChatName(chat)} from the demo list.`);
	}

	function deriveChatName(chat: Chat): string {
		if (chat.name) return chat.name;
		return chat.participants.find((item) => item.id !== currentUser.id)?.name ?? 'Direct chat';
	}

	function sendMessage(text: string) {
		const content = text.trim();
		if (!content || !activeThread) return;

		const sentAt = new Date();
		const outgoing: Message = {
			id: crypto.randomUUID(),
			senderId: currentUser.id,
			content,
			timestamp: sentAt,
			status: 'delivered'
		};

		chatThreads = chatThreads.map((entry) =>
			entry.chat.id === activeThread.chat.id
				? {
						...entry,
						chat: {
							...entry.chat,
							lastMessage: outgoing,
							lastMessageTime: sentAt,
							unreadCount: 0
						},
						messages: [...entry.messages, outgoing]
					}
				: entry
		);

		pushLog(`You sent: "${content}"`);
		simulateReply(activeThread.chat.id);
	}

	function simulateReply(chatId: string) {
		const replyMap: Record<string, string[]> = {
			'chat-product': [
				'Copy that. I will sync the launch board and update the blockers.',
				'Good. Add that note into the release checklist as well.'
			],
			'chat-design': [
				'That helps. Ship the demo with the workbench framing, not another gallery.',
				'Looks stronger already. Keep the right rail for live component context.'
			],
			'chat-support': [
				'Received. I will watch for another thirty minutes.',
				'Nice. That confirms the import cleanup actually changed runtime behaviour.'
			]
		};

		const timer = window.setTimeout(() => {
			const thread = chatThreads.find((entry) => entry.chat.id === chatId);
			if (!thread) return;

			const responders = thread.chat.participants.filter((item) => item.id !== currentUser.id);
			const responder = responders[Math.floor(Math.random() * responders.length)] ?? participants.alex;
			const templates = replyMap[chatId] ?? ['Acknowledged.'];
			const replyContent = templates[Math.floor(Math.random() * templates.length)];
			const replyAt = new Date();
			const incoming: Message = {
				id: crypto.randomUUID(),
				senderId: responder.id,
				content: replyContent,
				timestamp: replyAt,
				status: 'read'
			};

			chatThreads = chatThreads.map((entry) =>
				entry.chat.id === chatId
					? {
							...entry,
							chat: {
								...entry.chat,
								lastMessage: incoming,
								lastMessageTime: replyAt,
								unreadCount: entry.chat.id === activeChatId ? 0 : (entry.chat.unreadCount ?? 0) + 1
							},
							messages: [...entry.messages, incoming]
						}
					: entry
			);

			if (chatId === activeChatId) {
				pushLog(`${responder.name} replied in ${thread.chat.name ?? deriveChatName(thread.chat)}.`);
			}
		}, 900 + Math.round(Math.random() * 1200));

		replyTimers = [...replyTimers, timer];
	}

	function markUnreadSweep() {
		chatThreads = chatThreads.map((entry, index) => ({
			...entry,
			chat: {
				...entry.chat,
				unreadCount: entry.chat.id === activeChatId ? 0 : index + 1
			}
		}));
		pushLog('Unread counters reseeded for demo review.');
	}

	function createIncidentPing() {
		const supportThread = chatThreads.find((entry) => entry.chat.id === 'chat-support');
		if (!supportThread) return;

		const incident: Message = {
			id: crypto.randomUUID(),
			senderId: participants.sol.id,
			content: 'New signal: one browser-only import issue reproduced in a legacy route.',
			timestamp: new Date(),
			status: 'read'
		};

		chatThreads = chatThreads.map((entry) =>
			entry.chat.id === supportThread.chat.id
				? {
						...entry,
						chat: {
							...entry.chat,
							lastMessage: incident,
							lastMessageTime: incident.timestamp,
							unreadCount: entry.chat.id === activeChatId ? 0 : (entry.chat.unreadCount ?? 0) + 1
						},
						messages: [...entry.messages, incident]
					}
				: entry
		);

		pushLog('Support Signals received a synthetic incident ping.');
	}
</script>

<div class:chat-workbench--panel={mode === 'panel'} class="chat-workbench">
	<header class="hero">
		<div class="hero__copy">
			<p class="eyebrow">Communication Domain</p>
			<h1>Chat workbench instead of another passive component gallery</h1>
			<p class="lede">
				This route assembles the communication primitives into one live scenario: list, header,
				thread, composer, preview, user presence and runtime actions.
			</p>
		</div>

		<div class="hero__metrics">
			<div class="metric-card">
				<span class="metric-card__value">{chatThreads.length}</span>
				<span class="metric-card__label">chat scenarios</span>
			</div>
			<div class="metric-card">
				<span class="metric-card__value">{unreadCount}</span>
				<span class="metric-card__label">unread signals</span>
			</div>
			<div class="metric-card">
				<span class="metric-card__value">{componentInventory.length}</span>
				<span class="metric-card__label">communication pieces</span>
			</div>
		</div>
	</header>

	<section class="toolbar">
		<label class="search-shell">
			<Icon name="search" size="sm" />
			<input
				type="text"
				placeholder="Filter chats by name, participants or summary"
				bind:value={draftSearch}
			/>
		</label>

		<div class="filter-row">
			{#each ['all', 'unread', 'groups'] as filter}
				<button
					type="button"
					class:active={activeFilter === filter}
					onclick={() => (activeFilter = filter as ChatFilter)}
				>
					{filter}
				</button>
			{/each}
		</div>

		<div class="action-row">
			<Button variant="secondary" size="sm" onclick={markUnreadSweep}>Seed unread</Button>
			<Button variant="ghost" size="sm" onclick={createIncidentPing}>Inject incident</Button>
		</div>
	</section>

	<div class="workspace">
		<aside class="workspace__rail">
			<div class="panel panel--chat-list">
				<div class="panel__head">
					<div>
						<p class="panel__eyebrow">Chat List</p>
						<h2>Conversation entry points</h2>
					</div>
					<Badge variant="default" size="sm">{filteredThreads.length}</Badge>
				</div>

				<div class="list-frame">
					<ChatList
						chats={filteredThreads.map((entry) => entry.chat)}
						currentUser={currentUser}
						activeChatId={activeThread.chat.id}
						onChatSelect={selectChat}
						onChatDelete={removeChat}
					/>
				</div>
			</div>
		</aside>

		<main class="workspace__main">
			<div class="panel panel--conversation">
				<div class="conversation-shell">
					<ChatHeader
						chat={activeThread.chat}
						currentUser={currentUser}
						showActions={true}
						onCall={() => pushLog(`Started voice call for ${activeThread.chat.name ?? deriveChatName(activeThread.chat)}.`)}
						onVideoCall={() => pushLog(`Started video call for ${activeThread.chat.name ?? deriveChatName(activeThread.chat)}.`)}
						onInfo={() => pushLog(`Opened chat info for ${activeThread.chat.name ?? deriveChatName(activeThread.chat)}.`)}
					/>

					<div class="thread-shell">
						<MessageList
							messages={activeThread.messages}
							currentUser={currentUser}
							onMessageAction={(action, message) => pushLog(`${action} on "${message.content.slice(0, 36)}"`)}
							onMessageReaction={(messageId, reaction) => pushLog(`Reaction ${reaction} on ${messageId}`)}
						/>
					</div>

					<div class="composer-shell">
						<MessageComposer
							placeholder={`Message ${activeThread.chat.name ?? deriveChatName(activeThread.chat)}`}
							showAttachmentButton={true}
							showVoiceButton={true}
							onSendMessage={sendMessage}
							onAttachmentClick={() => pushLog('Attachment button pressed.')}
							onVoiceClick={() => pushLog('Voice capture toggled.')}
						/>
					</div>
				</div>
			</div>
		</main>

		<aside class="workspace__inspector">
			<div class="panel panel--presence">
				<div class="panel__head">
					<div>
						<p class="panel__eyebrow">Presence</p>
						<h2>Users and state</h2>
					</div>
				</div>

				<div class="presence-grid">
					<UserStatus user={currentUser} showAvatar={true} showName={true} showStatusText={true} />
					{#each Object.values(participants) as user}
						<UserStatus user={user} showAvatar={true} showName={true} showStatusText={true} />
					{/each}
				</div>
			</div>

			<div class="panel panel--preview">
				<div class="panel__head">
					<div>
						<p class="panel__eyebrow">Chat Preview</p>
						<h2>Condensed transcript</h2>
					</div>
					<span class="accent-dot" style={`--accent:${activeThread.accent}`}></span>
				</div>

				<ChatPreview
					title={activeThread.chat.name ?? deriveChatName(activeThread.chat)}
					participants={activeThread.chat.participants.map((item) => item.name)}
					messages={livePreviewMessages}
					showAvatars={false}
					maxVisibleMessages={4}
				/>
			</div>

			<div class="panel panel--inventory">
				<div class="panel__head">
					<div>
						<p class="panel__eyebrow">Inventory</p>
						<h2>What this domain exposes</h2>
					</div>
				</div>

				<div class="inventory-grid">
					{#each componentInventory as name}
						<span>{name}</span>
					{/each}
				</div>
			</div>

			<div class="panel panel--log">
				<div class="panel__head">
					<div>
						<p class="panel__eyebrow">Action Log</p>
						<h2>Live interaction trace</h2>
					</div>
				</div>

				<div class="log-list">
					{#each actionLog as entry}
						<p>{entry}</p>
					{/each}
				</div>
			</div>
		</aside>
	</div>
</div>

<style>
	.chat-workbench {
		--surface: rgba(250, 247, 242, 0.92);
		--surface-strong: rgba(255, 252, 247, 0.97);
		--line: rgba(71, 85, 105, 0.16);
		--muted: #6b7280;
		--headline: #172033;
		--accent-ink: #0f766e;
		--color-background-primary: #fffdf8;
		--color-background-secondary: #f3ede4;
		--color-border-primary: rgba(71, 85, 105, 0.18);
		--color-border-secondary: rgba(71, 85, 105, 0.28);
		--color-text-primary: #172033;
		--color-text-secondary: #64748b;
		--color-text-tertiary: #94a3b8;
		--color-text-inverse: #f8fafc;
		--color-primary-500: #0f766e;
		--color-primary-600: #0b5f59;
		max-width: 1600px;
		margin: 0 auto;
		padding: 1.25rem;
		display: grid;
		gap: 1rem;
		background:
			radial-gradient(circle at top left, rgba(249, 115, 22, 0.11), transparent 26%),
			radial-gradient(circle at top right, rgba(14, 165, 233, 0.1), transparent 30%),
			linear-gradient(180deg, #f3efe8 0%, #ece6dd 100%);
		color: #1f2937;
		min-height: 100%;
		box-sizing: border-box;
	}

	.chat-workbench--panel {
		max-width: none;
		margin: 0;
		min-height: 100%;
	}

	.hero,
	.toolbar,
	.panel {
		border: 1px solid var(--line);
		border-radius: 1.6rem;
		background: var(--surface);
		backdrop-filter: blur(18px);
		box-shadow:
			0 24px 70px rgba(15, 23, 42, 0.08),
			inset 0 1px 0 rgba(255, 255, 255, 0.62);
	}

	.hero {
		padding: 1.35rem 1.5rem;
		display: grid;
		grid-template-columns: minmax(0, 1.8fr) minmax(320px, 0.9fr);
		gap: 1rem;
		background:
			linear-gradient(145deg, rgba(255, 251, 246, 0.95), rgba(244, 238, 229, 0.9)),
			linear-gradient(180deg, rgba(255, 255, 255, 0.25), transparent);
	}

	.chat-workbench--panel .hero {
		grid-template-columns: minmax(0, 1.7fr) minmax(260px, 0.8fr);
	}

	.eyebrow,
	.panel__eyebrow {
		margin: 0 0 0.45rem;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #64748b;
	}

	h1,
	h2,
	p {
		margin: 0;
	}

	h1 {
		max-width: 14ch;
		font-size: clamp(2.1rem, 4vw, 3.4rem);
		line-height: 0.96;
		color: var(--headline);
	}

	.chat-workbench--panel h1 {
		max-width: 18ch;
		font-size: clamp(1.8rem, 3vw, 2.6rem);
	}

	.lede {
		margin-top: 0.85rem;
		max-width: 70ch;
		line-height: 1.6;
		color: var(--muted);
	}

	.hero__metrics {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
		align-self: end;
	}

	.metric-card {
		display: grid;
		gap: 0.28rem;
		padding: 0.9rem 1rem;
		border-radius: 1rem;
		background: linear-gradient(180deg, rgba(255, 253, 249, 0.96), rgba(240, 234, 225, 0.9));
		border: 1px solid rgba(148, 163, 184, 0.18);
	}

	.metric-card__value {
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--headline);
	}

	.metric-card__label {
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #64748b;
	}

	.toolbar {
		padding: 0.95rem 1rem;
		display: grid;
		grid-template-columns: minmax(0, 1.6fr) auto auto;
		gap: 0.8rem;
		align-items: center;
		background:
			linear-gradient(180deg, rgba(255, 252, 247, 0.96), rgba(246, 240, 232, 0.92));
	}

	.search-shell {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		padding: 0.75rem 0.9rem;
		border-radius: 999px;
		background: var(--surface-strong);
		border: 1px solid rgba(148, 163, 184, 0.22);
	}

	.search-shell input {
		width: 100%;
		border: 0;
		background: transparent;
		outline: none;
		font: inherit;
		color: var(--headline);
	}

	.filter-row,
	.action-row {
		display: flex;
		gap: 0.45rem;
		flex-wrap: wrap;
	}

	.filter-row button {
		border: 1px solid rgba(148, 163, 184, 0.2);
		background: rgba(255, 252, 247, 0.94);
		color: var(--muted);
		border-radius: 999px;
		padding: 0.6rem 0.9rem;
		font: inherit;
		text-transform: capitalize;
		cursor: pointer;
	}

	.filter-row button.active {
		background: #172033;
		color: white;
		border-color: #172033;
	}

	.workspace {
		display: grid;
		grid-template-columns: 320px minmax(0, 1fr) 360px;
		gap: 1rem;
		min-height: 74vh;
	}

	.chat-workbench--panel .workspace {
		min-height: calc(100vh - 16rem);
	}

	.workspace__rail,
	.workspace__main,
	.workspace__inspector {
		display: grid;
		gap: 1rem;
		align-content: start;
	}

	.panel {
		padding: 1rem;
		display: grid;
		gap: 0.9rem;
		background:
			linear-gradient(180deg, rgba(255, 251, 246, 0.94), rgba(246, 240, 232, 0.9));
	}

	.panel__head {
		display: flex;
		align-items: start;
		justify-content: space-between;
		gap: 0.75rem;
	}

	.panel__head h2 {
		font-size: 1rem;
		color: var(--headline);
	}

	.list-frame {
		min-height: 620px;
		border-radius: 1rem;
		overflow: hidden;
		background: rgba(247, 241, 234, 0.9);
		border: 1px solid rgba(148, 163, 184, 0.18);
	}

	.conversation-shell {
		display: grid;
		grid-template-rows: auto minmax(0, 1fr) auto;
		min-height: 720px;
		border-radius: 1.2rem;
		overflow: hidden;
		background:
			linear-gradient(180deg, rgba(255, 252, 248, 0.98), rgba(242, 236, 227, 0.92)),
			linear-gradient(135deg, rgba(15, 118, 110, 0.06), transparent);
		border: 1px solid rgba(148, 163, 184, 0.16);
	}

	.thread-shell {
		min-height: 0;
	}

	.thread-shell :global(.message-list) {
		background: transparent;
	}

	.composer-shell {
		padding: 0.9rem;
		border-top: 1px solid rgba(148, 163, 184, 0.2);
		background: rgba(255, 252, 247, 0.88);
	}

	.presence-grid {
		display: grid;
		gap: 0.75rem;
	}

	.accent-dot {
		width: 0.85rem;
		height: 0.85rem;
		border-radius: 999px;
		background: var(--accent);
		box-shadow: 0 0 0 8px color-mix(in srgb, var(--accent) 16%, transparent);
		margin-top: 0.25rem;
	}

	.inventory-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem;
	}

	.inventory-grid span {
		padding: 0.45rem 0.7rem;
		border-radius: 999px;
		background: rgba(229, 223, 214, 0.9);
		color: #334155;
		font-size: 0.82rem;
	}

	.log-list {
		display: grid;
		gap: 0.55rem;
	}

	.log-list p {
		padding: 0.75rem 0.85rem;
		border-radius: 0.95rem;
		background: rgba(255, 252, 248, 0.9);
		border: 1px solid rgba(148, 163, 184, 0.14);
		color: #334155;
		line-height: 1.45;
	}

	.chat-workbench :global(.chat-list) {
		background:
			linear-gradient(180deg, rgba(255, 253, 249, 0.98), rgba(242, 235, 226, 0.94));
		border-right: 0;
	}

	.chat-workbench :global(.chat-item) {
		padding: 1rem 1rem 1rem 1.1rem;
		gap: 0.85rem;
		border-bottom: 1px solid rgba(148, 163, 184, 0.14);
		background: transparent;
		transition:
			background-color 160ms ease,
			transform 160ms ease,
			box-shadow 160ms ease;
	}

	.chat-workbench :global(.chat-item:hover) {
		background: rgba(255, 255, 255, 0.54);
		transform: translateX(2px);
	}

	.chat-workbench :global(.chat-item.active) {
		background:
			linear-gradient(90deg, rgba(15, 118, 110, 0.12), rgba(255, 255, 255, 0.78));
		box-shadow: inset 3px 0 0 var(--accent-ink);
	}

	.chat-workbench :global(.chat-name) {
		font-size: 0.92rem;
		font-weight: 650;
		color: var(--headline);
	}

	.chat-workbench :global(.last-message) {
		font-size: 0.79rem;
		color: #667085;
	}

	.chat-workbench :global(.c-chat-header) {
		padding: 1rem 1.15rem;
		background:
			linear-gradient(180deg, rgba(255, 252, 248, 0.96), rgba(243, 236, 228, 0.9));
		border-bottom: 1px solid rgba(148, 163, 184, 0.18);
	}

	.chat-workbench :global(.chat-details) {
		gap: 0.18rem;
	}

	.chat-workbench :global(.chat-name) :global(strong) {
		font-weight: 650;
	}

	.chat-workbench :global(.chat-actions button),
	.chat-workbench :global(.chat-actions .c-button),
	.chat-workbench :global(.message-actions button) {
		border-radius: 999px;
	}

	.chat-workbench :global(.message-list) {
		padding: 1.15rem 1.2rem 1.3rem;
		gap: 0.8rem;
		background:
			radial-gradient(circle at top, rgba(15, 118, 110, 0.04), transparent 28%),
			linear-gradient(180deg, rgba(245, 240, 232, 0.96), rgba(240, 233, 224, 0.92));
	}

	.chat-workbench :global(.message-container) {
		align-items: flex-end;
	}

	.chat-workbench :global(.message-bubble) {
		max-width: min(72%, 620px);
		padding: 0.8rem 0.95rem;
		border-radius: 1.25rem;
		border: 1px solid rgba(148, 163, 184, 0.16);
		box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
	}

	.chat-workbench :global(.message-bubble--own),
	.chat-workbench :global(.self),
	.chat-workbench :global(.is-own) {
		background: linear-gradient(180deg, #0f766e, #115e59);
		color: #f8fafc;
	}

	.chat-workbench :global(.message-bubble .text-xs),
	.chat-workbench :global(.message-bubble .message-meta),
	.chat-workbench :global(.message-bubble .message-status) {
		opacity: 0.78;
	}

	.chat-workbench :global(.message-actions) {
		margin-top: 0.45rem;
		padding-top: 0.15rem;
	}

	.chat-workbench :global(.action-button) {
		background: rgba(255, 255, 255, 0.46);
		border: 1px solid rgba(148, 163, 184, 0.15);
	}

	.chat-workbench :global(.action-button:hover) {
		background: rgba(255, 255, 255, 0.72);
	}

	.chat-workbench :global(.reactions-picker) {
		background: rgba(255, 252, 247, 0.98);
		border: 1px solid rgba(148, 163, 184, 0.22);
		backdrop-filter: blur(12px);
	}

	.chat-workbench :global(.c-message-composer),
	.chat-workbench :global(.message-composer) {
		border-radius: 1.15rem;
		background: rgba(255, 252, 247, 0.96);
		border: 1px solid rgba(148, 163, 184, 0.18);
		padding: 0.4rem;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.68);
	}

	.chat-workbench :global(form) :global(textarea),
	.chat-workbench :global(.message-composer textarea),
	.chat-workbench :global(.c-message-composer textarea) {
		min-height: 44px;
		border-radius: 1rem;
		background: rgba(243, 236, 228, 0.82);
		border: 1px solid transparent;
		color: var(--headline);
	}

	.chat-workbench :global(.message-composer textarea:focus),
	.chat-workbench :global(.c-message-composer textarea:focus) {
		background: rgba(255, 255, 255, 0.96);
		border-color: rgba(15, 118, 110, 0.24);
		box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.08);
	}

	.chat-workbench :global(.message-composer button),
	.chat-workbench :global(.c-message-composer button) {
		border-radius: 999px;
	}

	.chat-workbench :global([role='status']) {
		color: var(--muted);
	}

	@media (max-width: 1260px) {
		.hero,
		.workspace {
			grid-template-columns: 1fr;
		}

		.hero__metrics {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 860px) {
		.chat-workbench {
			padding: 0.75rem;
		}

		.toolbar {
			grid-template-columns: 1fr;
		}

		.hero__metrics {
			grid-template-columns: 1fr;
		}

		.list-frame,
		.conversation-shell {
			min-height: auto;
		}
	}
</style>
