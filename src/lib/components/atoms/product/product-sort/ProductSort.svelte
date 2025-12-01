<script lang="ts">
  let {
    options = [],
    selectedOption = '',
    onSortChange = (option: string) => {},
    class: className = ''
  } = $props<{
    options: Array<{ value: string; label: string }>;
    selectedOption?: string;
    onSortChange?: (option: string) => void;
    class?: string;
  }>();

  let localSelectedOption = $state(selectedOption);

  $effect(() => {
    localSelectedOption = selectedOption;
  });
</script>

<div class={`flex items-center ${className}`}>
  <span class="mr-2 text-gray-700">Sort by:</span>
  <select
    bind:value={localSelectedOption}
    onchange={() => onSortChange(localSelectedOption)}
    class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
</div>