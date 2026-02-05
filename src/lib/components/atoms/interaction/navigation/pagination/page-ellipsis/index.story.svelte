<script lang="ts">
  import PageEllipsis from './index.svelte';
  import { Story } from '$stylist/design-system/playground';

  const pagination = [1, 2, 3, 4, 5, 6, 7];
  let currentPage = $state(4);

  function goTo(page: number) {
    currentPage = page;
  }
</script>

<Story
  component={PageEllipsis}
>
  {#snippet children()}
    <div class="rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm dark:border-gray-700/80 dark:bg-gray-900/40">
      <p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
        Page ellipsis appears between button groups to keep long pagination ranges compact.
      </p>
      <nav class="flex flex-wrap items-center gap-2">
        <button
          class={`rounded-full border px-3 py-1 text-sm ${currentPage === 1 ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300'}`}
          onclick={() => goTo(1)}
        >
          1
        </button>
        <PageEllipsis />
        {#each pagination.slice(2, 5) as page}
          <button
            class={`rounded-full border px-3 py-1 text-sm ${currentPage === page ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300'}`}
            onclick={() => goTo(page)}
          >
            {page}
          </button>
        {/each}
        <PageEllipsis />
        <button
          class={`rounded-full border px-3 py-1 text-sm ${currentPage === 7 ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300'}`}
          onclick={() => goTo(7)}
        >
          7
        </button>
      </nav>
    </div>
  {/snippet}
</Story>


