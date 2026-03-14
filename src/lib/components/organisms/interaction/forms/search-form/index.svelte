<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Search = 'search';

  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { SearchFormProps } from '$stylist/design-system/contracts/interaction/interaction-forms';
  let { query='', placeholder='Search...', class: className='', ...restProps }: SearchFormProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-search-form border rounded-lg p-3 flex items-center gap-2', className)} {...restProps}>
  <BaseIcon name={Search} class="h-4 w-4 text-[var(--color-text-secondary)]" />
  <input class="flex-1 border rounded px-2 py-1" placeholder={placeholder} value={query} />
  <button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="submit">Search</button>
</form>





