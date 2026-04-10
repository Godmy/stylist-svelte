import type { StageContract } from '../stage-contract';
import type { StageCamera } from '../stage-camera';

export type StageProps = StageContract & {
	camera: StageCamera;
	worldWidth?: number;
	worldHeight?: number;
};
