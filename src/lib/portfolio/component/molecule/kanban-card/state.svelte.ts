import { untrack } from 'svelte';
import type { KanbanCardStateProps } from '$stylist/portfolio/type/alias/kanban-card-state-props';

import type { TOKEN_PRIORITY } from '$stylist/calendar/const/array/priority';
export function createKanbanCardState(props: KanbanCardStateProps) {
	const card = $derived(
		props.card as {
			title: string;
			priority?: (typeof TOKEN_PRIORITY)[number];
			description?: string;
			tags?: string[];
			updatedAt?: Date | string;
			assignee?: { name?: string; avatar?: string } | string;
		}
	);
	const draggable = $derived(props.draggable ?? true);
	const selected = $derived(props.selected ?? false);
	const editable = $derived(props.editable ?? true);
	const archivable = $derived(props.archivable ?? true);
	const deletable = $derived(props.deletable ?? true);

	let isEditingTitle = $state(false);
	let draftTitle = $state(untrack(() => card.title));

	$effect(() => {
		draftTitle = card.title;
	});

	function startTitleEdit(): void {
		if (!editable) return;
		draftTitle = card.title;
		isEditingTitle = true;
	}

	function cancelTitleEdit(): void {
		draftTitle = card.title;
		isEditingTitle = false;
	}

	function commitTitleEdit(): void {
		const nextTitle = draftTitle.trim();
		if (!nextTitle) {
			draftTitle = card.title;
			isEditingTitle = false;
			return;
		}
		if (nextTitle !== card.title) {
			props.onTitleChange?.(nextTitle);
		}
		isEditingTitle = false;
	}

	function formatDate(date: Date | string): string {
		return new Date(date).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}

	function getPriorityColor(priority: (typeof TOKEN_PRIORITY)[number] | undefined): string {
		if (!priority) return 'default';
		const priorityColors: Partial<Record<(typeof TOKEN_PRIORITY)[number], string>> = {
			low: 'success',
			medium: 'warning',
			high: 'danger'
		};
		return priorityColors[priority] ?? 'danger';
	}

	function getPriorityAccentClass(priority: (typeof TOKEN_PRIORITY)[number] | undefined): string {
		if (!priority) return 'c-kanban-card--accent-default';
		const priorityAccentClasses: Partial<Record<(typeof TOKEN_PRIORITY)[number], string>> = {
			low: 'c-kanban-card--accent-low',
			medium: 'c-kanban-card--accent-medium',
			high: 'c-kanban-card--accent-high'
		};
		return priorityAccentClasses[priority] ?? 'c-kanban-card--accent-high';
	}

	const containerClasses = $derived(
		`c-kanban-card ${getPriorityAccentClass(card.priority)}`
	);

	return {
		get card() {
			return card;
		},
		get draggable() {
			return draggable;
		},
		get selected() {
			return selected;
		},
		get editable() {
			return editable;
		},
		get archivable() {
			return archivable;
		},
		get deletable() {
			return deletable;
		},
		get isEditingTitle() {
			return isEditingTitle;
		},
		get draftTitle() {
			return draftTitle;
		},
		get containerClasses() {
			return containerClasses;
		},
		startTitleEdit,
		cancelTitleEdit,
		commitTitleEdit,
		formatDate,
		getPriorityColor,
		getPriorityAccentClass
	};
}

export default createKanbanCardState;
