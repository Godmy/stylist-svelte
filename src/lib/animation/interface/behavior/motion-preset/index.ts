import type { BehaviorMotionToken as IMotionToken } from '$stylist/animation/interface/behavior/motion-token';
import type { BehaviorMotionToken } from '$stylist/animation/interface/behavior/motion-token';

export interface BehaviorMotionPreset extends BehaviorMotionToken {
	motionPreset?: string;
}
