<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Clickable from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'hoverEffect', type: 'boolean', defaultValue: true },
		{ name: 'pressEffect', type: 'boolean', defaultValue: true },
		{ name: 'cursor', type: 'select', defaultValue: 'pointer', options: ['pointer', 'default', 'grab', 'not-allowed'] }
	];

	let eventName = $state('click the card');
	let count = $state(0);
</script>

<Story
	{controls}
	component={Clickable}
	title="Clickable"
	description="Gesture wrapper for click, double click, and context menu interactions."
>
	{#snippet children(values: any)}
		<div class="grid gap-4 rounded-3xl bg-slate-50 p-6">
			<Clickable
				disabled={Boolean(values.disabled)}
				hoverEffect={Boolean(values.hoverEffect)}
				pressEffect={Boolean(values.pressEffect)}
				cursor={values.cursor as any}
				onClick={() => {
					count += 1;
					eventName = 'click';
				}}
				onDblClick={() => {
					eventName = 'double click';
				}}
				onContextMenu={(event) => {
					event.preventDefault();
					eventName = 'context menu';
				}}
			>
				{#snippet children()}
					<div class="flex min-h-28 items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4">
						<span class="font-medium text-slate-900">Interactive story card</span>
						<strong class="text-2xl text-sky-700">{count}</strong>
					</div>
				{/snippet}
			</Clickable>
			<p class="text-sm text-slate-500">Last event: {eventName}</p>
		</div>
	{/snippet}
</Story>
