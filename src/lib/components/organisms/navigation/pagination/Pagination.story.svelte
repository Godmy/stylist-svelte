<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Pagination from './Pagination.svelte';

  type Props = {
    currentPage: number;
    totalPages: number;
    showFirstLast: boolean;
  };

  const controls: ControlConfig[] = [
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
  ];
</script>

<Story
  id="molecules-pagination"
  title="Pagination"
  component={Pagination}
  category="Molecules"
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