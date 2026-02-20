<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import MenuItem from './index.svelte';

  const variantOptions = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'ghost', 'link'];
  
  const controls: ControlConfig[] = [
    {
      name: 'active',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the menu item is active'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'default',
      options: variantOptions,
      description: 'Variant of the menu item'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the menu item is disabled'
    },
    {
      name: 'external',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether the link opens in a new tab'
    }
  ];
</script>

<Story
  id="atoms-menu-item"
  title="MenuItem"
  component={MenuItem}
  category="Atoms/Interaction/Controls/Menus"
  description="MenuItem component for navigation menus."
  tags={['menu', 'navigation', 'item', 'link']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4">
      <MenuItem
        {...props}
        icon="home"
        onValueChange={() => console.log('Menu item clicked')}
      >
        Home
      </MenuItem>
    </div>
  {/snippet}
  
  {#snippet variants}
    <div class="grid grid-cols-1 gap-4 p-4">
      <MenuItem active={true} variant="default">
        Active Item
      </MenuItem>
      <MenuItem active={false} variant="default" disabled={true}>
        Disabled Item
      </MenuItem>
      <MenuItem active={false} variant="default" external={true} href="#">
        External Link
      </MenuItem>
      <MenuItem active={false} variant="primary">
        Primary Item
      </MenuItem>
      <MenuItem active={false} variant="success">
        Success Item
      </MenuItem>
      <MenuItem active={false} variant="danger">
        Danger Item
      </MenuItem>
    </div>
  {/snippet}
</Story>
