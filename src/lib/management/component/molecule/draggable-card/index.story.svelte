<script lang="ts">
	import DraggableCard from './index.svelte';
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'draggable', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'showHandle', type: 'boolean', defaultValue: true },
		{ name: 'showMenu', type: 'boolean', defaultValue: true },
		{ name: 'selected', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'compact'] }
	];

	const data = {
		id: 'card-refactor-backlog-commands',
		title: 'Refactor backlog commands',
		description: 'Prepare a reusable action layer for backlog file operations on disk.',
		tags: ['backlog', 'filesystem', 'menu'],
		dueDate: new Date('2026-05-12T12:00:00.000Z'),
		assignedTo: 'Dmitrii'
	};
</script>

<Story
	id="molecules-draggable-card"
	title="Molecules / Interaction / Card / DraggableCard"
	component={DraggableCard}
	category="Molecules/Interaction/Card"
	description="Composable draggable card with compact and default variants."
	{controls}
>
	{#snippet children(args: any)}
		<div class="max-w-md rounded-xl bg-[var(--color-background-secondary)] p-4">
			<DraggableCard
				{data}
				draggable={args.draggable as boolean}
				disabled={args.disabled as boolean}
				showHandle={args.showHandle as boolean}
				showMenu={args.showMenu as boolean}
				selected={args.selected as boolean}
				variant={args.variant as 'default' | 'compact'}
			/>
		</div>
	{/snippet}
</Story>
