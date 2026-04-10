import type { TransformProps } from '$stylist/animation/interface/proto/transformable-props';
import { createTransformableState as createAnimationTransformableState } from '$stylist/animation/function/state/transformable';

export const createTransformableState = (props: TransformProps) => createAnimationTransformableState(props);

export default createTransformableState;