<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import Dot from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'color', type: 'select', options: ['primary','secondary','success','warning','danger','info','gray'], defaultValue: 'primary' },
    { name: 'size', type: 'select', options: ['sm','md','lg'], defaultValue: 'md' }
  ];
</script>

<Story id="atoms-dot" title="Dot" component={Dot} category="Atoms" description="A small status dot indicator." controls={controls}>
  {#snippet children(values: any)}
    <div class="flex items-center space-x-3">
      <Dot color={values.color} size={values.size} />
      <span class="text-[--color-text-primary]">Status Indicator</span>
    </div>
  {/snippet}
</Story>



