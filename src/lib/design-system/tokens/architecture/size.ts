import { COMPONENT_SIZE, type ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

export const CONTAINER_MAX_WIDTH = [...COMPONENT_SIZE, 'full'] as const;
export type ContainerMaxWidth = (typeof CONTAINER_MAX_WIDTH)[number];
export type TokenContainerMaxWidth = ContainerMaxWidth;
export type Height = 'screen' | 'large' | 'medium';
export type LayoutSize = '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';


