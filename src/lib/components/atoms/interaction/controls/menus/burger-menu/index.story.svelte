<script lang="ts">
  import BurgerMenu from './index.svelte';
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  let open = $state(false);

  const controls: ControlConfig[] = [
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'color', type: 'color', defaultValue: '#000000' },
    { name: 'activeColor', type: 'color', defaultValue: '#007bff' }
  ];
</script>

# BurgerMenu

<Story id="burgermenu-story" title="BurgerMenu" component={BurgerMenu} {controls}>
  <div class="space-y-4 p-8">
    <div class="flex items-center gap-4">
      <BurgerMenu size="md" color="#000000" activeColor="#007bff" />
      <p>State: {open ? 'Open' : 'Closed'}</p>
    </div>
  </div>
</Story>

