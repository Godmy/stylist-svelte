<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import DragAndDrop from './index.svelte';

	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
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
		dragEvents = [`${timestamp} - ${name}${data ? ': ' + JSON.stringify(data) : ''}`, ...dragEvents].slice(0, 10);
	}
</script>

<Story {controls} component={DragAndDrop} title="Drag-and-Drop Component" description="РђС‚РѕРј РґР»СЏ РїРµСЂРµС‚Р°СЃРєРёРІР°РЅРёСЏ СЌР»РµРјРµРЅС‚РѕРІ Рё Р·РѕРЅ СЃР±СЂРѕСЃР°">
	{#snippet children(values: any)}
		<div class="w-full rounded-lg py-4">
			<div class="grid grid-cols-2 gap-4">
				<!-- Draggable item -->
				<DragAndDrop
					{...values}
					draggable={values.draggable}
					dropzone={false}
					class="p-6 bg-[var(--color-background-secondary)] rounded-lg"
					dragData={{ source: 'draggable-item', timestamp: Date.now() }}
					onDragStart={() => logEvent('dragStart')}
					onDragEnd={() => logEvent('dragEnd')}
				>
					{#snippet children()}
						<div class="text-center">
							<p class="font-medium">рџ“¦ РџРµСЂРµС‚Р°С‰Рё РјРµРЅСЏ</p>
							<p class="text-xs text-muted mt-1">Drag me to the drop zone</p>
						</div>
					{/snippet}
				</DragAndDrop>

				<!-- Drop zone -->
				<DragAndDrop
					{...values}
					draggable={false}
					dropzone={true}
					class="p-6 bg-[var(--color-background-tertiary)] rounded-lg border-2 border-dashed"
					onDrop={(e: any) => {
						const data = e.dragData;
						droppedData = data;
						logEvent('drop', data);
					}}
					onDragEnter={() => logEvent('dragEnter')}
					onDragLeave={() => logEvent('dragLeave')}
				>
					{#snippet children()}
						<div class="text-center">
							<p class="font-medium">рџ“Ґ Р—РѕРЅР° СЃР±СЂРѕСЃР°</p>
							{#if droppedData}
								<p class="text-xs text-muted mt-2">РџРѕСЃР»РµРґРЅРёРµ РґР°РЅРЅС‹Рµ: {JSON.stringify(droppedData)}</p>
							{/if}
						</div>
					{/snippet}
				</DragAndDrop>
			</div>

			<!-- Event log -->
			<div class="mt-4 p-4 bg-[var(--color-background-tertiary)] rounded-lg">
				<p class="text-sm font-medium mb-2">РЎРѕР±С‹С‚РёСЏ:</p>
				<ul class="text-xs text-muted space-y-1">
					{#each dragEvents as event}
						<li>{event}</li>
					{/each}
				</ul>
			</div>
		</div>
	{/snippet}
</Story>

