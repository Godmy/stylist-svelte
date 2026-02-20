<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PermissionGate from './index.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    hasPermission: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'hasPermission',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-permission-gate"
  title="PermissionGate"
  component={PermissionGate}
  category="Molecules"
  description="A component to conditionally render content based on permissions."
  tags={['security', 'permission', 'authorization']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PermissionGate Story</h2>
      <PermissionGate
        hasPermission={values.hasPermission}
      >
        {#snippet children()}
          <div class="p-4 bg-green-100 border border-green-300 rounded">
            <p>This content is visible because you have permission.</p>
          </div>
        {/snippet}
      </PermissionGate>
    </div>
  {/snippet}
</Story>


