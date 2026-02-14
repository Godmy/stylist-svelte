<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Drawer from './index.svelte';

  type Props = {
    position: 'left' | 'right' | 'top' | 'bottom';
    size: string;
    showBackdrop: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'position', type: 'select', options: ['left', 'right', 'top', 'bottom'], defaultValue: 'right' },
    { name: 'size', type: 'text', defaultValue: '360px' },
    { name: 'showBackdrop', type: 'boolean', defaultValue: true }
  ];

  let isOpen = $state(false);
</script>

<Story
  id="molecules-drawer"
  title="Drawer"
  component={Drawer}
  category="Molecules"
  description="Anchored surface that slides in from any edge for contextual tasks."
  controls={controls}
>
  {#snippet children(props: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="mb-4 flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Demo canvas</p>
            <p class="text-lg text-[--color-text-primary]">Open the drawer to preview motion + sizing.</p>
          </div>
          <button
            class="rounded-full bg-[--color-primary-600] px-4 py-1 text-xs font-semibold text-[--color-text-inverse]"
            onclick={() => (isOpen = true)}
          >
            Launch drawer
          </button>
        </header>

        <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-6 text-sm text-[--color-text-secondary]">
          Simulate a settings panel, filters, or conversation details.
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Positions</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Left/right drawers are great for detail panes; top/bottom work for snackbars or command palettes.
        </p>
        <ul class="mt-4 space-y-2 text-sm text-[--color-text-primary]">
          <li>Left/right: recommended widths 320–480px.</li>
          <li>Top/bottom: heights 25–50vh for focus tasks.</li>
          <li>Backdrop optional; keep it for destructive flows.</li>
        </ul>
      </div>
    </section>

    <Drawer
      open={isOpen}
      position={props.position}
      size={props.size}
      showBackdrop={props.showBackdrop}
      on:close={() => (isOpen = false)}
    >
      <svelte:fragment slot="header">
        <div class="flex items-center justify-between">
          <h2 class="text-base font-semibold text-[--color-text-primary]">Project settings</h2>
          <span class="text-xs uppercase tracking-wide text-[--color-text-secondary]">{props.position} · {props.size}</span>
        </div>
      </svelte:fragment>

      <p class="text-sm text-[--color-text-secondary]">
        Use drawers for quick edits that don’t warrant a full page. They should feel fast and reversible.
      </p>

      <svelte:fragment slot="actions">
        <div class="flex justify-end gap-2">
          <button class="rounded-full border border-[--color-border-primary] px-4 py-2 text-sm font-semibold" onclick={() => (isOpen = false)}>
            Cancel
          </button>
          <button class="rounded-full bg-[--color-primary-600] px-4 py-2 text-sm font-semibold text-[--color-text-inverse]">
            Save changes
          </button>
        </div>
      </svelte:fragment>
    </Drawer>
  {/snippet}
</Story>



