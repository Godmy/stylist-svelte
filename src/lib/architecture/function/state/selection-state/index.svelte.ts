import type { SelectionMode } from '../selection-mode/index.svelte.ts';
import type { SelectedItem } from '../selected-item/index.svelte.ts';

export interface SelectionState {
	selectedIds: Set<string>;
	mode: SelectionMode;
	isSelecting: boolean;
	marqueeStart: { x: number; y: number } | null;
	marqueeCurrent: { x: number; y: number } | null;
}
