<script lang="ts">
  import { X } from 'lucide-svelte';
  import type { TagInputProps } from '$stylist/design-system/props/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction-input';

  let {
    tags = [],
    placeholder = 'Enter tags...',
    disabled = false,
    maxTags = 0,
    delimiter = ',',
    validator = () => true,
    class: className = '',
    inputClass = '',
    tagClass = '',
    removeButtonClass = '',
    onInput,
    onChange,
    ...restProps
  }: TagInputProps = $props();

  let currentTags = $state<string[]>([...tags]);
  let inputText = $state('');

  function emit() {
    onInput?.([...currentTags]);
    onChange?.([...currentTags]);
  }

  function addTag(raw: string) {
    const tag = raw.trim();
    if (!tag || currentTags.includes(tag) || !validator(tag) || (maxTags > 0 && currentTags.length >= maxTags)) return;
    currentTags = [...currentTags, tag];
    inputText = '';
    emit();
  }

  function removeTag(index: number) {
    if (disabled) return;
    currentTags = currentTags.filter((_, i) => i !== index);
    emit();
  }
</script>

<div class={InteractionInputStyleManager.root('c-tag-input flex flex-wrap gap-2 items-center', className)} {...restProps}>
  {#each currentTags as tag, index}
    <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 ${tagClass}`}>
      {tag}
      <button type="button" class={`ml-2 ${removeButtonClass}`} onclick={() => removeTag(index)}><X class="h-4 w-4" /></button>
    </span>
  {/each}

  <input
    class={InteractionInputStyleManager.input(`px-3 py-2 min-w-[180px] ${inputClass}`)}
    placeholder={placeholder}
    value={inputText}
    disabled={disabled}
    oninput={(e) => {
      inputText = (e.target as HTMLInputElement).value;
      if (inputText.includes(delimiter)) {
        const parts = inputText.split(delimiter);
        for (let i = 0; i < parts.length - 1; i += 1) addTag(parts[i]);
        inputText = parts[parts.length - 1];
      }
    }}
    onkeydown={(e) => {
      if (e.key === 'Enter' || e.key === delimiter) {
        e.preventDefault();
        addTag(inputText);
      }
      if (e.key === 'Backspace' && !inputText && currentTags.length > 0) {
        removeTag(currentTags.length - 1);
      }
    }}
  />
</div>
