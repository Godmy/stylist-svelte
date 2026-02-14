<script lang="ts">
  let {
    value = '',
    placeholder = 'Search...',
    onValueInput,
    onValueChange,
    /** @deprecated use onValueInput/onValueChange */
    onInput = (value: string) => {},
    class: className = ''
  } = $props<{
    value?: string;
    placeholder?: string;
    onValueInput?: (value: string) => void;
    onValueChange?: (value: string) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string) => void;
    class?: string;
  }>();

  let localValue = $state(value);

  $effect(() => {
    localValue = value;
  });

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    localValue = target.value;
    onValueInput?.(localValue);
    onValueChange?.(localValue);
    onInput(localValue);
  };
</script>

<div class={`relative ${className}`}>
  <input
    type="text"
    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder={placeholder}
    value={localValue}
    oninput={handleInput}
  />
  <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
    <!-- Search icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
</div>
