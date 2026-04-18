import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotSessionManager as SessionManagerProps } from '$stylist/form/interface/slot/session-manager';

export interface SessionManagerStateProps extends StructIntersectAll<[SessionManagerProps]> {}
