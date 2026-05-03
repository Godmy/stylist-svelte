<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import type { SlotTagInput as TagInputProps } from '$stylist/input/interface/slot/tag-input';
  import { createTagInputState } from '$stylist/input/function/state/tag-input';
  import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
  const X = 'x';

  let props: TagInputProps = $props();
  const state = createTagInputState(props);
</script>

<div class={InteractionInputStyleManager.root('c-tag-input flex flex-wrap gap-2 items-center', state.className)} {...props}>
  {#each state.currentTags as tag, index}
    <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm bg-[var(--color-primary-100)] text-[var(--color-primary-800)] ${state.tagClass}`}>
      {tag}
      <button type="button" class={`ml-2 ${state.removeButtonClass}`} onclick={() => state.removeTag(index)}><BaseIcon name={X} class="h-4 w-4" /></button>
    </span>
  {/each}

  <input
    class={InteractionInputStyleManager.input(`px-3 py-2 min-w-[180px] ${state.inputClass}`)}
    placeholder={state.placeholder}
    value={state.inputText}
    disabled={state.disabled}
    oninput={state.handleInput}
    onkeydown={state.handleKeyDown}
  />
</div>








