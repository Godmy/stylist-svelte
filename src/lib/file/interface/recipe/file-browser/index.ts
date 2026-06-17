import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFileBrowserEvents } from '$stylist/file/interface/behavior/file-browser-events';
import type { SlotFileBrowser } from '$stylist/file/interface/slot/file-browser';

export interface RecipeFileBrowser
	extends StructIntersectAll<[SlotFileBrowser, BehaviorFileBrowserEvents]> {}
