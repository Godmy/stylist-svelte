import type { ViewportContract } from '$stylist/architecture/type/struct/viewport/viewport-contract';
import type { StageCamera } from '$stylist/architecture/type/struct/stage/stage-camera';

export type ViewportProps = ViewportContract & {
	camera: StageCamera;
	interactive?: boolean;
	showGrid?: boolean;
	worldWidth?: number;
	worldHeight?: number;
};
