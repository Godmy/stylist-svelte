import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export type CubeControlProps = {
	size?: number;
	perspective?: number;
	autoRotate?: boolean;
	rotationDuration?: number;
	interactive?: boolean;
	inertiaEnabled?: boolean;
	inertiaFriction?: number;
	inertiaSensitivity?: number;
	faceLabels?: boolean;
	class?: string;
	onRotate?: (rotation: { x: number; y: number }) => void;
	onSelectionChange?: (selection: {
		selectedIconId: string | null;
		selectedTitleFace: number | null;
		selectedCellByFace: number[];
	}) => void;
	onDebugLog?: (entry: {
		ts: number;
		source: 'stage' | 'icon' | 'title' | 'cell';
		action: string;
		id?: string;
		faceIndex?: number;
		cellIndex?: number;
		pointerType?: string;
		x?: number;
		y?: number;
	}) => void;
} & InteractionHTMLAttributes<HTMLDivElement>;
