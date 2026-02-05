<script lang="ts">
  import { INPUT_ADDON_PRESET } from '$stylist/design-system/presets';
  import { createInputAddonState } from '../state.svelte';
  import type { HTMLAttributes } from 'svelte/elements';
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

  type InputAddonVariant = (typeof INPUT_ADDON_PRESET.variants)[number];
  type InputAddonProps = {
    position?: 'left' | 'right';
    variant?: InputAddonVariant;
    size?: CompactSize;
    class?: string;
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

  const state = $derived(createInputAddonState({ variant, size, class: className }));

  let classes = $derived(
    [
      state.classes,
      position === 'left' ? 'rounded-l-md border-r border-r-transparent' : 'rounded-r-md border-l border-l-transparent',
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div class={classes} {...restProps}>
  {@render children?.()}
</div>
