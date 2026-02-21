/**
 * Shape-related tokens
 * Defines standardized shapes that can be used across components
 */

/**
 * Standard geometric shapes that can be applied to various UI elements
 */
export const GEOMETRIC_SHAPES = [
	'circle',    // Perfect circular shape
	'square',    // Square with 90-degree corners
	'rectangle', // Rectangular shape
	'rounded',   // Slightly rounded corners
	'pill',      // Fully rounded rectangle (capsule)
	'diamond',   // Diamond/rhombus shape
	'triangle'   // Triangular shape
] as const;

export type GeometricShape = (typeof GEOMETRIC_SHAPES)[number];

/**
 * Wrapper/container shapes for UI elements
 */
export const WRAPPER_SHAPES = [
	'circle',  // Circular wrapper
	'square',  // Square wrapper
	'rounded'  // Rounded wrapper
] as const;

export type WrapperShape = (typeof WRAPPER_SHAPES)[number];

/**
 * Button shapes that define the appearance of interactive elements
 */
export const BUTTON_SHAPES = [
	'rounded',  // Slightly rounded corners
	'square',   // Sharp corners
	'pill',     // Fully rounded
	'circle'    // Circular buttons
] as const;

export type ButtonShape = (typeof BUTTON_SHAPES)[number];

/**
 * Icon wrapper shapes specifically for icon containers
 */
export const ICON_WRAPPER_SHAPES = [
	'circle',  // Circular icon wrapper
	'square',  // Square icon wrapper
	'rounded'  // Rounded icon wrapper
] as const;

export type IconWrapperShape = (typeof ICON_WRAPPER_SHAPES)[number];

// Export for backward compatibility
export { ICON_WRAPPER_SHAPES as TOKEN_ICON_WRAPPER_SHAPES };

/**
 * Avatar shapes for user profile images and representations
 */
export const AVATAR_SHAPES = [
	'circle',  // Circular avatar
	'square',  // Square avatar with sharp corners
	'rounded'  // Square avatar with rounded corners
] as const;

export type AvatarShape = (typeof AVATAR_SHAPES)[number];

/**
 * Card/container shapes for content containers
 */
export const CARD_SHAPES = [
	'square',  // Sharp corners
	'rounded', // Soft rounded corners
	'pill'     // Highly rounded
] as const;

export type CardShape = (typeof CARD_SHAPES)[number];