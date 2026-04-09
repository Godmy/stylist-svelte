import type { SelectionMode } from '../selection-mode/index.svelte.ts';
import type { SelectionState } from '../selection-state/index.svelte.ts';

function useSelection(initialMode?: SelectionMode) {
	let state = $state<SelectionState>({
		selectedIds: new Set(),
		mode: initialMode ?? 'single',
		isSelecting: false,
		marqueeStart: null,
		marqueeCurrent: null
	});

	const select = (id: string) => {
		if (state.mode === 'single') {
			state.selectedIds = new Set([id]);
			return;
		}

		state.selectedIds.add(id);
	};

	const selectMany = (ids: string[]) => {
		state.selectedIds = new Set(ids);
	};

	const toggle = (id: string) => {
		if (state.selectedIds.has(id)) {
			state.selectedIds.delete(id);
			return;
		}

		state.selectedIds.add(id);
	};

	const deselect = (id: string) => {
		state.selectedIds.delete(id);
	};

	const clear = () => {
		state.selectedIds = new Set();
	};

	const isSelected = (id: string) => {
		return state.selectedIds.has(id);
	};

	const count = () => {
		return state.selectedIds.size;
	};

	const startMarquee = (x: number, y: number) => {
		state.isSelecting = true;
		state.marqueeStart = { x, y };
		state.marqueeCurrent = { x, y };
		state.selectedIds = new Set();
	};

	const updateMarquee = (x: number, y: number) => {
		state.marqueeCurrent = { x, y };
	};

	const endMarquee = () => {
		state.isSelecting = false;
		state.marqueeStart = null;
		state.marqueeCurrent = null;
	};

	const setMode = (mode: SelectionMode) => {
		state.mode = mode;
		if (mode === 'single') {
			const first = state.selectedIds.values().next().value;
			state.selectedIds = first ? new Set([first]) : new Set();
		}
	};

	const getSelectedIds = () => {
		return Array.from(state.selectedIds);
	};

	const getMarqueeBounds = () => {
		if (!state.marqueeStart || !state.marqueeCurrent) return null;

		const x = Math.min(state.marqueeStart.x, state.marqueeCurrent.x);
		const y = Math.min(state.marqueeStart.y, state.marqueeCurrent.y);
		const width = Math.abs(state.marqueeCurrent.x - state.marqueeStart.x);
		const height = Math.abs(state.marqueeCurrent.y - state.marqueeStart.y);

		return { x, y, width, height };
	};

	return {
		get state() {
			return state;
		},
		get selectedIds() {
			return state.selectedIds;
		},
		get mode() {
			return state.mode;
		},
		get isSelecting() {
			return state.isSelecting;
		},
		get hasMarquee() {
			return state.marqueeStart !== null;
		},
		select,
		selectMany,
		toggle,
		deselect,
		clear,
		isSelected,
		count,
		startMarquee,
		updateMarquee,
		endMarquee,
		setMode,
		getSelectedIds,
		getMarqueeBounds
	};
}

export { useSelection };
export default useSelection;
