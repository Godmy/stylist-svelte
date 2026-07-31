<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Notification from './index.svelte';

	type Props = {
		title: string;
		message: string;
		type: 'info' | 'success' | 'warning' | 'error';
		showIcon: boolean;
	};

	const controls: SlotStory[] = [
		{
			name: 'title',
			type: 'text',
			defaultValue: 'Notification Title'
		},
		{
			name: 'message',
			type: 'text',
			defaultValue: 'This is a notification message.'
		},
		{
			name: 'type',
			type: 'select',
			defaultValue: 'info',
			options: ['info', 'success', 'warning', 'error']
		},
		{
			name: 'showIcon',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story
	id="molecules-notification"
	title="Notification"
	component={Notification}
	category="Molecules"
	description="A component to display notifications to the user."
	tags={['message', 'alert', 'toast']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h2 class="_c2">Notification</h2>
			<div class="_c3">
				<Notification
					title={values.title}
					message={values.message}
					type={values.type}
					showIcon={values.showIcon}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
	}
	._c3 > * + * {
		margin-top: 1rem;
	}
</style>
