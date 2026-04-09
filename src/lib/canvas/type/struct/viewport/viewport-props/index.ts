import type { ViewportContract } from '..';
import type { StageCamera } from '$stylist/canvas/type/struct/stage/stage-camera';

export type ViewportProps = ViewportContract & {
	camera: StageCamera;
	interactive?: boolean;
	showGrid?: boolean;
	worldWidth?: number;
	worldHeight?: number;
};
