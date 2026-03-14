export const LITEGRAPH_NODE_TYPES = [
    'default',
    'source',
    'processor',
    'output',
    'gateway',
    'custom'
] as const;
export const LITEGRAPH_NODE_STATES = ['default', 'selected', 'active', 'error', 'warning', 'disabled'] as const;
export type LiteGraphNodeType = (typeof LITEGRAPH_NODE_TYPES)[number];
export type LiteGraphNodeState = (typeof LITEGRAPH_NODE_STATES)[number];
