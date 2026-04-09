import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';

export interface IMotionPreset extends IMotionToken {
	motionPreset?: string;
}
