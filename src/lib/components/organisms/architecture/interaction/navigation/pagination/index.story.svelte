<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Pagination from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      {
        name: 'currentPage',
        type: 'number',
        defaultValue: 1,
        min: 1
      },
      {
        name: 'totalPages',
        type: 'number',
        defaultValue: 10,
        min: 1,
        max: 100
      },
      {
        name: 'showFirstLast',
        type: 'boolean',
        defaultValue: true
      }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type Props = {
    currentPage: number;
    totalPages: number;
    showFirstLast: boolean;
  };
</script>

<div class="sb-organisms-pagination">
  <Story
    {id}
    {title}
    component={Pagination}
    category="Organisms"
    description="A component for navigating through multiple pages of content."
    tags={['navigation', 'pagination', 'paging']}
    controls={controls}
  >
    {#snippet children(props: Props)}
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-6">Pagination</h2>
        <div class="max-w-md mx-auto">
          <Pagination
            currentPage={props.currentPage}
            totalPages={props.totalPages}
            showFirstLast={props.showFirstLast}
          />
        </div>
      </div>
    {/snippet}
  </Story>
</div>


