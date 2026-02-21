<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Pagination from './index.svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'currentPage',
      type: CONTROL_TYPES.SELECT,
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      defaultValue: 1
    },
    {
      name: 'totalPages',
      type: CONTROL_TYPES.SELECT,
      options: [5, 10, 15, 20],
      defaultValue: 10
    },
    {
      name: 'showFirstLast',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showPrevNext',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showDots',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'maxVisible',
      type: CONTROL_TYPES.SELECT,
      options: [3, 5, 7, 9],
      defaultValue: 5
    }
  ];
</script>

<Story
  {controls}
  title="Pagination"
  category="Organisms/Interaction/Navigation"
  description="A component for navigating through multiple pages of content."
  tags={['pagination', 'navigation', 'pages', 'paging']}
>
  {#snippet children(values: any)}
    <div class="p-6">
      <div class="max-w-md mx-auto">
        <Pagination
          currentPage={values.currentPage}
          totalPages={values.totalPages}
          showFirstLast={values.showFirstLast}
          showPrevNext={values.showPrevNext}
          showDots={values.showDots}
          maxVisible={values.maxVisible}
        />
      </div>
    </div>
  {/snippet}
</Story>


