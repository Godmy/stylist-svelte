<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import DropdownMenu from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'position',
      type: 'select' as ControlType,
      defaultValue: 'left',
      options: ['left', 'right', 'center'],
      description: 'Position of the dropdown menu'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the dropdown is disabled'
    }
  ];

  function handleMenuItemClick(action: string, closeDropdown: () => void) {
    console.log(`${action} clicked`);
    closeDropdown();
  }
</script>

<Story
  {controls}
  title="DropdownMenu Component"
  description="A dropdown menu component for displaying action lists"
 
>
  {#snippet children(controlValues: any)}
  <div class="flex items-center justify-center h-40">
    <DropdownMenu
      label="Options"
      position={controlValues.position}
      disabled={controlValues.disabled}
    >
      {#snippet children({ closeDropdown }: { closeDropdown: () => void })}
        <button
          class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
          onclick={() => handleMenuItemClick('New', closeDropdown)}
        >
          New
        </button>
        <button
          class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
          onclick={() => handleMenuItemClick('Open', closeDropdown)}
        >
          Open
        </button>
        <button
          class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
          onclick={() => handleMenuItemClick('Save', closeDropdown)}
        >
          Save
        </button>
        <hr class="my-1 border-[--color-border-primary]" />
        <button
          class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
          onclick={() => handleMenuItemClick('Settings', closeDropdown)}
        >
          Settings
        </button>
        <button
          class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
          onclick={() => handleMenuItemClick('Help', closeDropdown)}
        >
          Help
        </button>
      {/snippet}
    </DropdownMenu>
  </div>

  {/snippet}
</Story>