import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { BehaviorZipViewerEvents } from '$stylist/file/interface/behavior/zip-viewer-events';
import type { SlotZipViewer } from '$stylist/file/interface/slot/zip-viewer';

export interface RecipeZipViewer
	extends StructIntersectAll<[SlotZipViewer, BehaviorZipViewerEvents, SlotChildren]> {}
