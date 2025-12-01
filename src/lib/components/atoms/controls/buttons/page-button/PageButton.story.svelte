<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PageButton from './PageButton.svelte';

  type PageButtonStoryProps = {
    page: number;
    isActive: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'page',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'isActive',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-page-button"
  title="PageButton"
  component={PageButton}
  category="Molecules"
  description="A button component for page navigation."
  tags={['button', 'navigation', 'pagination']}
  controls={controls}
>
  {#snippet children(props: PageButtonStoryProps)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Page Button</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <PageButton page={props.page} isActive={props.isActive} disabled={props.disabled} />
        <PageButton page={2} isActive={false} disabled={props.disabled} />
        <PageButton page={3} isActive={true} disabled={props.disabled} />
        <PageButton page={4} isActive={false} disabled={true} />
      </div>
    </div>
  {/snippet}
</Story>