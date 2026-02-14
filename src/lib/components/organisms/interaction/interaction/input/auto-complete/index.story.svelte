<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import AutoComplete from './index.svelte';

  const options = [
    { id: '1', label: 'Apple', value: 'apple' },
    { id: '2', label: 'Banana', value: 'banana' },
    { id: '3', label: 'Cherry', value: 'cherry' }
  ];
</script>

<Story id="organisms-auto-complete" title="Organisms / Interaction / Input / Auto Complete" component={AutoComplete} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4 max-w-md"><AutoComplete options={options} showAllSuggestions /></div>{/snippet}
</Story>
