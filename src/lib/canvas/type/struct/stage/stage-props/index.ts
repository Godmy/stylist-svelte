import type { StageContract } from '..';
import type { StageCamera } from '../stage-camera';

export type StageProps = StageContract & {
	camera: StageCamera;
	worldWidth?: number;
	worldHeight?: number;
};
