/**
 * PropsEditor — редактор пропсов..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type PropDefinition = {
	name: string;
	type: string;
	defaultValue?: unknown;
	description?: string;
	options?: string[];
	min?: number;
	max?: number;
	step?: number;
};

export interface PropsEditorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	propDefinitions?: PropDefinition[];
	propValues?: Record<string, unknown>;
	onPropChange?: (name: string, value: unknown) => void;
}
