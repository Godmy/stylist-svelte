<script lang="ts">
  import BurgerMenu from './BurgerMenu.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let open = false;

  const controls: ControlConfig[] = [
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'color', type: 'color', defaultValue: '#000000' },
    { name: 'activeColor', type: 'color', defaultValue: '#007bff' }
  ];
</script>

# BurgerMenu

<Story title="BurgerMenu" {controls}>
  <div class="space-y-4 p-8">
    <div class="flex items-center gap-4">
      <BurgerMenu size="md" color="#000000" activeColor="#007bff" bind:open={open} />
      <p>State: {open ? 'Open' : 'Closed'}</p>
    </div>
  </div>
</Story>