<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import { Search } from 'lucide-svelte';
  import InputAddon from './InputAddon.svelte';

  const positionOptions = ['left', 'right'] as const;
  const variantOptions = ['solid', 'ghost'] as const;

  type InputAddonStoryProps = {
    position: (typeof positionOptions)[number];
    variant: (typeof variantOptions)[number];
    withIcon: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'position',
      type: 'select',
      defaultValue: 'left',
      options: [...positionOptions]
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'solid',
      options: [...variantOptions]
    },
    {
      name: 'withIcon',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="atoms-input-addon"
  title="InputAddon"
  component={InputAddon}
  category="Atoms"
  description="Prefix or suffix for an input field (icon, text)."
  tags={['input', 'addon', 'prefix', 'suffix']}
  controls={controls}
>
  {#snippet children(props: InputAddonStoryProps)}
    <div class="flex flex-col gap-4">
      <div class="flex items-center border border-[--color-border-primary] rounded-md">
        {#if props.position === 'left'}
          <InputAddon position={props.position} variant={props.variant}>
            {#if props.withIcon}
              <Search class="w-4 h-4" />
            {:else}
              $
            {/if}
          </InputAddon>
        {/if}
        <input
          type="text"
          placeholder="Search..."
          class="px-3 py-2 flex-1 border-0 focus:outline-none bg-transparent"
        />
        {#if props.position === 'right'}
          <InputAddon position={props.position} variant={props.variant}>
            {#if props.withIcon}
              <Search class="w-4 h-4" />
            {:else}
              $
            {/if}
          </InputAddon>
        {/if}
      </div>
    </div>
  {/snippet}
</Story>