<script lang="ts">
  import Tag from '$lib/components/atoms/typography/elements/Tag.svelte';

  type Suggestion = {
    id: string;
    label: string;
  };

  type Props = {
    id: string;
    value?: string[];
    suggestions?: Suggestion[];
    label?: string;
    placeholder?: string;
    description?: string;
    allowCustom?: boolean;
    maxTags?: number;
    disabled?: boolean;
    class?: string;
  };

  let {
    id,
    value = $bindable<string[]>([]),
    suggestions = [],
    label,
    placeholder = 'Добавьте тег и нажмите Enter',
    description,
    allowCustom = true,
    maxTags,
    disabled = false,
    class: className = ''
  }: Props = $props();

  let inputValue = $state('');
  let inputRef = $state<HTMLInputElement | null>(null);
  let isFocused = $state(false);

  const availableSuggestions = $derived(() =>
    suggestions.filter((item) => !value.includes(item.id))
  );

  const filteredSuggestions = $derived(() => {
    const term = inputValue.trim().toLowerCase();
    if (!term) return availableSuggestions();
    return availableSuggestions().filter((item) => item.label.toLowerCase().includes(term));
  });

  function addTag(id: string) {
    if (disabled) return;
    if (value.includes(id)) return;
    if (maxTags && value.length >= maxTags) return;
    value = [...value, id];
    inputValue = '';
    focusInput();
  }

  function addCustomTag() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const existing = suggestions.find(
      (item) => item.label.toLowerCase() === trimmed.toLowerCase()
    );

    if (existing) {
      addTag(existing.id);
    } else if (allowCustom) {
      addTag(trimmed);
    }
  }

  function removeTag(id: string) {
    if (disabled) return;
    value = value.filter((tag) => tag !== id);
    focusInput();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addCustomTag();
    } else if (event.key === 'Backspace' && !inputValue) {
      value = value.slice(0, -1);
    }
  }

  function focusInput() {
    requestAnimationFrame(() => inputRef?.focus());
  }
</script>

<div class="space-y-2 {className}">
  {#if label}
    <label for={id} class="text-sm font-medium text-gray-700">{label}</label>
  {/if}

  <div class="rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500 {disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : ''}">
    <div class="flex flex-wrap gap-2">
      {#each value as tagId (tagId)}
        {@const tagLabel = suggestions.find((item) => item.id === tagId)?.label ?? tagId}
        <Tag
          text={tagLabel}
          variant="primary"
          closable={!disabled}
          on:close={() => removeTag(tagId)}
        />
      {/each}

      {#if (!maxTags || value.length < maxTags) && !disabled}
        <input
          id={id}
          bind:this={inputRef}
          class="flex-1 min-w-[120px] bg-transparent text-sm text-gray-800 placeholder:text-gray-400 outline-none"
          placeholder={value.length === 0 ? placeholder : ''}
          bind:value={inputValue}
          onkeydown={handleKeydown}
          onfocus={() => (isFocused = true)}
          onblur={() => (isFocused = false)}
        />
      {/if}
    </div>

    {#if !disabled && filteredSuggestions().length > 0 && inputValue && isFocused}
      {@const options = filteredSuggestions()}
      <div class="mt-2 flex flex-wrap gap-2">
        {#each options as suggestion (suggestion.id)}
          <button
            type="button"
            class="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            onclick={() => addTag(suggestion.id)}
          >
            {suggestion.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>

  {#if description}
    <p class="text-sm text-gray-500">{description}</p>
  {/if}

  {#if maxTags}
    <p class="text-xs text-gray-400">{value.length}/{maxTags} тегов выбрано</p>
  {/if}
</div>