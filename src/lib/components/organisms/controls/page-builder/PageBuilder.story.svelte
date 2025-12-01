<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PageBuilder from './PageBuilder.svelte';

  type Props = {
    title: string;
    showToolbar: boolean;
    editable: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Page Builder'
    },
    {
      name: 'showToolbar',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'editable',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-page-builder"
  title="PageBuilder"
  component={PageBuilder}
  category="Molecules"
  description="A component for building and editing pages."
  tags={['builder', 'editor', 'page']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">{props.title}</h2>
      <div class="max-w-3xl mx-auto border rounded-lg h-96">
        <PageBuilder 
          showToolbar={props.showToolbar}
          editable={props.editable}
        />
      </div>
    </div>
  {/snippet}
</Story>