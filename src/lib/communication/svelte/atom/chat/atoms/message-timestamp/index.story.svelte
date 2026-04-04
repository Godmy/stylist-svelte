<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import MessageTimestamp from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'formatStyle', type: 'select', defaultValue: 'datetime', options: ['datetime', 'time', 'date'] },
		{ name: 'showRelative', type: 'boolean', defaultValue: false },
		{ name: 'minutesAgo', type: 'number', defaultValue: 5, min: 0, max: 180 }
	];
</script>

<Story
	{controls}
	component={MessageTimestamp}
	title="MessageTimestamp"
	category="Atoms/Interaction/Chat"
	description="Formatted message timestamp with optional relative mode"
>
	{#snippet children(values: any)}
		<MessageTimestamp
			timestamp={new Date(Date.now() - (Number(values.minutesAgo) || 0) * 60_000)}
			formatStyle={values.formatStyle as 'datetime' | 'time' | 'date'}
			showRelative={values.showRelative as boolean}
		/>
	{/snippet}
</Story>



