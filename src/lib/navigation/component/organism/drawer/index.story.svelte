<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import Drawer from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'open', type: 'boolean', defaultValue: true },
    { name: 'position', type: 'select', defaultValue: 'right', options: ['left', 'right', 'top', 'bottom'] },
    { name: 'size', type: 'text', defaultValue: '320px' },
    { name: 'closable', type: 'boolean', defaultValue: true },
    { name: 'showBackdrop', type: 'boolean', defaultValue: true }
  ];
</script>

<Story component={Drawer} title="Drawer" description="Slide-in panel for secondary navigation and settings." {controls}>
  {#snippet children(values: any)}
    <Drawer
      open={values.open as boolean}
      position={values.position as 'left' | 'right' | 'top' | 'bottom'}
      size={values.size as string}
      closable={values.closable as boolean}
      showBackdrop={values.showBackdrop as boolean}
    >
      {#snippet header()}
        <h2 class="text-base font-semibold">Quick settings</h2>
      {/snippet}
      {#snippet children()}
        <div class="space-y-2 text-sm">
          <p>Notifications</p>
          <p>Theme</p>
          <p>Privacy</p>
        </div>
      {/snippet}
      {#snippet actions()}
        <div class="flex gap-2">
          <button class="rounded border px-3 py-1 text-sm">Cancel</button>
          <button class="rounded bg-[--color-primary-600] px-3 py-1 text-sm text-[var(--color-text-inverse)]">Save</button>
        </div>
      {/snippet}
    </Drawer>
  {/snippet}
</Story>
