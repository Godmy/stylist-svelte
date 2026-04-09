import type { PortGroupRecipe } from '$stylist/media/interface/recipe/port-group';
import type { GraphPortRecipe } from '$stylist/science/interface/recipe/graph-port';

export type PortGroupProps = PortGroupRecipe & {
	id?: string;
	ports?: GraphPortRecipe[];
	showTypeIcons?: boolean;
	onPortClick?: (portId: string, event: MouseEvent) => void;
	onConnectionStart?: (port: GraphPortRecipe, event: MouseEvent) => void;
	onConnectionEnd?: (port: GraphPortRecipe, event: MouseEvent) => void;
};
