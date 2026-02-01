<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { InputVariant } from '$stylist/design-system/input';
  import type { CompactSize } from '$stylist/design-system/tokens/sizes';

  /**
   * InputAddon component - Prefix or suffix for an input field (icon, text)
   *
   * @param position - Position ('left' | 'right')
   * @param variant - Style variant ('solid' | 'ghost')
   * @param children - Content to display in the addon
   * @param class - Additional CSS classes
   * @returns Wrapper to add content to an input field
   */

  const {
    INPUT_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INPUT_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    INPUT_VARIANT_CLASSES
  } = INPUT_TOKENS;

  const INPUT_ADDON_PRESET = {
    variants: INPUT_VARIANTS,
    sizes: COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'default' as const,
      size: 'md' as const,
      disabled: DEFAULT_FLAGS.disabled,
      error: false
    },
    classes: {
      base: 'flex items-center px-3 border-y border-y-transparent',
      size: {
        sm: 'py-1.5 text-sm',
        md: 'py-2 text-base',
        lg: 'py-3 text-lg'
      },
      state: STATE_CLASSES,
      variant: INPUT_VARIANT_CLASSES,
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible
    }
  };

  type InputAddonProps = {
    position?: 'left' | 'right';
    variant?: InputVariant;
    size?: CompactSize;
    class?: string | null;
    children?: () => any;
  };

  let {
    position = 'left',
    variant = INPUT_ADDON_PRESET.defaults.variant,
    size = INPUT_ADDON_PRESET.defaults.size,
    class: className = '',
    children,
    ...restProps
  }: InputAddonProps & HTMLAttributes<HTMLDivElement> = $props();

  let classes = $derived(
    [
      INPUT_ADDON_PRESET.classes.base,
      INPUT_ADDON_PRESET.classes.variant[variant],
      INPUT_ADDON_PRESET.classes.size[size],
      position === 'left' ? 'rounded-l-md border-r border-r-transparent' : 'rounded-r-md border-l border-l-transparent',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div class={classes} {...restProps}>
  {@render children?.()}
</div>

