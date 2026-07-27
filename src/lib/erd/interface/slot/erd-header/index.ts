import type { SchemaMode } from '$stylist/erd/type/alias/schema-mode';
import type { SchemaStats } from '$stylist/erd/type/struct/schema-stats';
import type { SlotErdSettings } from '$stylist/erd/interface/slot/erd-settings';

export interface SlotErdHeader extends SlotErdSettings {
	stats?: SchemaStats;
	canImport?: boolean;
	canExport?: boolean;
	mode?: SchemaMode;
}
