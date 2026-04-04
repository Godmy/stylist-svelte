/**
 * LitegraphNode — узел LiteGraph..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   ICaptionSlot        (information) — caption (Caption)
 *   IBadgeSlot        (information) — badge (Badge)
 *   IStatusSlot        (information) — status (Status)
 */
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenPropertyType } from '$stylist/information/type/enum/property-type';
import type { SemanticZoomPresentation } from '$stylist/architecture/type/struct/semantic-zoom';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface LiteGraphNodeProperty {
	id: string;
	name: string;
	type?: TokenPropertyType;
	value?: unknown;
	label?: string;
	description?: string;
	options?: string[];
}

export interface LiteGraphPort {
	id: string;
	name?: string;
	type?: string;
	label?: string;
	dataType?: string;
	direction?: 'input' | 'output';
}

export type LitegraphNodePresentation = Partial<SemanticZoomPresentation> & {
	stage?: SemanticZoomPresentation['stage'];
	size?: TokenSize;
	width?: number;
	height?: number | 'auto';
	showChildren?: boolean;
};

export interface LitegraphNodeRecipe extends ThemeAttributes<HTMLDivElement> {
	id?: string;
	title?: string;
	x: number;
	y: number;
	type?: string;
	mode?: string;
	status?: string;
	size?: TokenSize;
	selected?: boolean;
	draggable?: boolean;
	width?: number;
	minWidth?: number;
	height?: number | 'auto';
	color?: string;
	headerColor?: string;
	hideHeader?: boolean;
	hidePorts?: boolean;
	hideProperties?: boolean;
	worldDepth?: number;
	cameraDepth?: number;
	presentation?: LitegraphNodePresentation;
	properties?: LiteGraphNodeProperty[];
	inputs?: LiteGraphPort[];
	outputs?: LiteGraphPort[];
}

export type LiteGraphNodeProps = LitegraphNodeRecipe;
