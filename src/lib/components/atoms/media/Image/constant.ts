// Default loading strategy
export const DEFAULT_LOADING_STRATEGY: 'lazy' = 'lazy';

// CSS classes
export const CONTAINER_CLASSES = 'relative inline-block overflow-clip';
export const IMAGE_WRAPPER_CLASSES = 'flex items-center justify-center w-full h-full';
export const IMAGE_CLASSES_BASE = 'block max-w-full h-auto object-cover';
export const IMAGE_CLASSES_LOADED = 'opacity-100';
export const IMAGE_CLASSES_NOT_LOADED = 'opacity-0';
export const IMAGE_TRANSITION_CLASSES = 'transition-opacity duration-300';

// State values
export const INITIAL_ERROR_STATE = false;
export const INITIAL_LOADED_STATE = false;