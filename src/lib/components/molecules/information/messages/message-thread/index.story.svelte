<script>
	import MessageThread from './index.svelte';

	const messages = [
		{ id: '1', text: 'Hello!', sender: 'contact', timestamp: '2:30 PM', isOwn: false },
		{ id: '2', text: 'Hi there!', sender: 'user', timestamp: '2:31 PM', isOwn: true },
		{ id: '3', text: 'How are you?', sender: 'contact', timestamp: '2:32 PM', isOwn: false },
		{ id: '4', text: 'I am good, thanks!', sender: 'user', timestamp: '2:33 PM', isOwn: true }
	];
</script>

<div class="h-96 p-4">
	<h1>MessageThread Story</h1>
	<MessageThread {messages} class="my-2 h-full" />
</div>
