import type { SlotTransformable as TransformProps } from '$stylist/animation/interface/slot/transformable';
import { createTransformableState as createAnimationTransformableState } from '$stylist/animation/function/state/transformable';

export const createTransformableState = (props: TransformProps) => createAnimationTransformableState(props);

export default createTransformableState;