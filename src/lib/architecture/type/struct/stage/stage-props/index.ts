import type { StageContract } from '$stylist/architecture/type/struct/stage/stage-contract';
import type { StageCamera } from '$stylist/architecture/type/struct/stage/stage-camera';

export type StageProps = StageContract & {
	camera: StageCamera;
	worldWidth?: number;
	worldHeight?: number;
};
