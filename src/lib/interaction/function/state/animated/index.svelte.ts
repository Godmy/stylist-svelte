import type { SlotAnimate as AnimateProps } from '$stylist/animation/interface/slot/animate';
import { createAnimatedState as createAnimationAnimatedState } from '$stylist/animation/function/state/animated';

export const createAnimatedState = (props: AnimateProps) => createAnimationAnimatedState(props);

export default createAnimatedState;