export const LOADING_STATES = ['idle', 'loading', 'success', 'error'] as const;
export type LoadingState = (typeof LOADING_STATES)[number];

export const VALIDATION_STATES = ['valid', 'invalid', 'pending'] as const;
export type ValidationState = (typeof VALIDATION_STATES)[number];

export const INTERACTION_STATES = ['enabled', 'disabled', 'readonly'] as const;
export type InteractionState = (typeof INTERACTION_STATES)[number];

export const VISIBILITY_STATES = ['visible', 'hidden', 'collapsed'] as const;
export type VisibilityState = (typeof VISIBILITY_STATES)[number];
