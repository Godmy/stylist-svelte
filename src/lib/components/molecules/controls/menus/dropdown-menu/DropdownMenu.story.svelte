<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DropdownMenu from './DropdownMenu.svelte';
  import type { IDropdownMenuProps } from './types';

  let {
    id = '',
    title = '',
    description = '',
    primaryScenario = undefined,
    variantScenarios = [],
    controls = [
      { name: 'position', type: 'select', options: ['left', 'right', 'center'], defaultValue: 'left' },
      { name: 'disabled', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    primaryScenario?: IDropdownMenuProps;
    variantScenarios?: IDropdownMenuProps[];
    controls?: ControlConfig[]
  }>();

  // Default scenarios
  const defaultPrimaryScenario: IDropdownMenuProps = {
    label: 'Actions',
    position: 'left'
  };

  const variantScenariosData: IDropdownMenuProps[] = [
    {
      label: 'File',
      position: 'left'
    },
    {
      label: 'Edit',
      position: 'right'
    },
    {
      label: 'View',
      position: 'center'
    }
  ];

  // Use the provided scenarios or defaults
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;

  // Handle menu item clicks
  function handleMenuItemClick(action: string, closeDropdown: () => void) {
    console.log(`${action} clicked`);
    closeDropdown();
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={DropdownMenu}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { position?: 'left' | 'right' | 'center'; disabled?: boolean })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Dropdown Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive dropdown menu with customizable position.</p>

        <div class="mt-6 flex items-center justify-center h-40">
          <DropdownMenu
            label="Options"
            position={props.position}
            disabled={props.disabled}
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
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Dropdown Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different dropdown menu configurations and use cases.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">File Menu</p>
            <div class="flex justify-center">
              <DropdownMenu label="File" position="left">
                {#snippet children({ closeDropdown }: { closeDropdown: () => void })}
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('New File', closeDropdown)}
                  >
                    New
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Open File', closeDropdown)}
                  >
                    Open
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Save File', closeDropdown)}
                  >
                    Save
                  </button>
                  <hr class="my-1 border-[--color-border-primary]" />
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Print', closeDropdown)}
                  >
                    Print
                  </button>
                {/snippet}
              </DropdownMenu>
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Edit Menu</p>
            <div class="flex justify-center">
              <DropdownMenu label="Edit" position="right">
                {#snippet children({ closeDropdown }: { closeDropdown: () => void })}
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Undo', closeDropdown)}
                  >
                    Undo
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Redo', closeDropdown)}
                  >
                    Redo
                  </button>
                  <hr class="my-1 border-[--color-border-primary]" />
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Cut', closeDropdown)}
                  >
                    Cut
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Copy', closeDropdown)}
                  >
                    Copy
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Paste', closeDropdown)}
                  >
                    Paste
                  </button>
                {/snippet}
              </DropdownMenu>
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">View Menu</p>
            <div class="flex justify-center">
              <DropdownMenu label="View" position="center">
                {#snippet children({ closeDropdown }: { closeDropdown: () => void })}
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Zoom In', closeDropdown)}
                  >
                    Zoom In
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Zoom Out', closeDropdown)}
                  >
                    Zoom Out
                  </button>
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Reset Zoom', closeDropdown)}
                  >
                    Reset Zoom
                  </button>
                  <hr class="my-1 border-[--color-border-primary]" />
                  <button
                    class="block w-full text-left px-4 py-2 text-sm hover:bg-[--color-background-secondary] transition-colors"
                    onclick={() => handleMenuItemClick('Fullscreen', closeDropdown)}
                  >
                    Fullscreen
                  </button>
                {/snippet}
              </DropdownMenu>
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>