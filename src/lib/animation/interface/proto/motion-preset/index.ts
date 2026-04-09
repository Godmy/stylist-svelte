import type { IMotionToken } from '$stylist/animation/interface/proto/motion-token';

export interface IMotionPreset extends IMotionToken {
	motionPreset?: string;
}
