/**
 * Semantic Variants and Appearance Styles
 * Single source of truth for component variants across the design system
 */

/**
 * Core semantic variants - represent the purpose/role of a component
 * These map to specific color palettes and convey meaning
 */
export const SEMANTIC_VARIANTS = [
  'primary',    // Primary action or emphasis (maps to blue)
  'secondary',  // Secondary action or less emphasis (maps to slate)
  'success',    // Successful completion or positive state (maps to green)
  'warning',    // Warning or caution (maps to amber)
  'danger',     // Dangerous action or error state (maps to red)
  'info'        // Informational message (maps to teal)
] as const;

export type SemanticVariant = typeof SEMANTIC_VARIANTS[number];

/**
 * Visual appearance styles - represent how a component looks
 * These define the visual treatment independent of semantic meaning
 */
export const APPEARANCE_STYLES = [
  'solid',      // Filled background
  'outline',    // Border only
  'ghost',      // Transparent, shows on hover
  'link',       // Styled like a hyperlink
  'subtle'      // Muted, low contrast
] as const;

export type AppearanceStyle = typeof APPEARANCE_STYLES[number];

/**
 * Neutral variants - non-semantic, general purpose
 */
export const NEUTRAL_VARIANTS = [
  'default',    // Default/neutral state
  'neutral'     // Explicitly neutral (for badges, status)
] as const;

export type NeutralVariant = typeof NEUTRAL_VARIANTS[number];

/**
 * State-based variants - for form elements and inputs
 */
export const STATE_VARIANTS = [
  'error',      // Error state for inputs
  'valid',      // Valid/success state for inputs
  'disabled'    // Disabled state
] as const;

export type StateVariant = typeof STATE_VARIANTS[number];

/**
 * Progress/Flow variants - for steppers, progress indicators
 */
export const FLOW_VARIANTS = [
  'completed',  // Completed step/stage
  'current',    // Current/active step
  'upcoming',   // Future/pending step
  'skipped'     // Skipped step
] as const;

export type FlowVariant = typeof FLOW_VARIANTS[number];

/**
 * Mapping of semantic variants to color palettes
 * This creates the connection between meaning and visual design
 */
export const VARIANT_TO_PALETTE = {
  primary: 'blue',
  secondary: 'slate',
  success: 'green',
  warning: 'amber',
  danger: 'red',
  info: 'teal'
} as const;

export type VariantPaletteName = typeof VARIANT_TO_PALETTE[keyof typeof VARIANT_TO_PALETTE];

/**
 * All available variants combined
 * Use this when a component needs access to all variant types
 */
export const ALL_VARIANTS = [
  ...SEMANTIC_VARIANTS,
  ...NEUTRAL_VARIANTS
] as const;

export type AllVariants = typeof ALL_VARIANTS[number];

/**
 * Helper type for components that support both semantic variants and appearances
 */
export type VariantWithAppearance = {
  variant?: SemanticVariant | NeutralVariant;
  appearance?: AppearanceStyle;
};
