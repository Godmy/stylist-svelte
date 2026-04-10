import type { AnimateProps } from '$stylist/animation/interface/proto/animate-props';
import { createAnimatedState as createAnimationAnimatedState } from '$stylist/animation/function/state/animated';

export const createAnimatedState = (props: AnimateProps) => createAnimationAnimatedState(props);

export default createAnimatedState;