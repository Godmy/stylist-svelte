/** Props для transformable компонента */
import type { ITransformable } from '$stylist/interaction/interface/proto/transformable';
import type { Snippet } from 'svelte';

export interface TransformProps extends ITransformable {
	class?: string;
	children?: Snippet;
}
