/** Component size scales */
export const COMPONENT_SIZE = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
export type ComponentSize = (typeof COMPONENT_SIZE)[number];
