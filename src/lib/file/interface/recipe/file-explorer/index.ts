import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFileExplorerEvents } from '$stylist/file/interface/behavior/file-explorer-events';
import type { SlotFileExplorer } from '$stylist/file/interface/slot/file-explorer';

export interface RecipeFileExplorer
	extends StructIntersectAll<[SlotFileExplorer, BehaviorFileExplorerEvents]> {}
