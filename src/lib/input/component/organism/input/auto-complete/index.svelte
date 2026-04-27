<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { SlotAutoComplete as AutoCompleteProps } from '$stylist/input/interface/slot/auto-complete';
  import { createAutoCompleteState } from '$stylist/input/function/state/auto-complete';
  import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
  const Search = 'search';

  let props: AutoCompleteProps = $props();
  const state = createAutoCompleteState(props);
</script>

<div class={InteractionInputStyleManager.root('c-auto-complete relative', state.className)}>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <BaseIcon name={Search} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
    </div>
    <input
      type="text"
      class={InteractionInputStyleManager.input(`block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${state.inputClass}`)}
      placeholder={state.placeholder}
      value={state.inputValue}
      oninput={state.handleInput}
      onkeydown={state.handleKeyDown}
      onfocus={state.open}
      onblur={state.close}
      {...props}
    />
  </div>

  {#if state.isOpen && state.options.length > 0}
    <ul class={`absolute z-[var(--z-index-docked)] mt-1 w-full bg-[var(--color-background-primary)] shadow-lg max-h-60 rounded-md py-1 overflow-auto ${state.listClass}`} role="listbox">
      {#each state.options as option, index}
        <li
          class={`relative py-2 px-3 cursor-pointer hover:bg-[var(--color-primary-100)] ${index === state.highlightedIndex ? state.selectedClass : ''} ${state.itemClass}`}
          role="option"
          aria-selected={index === state.highlightedIndex}
          onclick={() => state.handleSelect(option)}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              state.handleSelect(option);
            }
          }}
          tabindex={0}
        >
          <span>{option.label}</span>
          {#if option.meta}
            <span class="ml-2 text-xs text-[var(--color-text-secondary)]">{option.meta}</span>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>








