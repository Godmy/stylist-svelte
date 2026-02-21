<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { PropDefinition } from '$stylist/design-system/props/information/molecules-migration';
  import PropsEditor from './index.svelte';

  const defs: PropDefinition[] = [
    { name: 'title', type: 'string', defaultValue: 'Default title', description: 'Component title' },
    { name: 'size', type: 'enum', defaultValue: 'md', options: ['sm', 'md', 'lg'], description: 'Size variant' },
    { name: 'visible', type: 'boolean', defaultValue: true, description: 'Visibility flag' },
    { name: 'count', type: 'number', defaultValue: 5, min: 0, max: 100, step: 1, description: 'Count value' }
  ];
  const values = { title: 'My component', size: 'md', visible: true, count: 10 };
</script>

<Story id="molecules-props-editor" title="Molecules / Development / Playground / Props Editor" component={PropsEditor} category="Molecules/Development/Playground">
  {#snippet children()}<div class="p-4"><PropsEditor propDefinitions={defs} propValues={values} /></div>{/snippet}
</Story>
