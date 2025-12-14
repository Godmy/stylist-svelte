# Tokens

Design tokens, single source of truth:
- colors, spacing, typography, radius, shadows, variants.
- sizes: component scales, padding/text/icon sizes.
- interaction.ts: interactive variants and VARIANT_CLASSES (utility classes).

Usage:
- Import tokens directly; do not duplicate classes in components.
- INTERACTIVE_VARIANTS/VARIANT_CLASSES are exposed via design-system/interaction too.
