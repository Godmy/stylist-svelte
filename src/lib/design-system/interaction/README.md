# Interaction Layer

Single source for interactive components:
- props.ts: base interfaces and unified Props for interactive components.
- defaults.ts: aliases for sizes/variants from design tokens.
- preset.ts: Preset<V,S> contract for preset factories.
- tokens.ts: interactive token bundle (INTERACTION_TOKENS, VARIANT_CLASSES, sizes, state/accessibility, etc.).

Usage:
- Import Props, Preset, INTERACTION_TOKENS directly from design-system/interaction.
- Build presets via createPreset (factory in design-system/interaction) using these types and tokens.
- Legacy interfaces/* are removed; do not import from there.
