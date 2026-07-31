<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DragAndDrop from './index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{
			name: 'draggable',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'dropzone',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'showDragHandle',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'dragCursor',
			type: 'select',
			options: ['grab', 'grabbing', 'move', 'default'],
			defaultValue: 'grab'
		},
		{
			name: 'variant',
			type: 'select',
			options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
			defaultValue: 'default'
		}
	];

	let dragEvents = $state<string[]>([]);
	let droppedData = $state<any>(null);

	function logEvent(name: string, data?: any) {
		const timestamp = new Date().toLocaleTimeString();
		dragEvents = [
			`${timestamp} - ${name}${data ? ': ' + JSON.stringify(data) : ''}`,
			...dragEvents
		].slice(0, 10);
	}
</script>

<Story
	{controls}
	component={DragAndDrop}
	title="Drag-and-Drop Component"
	description="Атом для перетаскивания элементов и зон сброса"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">
				<!-- Draggable item -->
				<DragAndDrop
					{...values}
					draggable={values.draggable}
					dropzone={false}
					class="_c3"
					dragData={{ source: 'draggable-item', timestamp: Date.now() }}
					onDragStart={() => logEvent('dragStart')}
					onDragEnd={() => logEvent('dragEnd')}
				>
					{#snippet children()}
						<div class="_c4">
							<p class="_c5">📦 Перетащи меня</p>
							<p class="text-muted _c6">Drag me to the drop zone</p>
						</div>
					{/snippet}
				</DragAndDrop>

				<!-- Drop zone -->
				<DragAndDrop
					{...values}
					draggable={false}
					dropzone={true}
					class="_c7"
					onDrop={(e: any) => {
						const data = e.dragData;
						droppedData = data;
						logEvent('drop', data);
					}}
					onDragEnter={() => logEvent('dragEnter')}
					onDragLeave={() => logEvent('dragLeave')}
				>
					{#snippet children()}
						<div class="_c4">
							<p class="_c5">📥 Зона сброса</p>
							{#if droppedData}
								<p class="text-muted _c8">
									Последние данные: {JSON.stringify(droppedData)}
								</p>
							{/if}
						</div>
					{/snippet}
				</DragAndDrop>
			</div>

			<!-- Event log -->
			<div class="_c9">
				<p class="_c10">События:</p>
				<ul class="text-muted _c11">
					{#each dragEvents as event}
						<li>{event}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		width: 100%;
		border-radius: 0.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c10 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	._c11 {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c11 > * + * {
		margin-top: 0.25rem;
	}
	._c2 {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem;
	}
	._c3 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c4 {
		text-align: center;
	}
	._c5 {
		font-weight: 500;
	}
	._c6 {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c7 {
		border-radius: 0.5rem;
		border-width: 2px;
		border-style: dashed;
		background-color: var(--color-background-tertiary);
		padding: 1.5rem;
	}
	._c8 {
		margin-top: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c9 {
		margin-top: 1rem;
		border-radius: 0.5rem;
		background-color: var(--color-background-tertiary);
		padding: 1rem;
	}
</style>
