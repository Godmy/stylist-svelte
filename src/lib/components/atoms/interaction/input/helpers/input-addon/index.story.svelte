<script lang="ts">
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import { Search } from 'lucide-svelte';
  import InputAddon from './index.svelte';

  const positionOptions = ['left', 'right'] as const;
  const variantOptions = ['solid', 'ghost'] as const;

  type Props = {
    position?: 'left' | 'right';
    variant?: 'solid' | 'ghost';
    withIcon?: boolean;
    addonText?: string;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'position',
      type: 'select',
      defaultValue: 'left',
      options: [...positionOptions],
      description: 'Position of the addon (left/right)'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'solid',
      options: [...variantOptions],
      description: 'Visual variant of the addon (solid/ghost)'
    },
    {
      name: 'withIcon',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show an icon in the addon'
    },
    {
      name: 'addonText',
      type: 'text',
      defaultValue: '$',
      description: 'Text to display in the addon if no icon'
    }
  ];

  const props: Props = {};
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center border border-[--color-border-primary] rounded-md">
    {#if props.position === 'left'}
      <InputAddon {...props}>
        {#if props.withIcon}
          <Search class="w-4 h-4" />
        {:else}
          {props.addonText}
        {/if}
      </InputAddon>
    {/if}
    <input
      type="text"
      placeholder="Search..."
      class="px-3 py-2 flex-1 border-0 focus:outline-none bg-transparent"
    />
    {#if props.position === 'right'}
      <InputAddon {...props}>
        {#if props.withIcon}
          <Search class="w-4 h-4" />
        {:else}
          {props.addonText}
        {/if}
      </InputAddon>
    {/if}
  </div>
</div>

