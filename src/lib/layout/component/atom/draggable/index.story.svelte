<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Draggable from './index.svelte';

	const controls: SlotStory[] = [
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
		<div class="_c1">
			<div class="_c2">
				<Draggable
					draggable
					showHandle={Boolean(values.showHandle)}
					disabled={Boolean(values.disabled)}
					dragData={{ label: 'story-card' }}
					class="_c3"
					onDragStart={() => {
						dragStatus = 'drag start';
					}}
					onDragEnd={() => {
						dragStatus = 'drag end';
					}}
				>
					{#snippet children()}
						<div class="_c4">Drag this card</div>
					{/snippet}
				</Draggable>

				<Draggable
					dropzone
					class="_c5"
					onDragEnter={() => {
						dragStatus = 'entered dropzone';
					}}
					onDrop={(event: DragEvent & { dragData?: { label?: string } }) => {
						droppedPayload = event.dragData?.label ?? 'unknown';
						dragStatus = 'drop';
					}}
				>
					{#snippet children()}
						<div class="_c6">Drop target</div>
					{/snippet}
				</Draggable>
			</div>
			<p class="_c7">{dragStatus}; payload: {droppedPayload}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		display: grid;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c3 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}
	._c4 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c5 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-secondary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c6 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--color-text-secondary);
	}
	._c7 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
