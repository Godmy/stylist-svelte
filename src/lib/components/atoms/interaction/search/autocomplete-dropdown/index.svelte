<script lang="ts">
  let {
    options = [],
    value = '',
    placeholder = 'Select...',
    onValueInput,
    onValueChange,
    /** @deprecated use onValueInput/onValueChange */
    onChange = (value: string) => {},
    class: className = ''
  }: {
    options: Array<{ label: string; value: string }>;
    value?: string;
    placeholder?: string;
    onValueInput?: (value: string) => void;
    onValueChange?: (value: string) => void;
    /** @deprecated use onValueInput/onValueChange */
    onChange?: (value: string) => void;
    class?: string;
  } = $props();

  let isOpen = $state(false);
  let localValue = $state(value);

  $effect(() => {
    localValue = value;
  });

  const selectedOption = options.find(option => option.value === localValue);

  const handleSelect = (option: { label: string; value: string }) => {
    localValue = option.value;
    onValueInput?.(option.value);
    onValueChange?.(option.value);
    onChange(option.value);
    isOpen = false;
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      isOpen = !isOpen;
    }
  };

  const handleOptionKeyDown = (e: KeyboardEvent, option: { label: string; value: string }) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect(option);
    }
  };
</script>

<div class={`relative w-full ${className}`}>
  <button
    class="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    onclick={() => (isOpen = !isOpen)}
    onkeydown={handleKeyDown}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
  >
    {selectedOption ? selectedOption.label : placeholder}
    <svg
      class={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-transform ${
        isOpen ? 'rotate-180' : ''
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {#if isOpen}
    <div role="listbox" class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
      {#each options as option, i}
        <div
          role="option"
          aria-selected={localValue === option.value}
          tabindex={0}
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onclick={() => handleSelect(option)}
          onkeydown={(e) => handleOptionKeyDown(e, option)}
        >
          {option.label}
        </div>
      {/each}
    </div>
  {/if}
</div>
