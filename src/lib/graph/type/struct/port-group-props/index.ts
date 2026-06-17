import type { RecipePortGroup } from '$stylist/media/interface/recipe/port-group';
import type { RecipeGraphPort } from '$stylist/graph/interface/recipe/graph-port';

export type PortGroupProps = RecipePortGroup & {
	id?: string;
	ports?: RecipeGraphPort[];
	showTypeIcons?: boolean;
	onPortClick?: (portId: string, event: MouseEvent) => void;
	onConnectionStart?: (port: RecipeGraphPort, event: MouseEvent) => void;
	onConnectionEnd?: (port: RecipeGraphPort, event: MouseEvent) => void;
};
