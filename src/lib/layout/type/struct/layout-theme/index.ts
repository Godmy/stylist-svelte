import type { RecordBorderRadius } from '$stylist/layout/type/record/border-radius';
import type { RecordElevation } from '$stylist/layout/type/record/elevation';
import type { RecordOpacity } from '$stylist/layout/type/record/opacity';
import type { RecordSpacing } from '$stylist/layout/type/record/spacing';
import type { RecordZIndex } from '$stylist/layout/type/record/z-index';

export type LayoutTheme = {
	opacity: RecordOpacity;
	spacing: RecordSpacing;
	borderRadius: RecordBorderRadius;
	zIndex: RecordZIndex;
	boxShadow: RecordElevation;
};
