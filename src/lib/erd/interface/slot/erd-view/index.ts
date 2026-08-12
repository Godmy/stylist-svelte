import type { SlotErdSettings } from '$stylist/erd/interface/slot/erd-settings';
import type { SchemaDocument } from '$stylist/erd/type/object/schema-document';
export interface SlotErdView extends SlotErdSettings {
	document: SchemaDocument;
	activeTableId?: string;
}
