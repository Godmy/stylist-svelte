<script lang="ts">
	import MessageMeta from './index.svelte';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

	const message = {
		id: '1',
		senderId: 'user1',
		content: 'Test message',
		timestamp: new Date(2023, 5, 15, 14, 30),
		status: 'read'
	};

	const controls = [
		{
			name: 'showTimestamp',
			type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
			defaultValue: true
		},
		{
			name: 'showStatus',
			type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
			defaultValue: true
		}
	];
</script>

<Story
	{controls}
	component={MessageMeta}
	title="MessageMeta"
	category="Atoms/Information/Messages"
	description="Displays metadata for a message including timestamp and status."
	tags={['message', 'meta', 'timestamp', 'status']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h1 class="_c2">MessageMeta Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive MessageMeta</h2>
				<MessageMeta
					{message}
					showTimestamp={values.showTimestamp}
					showStatus={values.showStatus}
				/>
			</div>

			<div class="_c5">
				<div class="_c6">
					<h2 class="_c4">With Timestamp Only</h2>
					<MessageMeta {message} showTimestamp={true} showStatus={false} />
				</div>

				<div class="_c6">
					<h2 class="_c4">With Status Only</h2>
					<MessageMeta {message} showTimestamp={false} showStatus={true} />
				</div>

				<div class="_c6">
					<h2 class="_c4">Without Meta Info</h2>
					<MessageMeta {message} showTimestamp={false} showStatus={false} />
				</div>

				<div class="_c6">
					<h2 class="_c4">Default MessageMeta</h2>
					<MessageMeta {message} showTimestamp={true} showStatus={true} />
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		margin-bottom: 1.5rem;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c5 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c6 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
</style>
