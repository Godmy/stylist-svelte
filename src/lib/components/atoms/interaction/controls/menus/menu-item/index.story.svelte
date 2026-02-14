<script lang="ts">
  import MenuItem from './index.svelte';
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  type MenuItemVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';

  let active = $state(false);
  let variant = $state<MenuItemVariant>('default');
  let disabled = $state(false);
  let text = $state('Menu Item');

  const controls: ControlConfig[] = [
    { name: 'active', type: 'boolean', defaultValue: false },
    { name: 'variant', type: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'ghost', 'link'], defaultValue: 'default' },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];
</script>

# MenuItem

<Story id="menuitem-story" title="MenuItem" component={MenuItem} {controls}>
  <div class="space-y-4 p-8">
    <MenuItem active={active} variant={variant} disabled={disabled}>
      {text}
    </MenuItem>

    <div class="space-y-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={active} /> Active
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" bind:checked={disabled} /> Disabled
        </label>
      </div>

      <div>
        <label>
          Variant:
          <select bind:value={variant}>
            <option value="default">Default</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
            <option value="info">Info</option>
            <option value="ghost">Ghost</option>
            <option value="link">Link</option>
          </select>
        </label>
      </div>

      <div>
        <label>Text: <input type="text" bind:value={text} /></label>
      </div>
    </div>
  </div>
</Story>




