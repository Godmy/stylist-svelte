import type { SelectionState } from '$stylist/architecture/interface/recipe/selection-state/index';
import type { SelectionMode } from '$stylist/architecture/type/struct/selection-mode/index';

export function createSelectionState(initial?: Partial<SelectionState>): SelectionState & {
	setMode: (mode: SelectionMode) => void;
	toggleSelect: (id: string) => void;
	clearSelection: () => void;
	setMarquee: (start: { x: number; y: number } | null, current: { x: number; y: number } | null) => void;
} {
	const state = $state<SelectionState>({
		selectedIds: initial?.selectedIds ?? new Set<string>(),
		mode: initial?.mode ?? 'single',
		isSelecting: initial?.isSelecting ?? false,
		marqueeStart: initial?.marqueeStart ?? null,
		marqueeCurrent: initial?.marqueeCurrent ?? null
	});

	return {
		get selectedIds() { return state.selectedIds; },
		get mode() { return state.mode; },
		get isSelecting() { return state.isSelecting; },
		get marqueeStart() { return state.marqueeStart; },
		get marqueeCurrent() { return state.marqueeCurrent; },
		setMode(mode: SelectionMode) { state.mode = mode; },
		toggleSelect(id: string) {
			const ids = new Set(state.selectedIds);
			if (ids.has(id)) ids.delete(id);
			else ids.add(id);
			state.selectedIds = ids;
		},
		clearSelection() { state.selectedIds = new Set<string>(); },
		setMarquee(start, current) {
			state.marqueeStart = start;
			state.marqueeCurrent = current;
			state.isSelecting = start !== null;
		}
	};
}

export default createSelectionState;
