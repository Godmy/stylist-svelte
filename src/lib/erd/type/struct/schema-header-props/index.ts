import type { SchemaLayout } from '$stylist/erd/type/alias/schema-layout';
import type { SchemaMode } from '$stylist/erd/type/alias/schema-mode';
import type { SchemaStats } from '$stylist/erd/type/struct/schema-stats';

export type SchemaHeaderProps = {
	title?: string;
	stats?: SchemaStats;
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	layout?: SchemaLayout;
	canImport?: boolean;
	canExport?: boolean;
	mode?: SchemaMode;
	textPanelVisible?: boolean;
};
