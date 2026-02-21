<script lang="ts">
  import { Search } from 'lucide-svelte';
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { SearchFormProps } from '$stylist/design-system/props/interaction/interaction-forms';
  let { query='', placeholder='Search...', class: className='', ...restProps }: SearchFormProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-search-form border rounded-lg p-3 flex items-center gap-2', className)} {...restProps}>
  <Search class="h-4 w-4 text-gray-500" />
  <input class="flex-1 border rounded px-2 py-1" placeholder={placeholder} value={query} />
  <button class="px-3 py-1 bg-blue-600 text-white rounded" type="submit">Search</button>
</form>
