import type { StageContract } from '$stylist/graph/type/struct/stage/stage-contract';
import type { StageCamera } from '$stylist/graph/type/struct/stage/stage-camera';

export type StageProps = StageContract & {
	camera: StageCamera;
	worldWidth?: number;
	worldHeight?: number;
};
