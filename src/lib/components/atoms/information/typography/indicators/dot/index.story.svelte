<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import Dot from './index.svelte';

  const controls: ControlConfig[] = [
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
