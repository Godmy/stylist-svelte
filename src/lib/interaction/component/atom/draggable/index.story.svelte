<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Draggable from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showHandle', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];

	let droppedPayload = $state('none');
	let dragStatus = $state('drag the card into the target');
</script>

<Story
	{controls}
	component={Draggable}
	title="Draggable"
	description="Drag source and dropzone primitive for pointer-based transfer scenarios."
>
	{#snippet children(values: any)}
		<div class="grid gap-4 rounded-3xl bg-slate-50 p-6">
			<div class="grid gap-4 md:grid-cols-2">
				<Draggable
					draggable
					showHandle={Boolean(values.showHandle)}
					disabled={Boolean(values.disabled)}
					dragData={{ label: 'story-card' }}
					class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
					onDragStart={() => {
						dragStatus = 'drag start';
					}}
					onDragEnd={() => {
						dragStatus = 'drag end';
					}}
				>
					{#snippet children()}
						<div class="min-h-28 content-center text-center font-medium text-slate-900">Drag this card</div>
					{/snippet}
				</Draggable>

				<Draggable
					dropzone
					class="rounded-2xl border border-dashed border-slate-300 bg-white p-5"
					onDragEnter={() => {
						dragStatus = 'entered dropzone';
					}}
					onDrop={(event: DragEvent & { dragData?: { label?: string } }) => {
						droppedPayload = event.dragData?.label ?? 'unknown';
						dragStatus = 'drop';
					}}
				>
					{#snippet children()}
						<div class="min-h-28 content-center text-center text-slate-500">Drop target</div>
					{/snippet}
				</Draggable>
			</div>
			<p class="text-sm text-slate-500">{dragStatus}; payload: {droppedPayload}</p>
		</div>
	{/snippet}
</Story>
