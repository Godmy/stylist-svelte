export const NODE_PROPERTY_TYPES = [
    'string',
    'number',
    'boolean',
    'enum',
    'color',
    'vector2',
    'vector3',
    'object',
    'function'
] as const;
export type NodePropertyType = (typeof NODE_PROPERTY_TYPES)[number];
