import type { ViewportContract } from '$stylist/graph/type/struct/viewport/viewport-contract';
import type { StageCamera } from '$stylist/graph/type/struct/stage/stage-camera';

export type ViewportProps = ViewportContract & {
	camera: StageCamera;
	interactive?: boolean;
	showGrid?: boolean;
	worldWidth?: number;
	worldHeight?: number;
};
