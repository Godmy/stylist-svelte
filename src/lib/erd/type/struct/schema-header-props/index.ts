import type { SchemaLayout } from '$stylist/erd/type/alias/schema-layout';
import type { SchemaMode } from '$stylist/erd/type/alias/schema-mode';

export type SchemaHeaderProps = {
	title?: string;
	zoom?: number;
	showRelations?: boolean;
	highlightRelations?: boolean;
	layout?: SchemaLayout;
	canImport?: boolean;
	canExport?: boolean;
	mode?: SchemaMode;
	textPanelVisible?: boolean;
};
