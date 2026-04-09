<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { ITimePickerProps } from '$stylist/input/interface/component/time-picker/other';
  import { createTimePickerState } from '$stylist/input/function/state/time-picker';

  const Clock = 'clock';

  let props: ITimePickerProps = $props();
  const state = createTimePickerState(props);
</script>

<div class={`relative ${state.className}`.trim()}>
  <div class="relative">
    <input
      use:state.timeInputAction
      type="text"
      class={`w-full p-2 pr-10 border border-[var(--color-border-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
        state.disabled ? 'bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)] cursor-not-allowed' : 'cursor-pointer'
      }`}
      readonly
      value={state.selectedTime}
      onclick={state.toggleDropdown}
      disabled={state.disabled}
      {...props}
    />
    <button
      type="button"
      class="absolute right-0 top-0 h-full px-3 rounded-r-md hover:bg-[var(--color-background-secondary)]"
      onclick={state.toggleDropdown}
      disabled={state.disabled}
    >
      <BaseIcon name={Clock} class="w-4 h-4 text-[var(--color-text-secondary)]" />
    </button>
  </div>

  {#if state.isOpen}
    <div
      use:state.timePickerAction
      class={`absolute z-[var(--z-index-docked)] w-full mt-1 p-2 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg max-h-60 overflow-y-auto ${state.dropdownClass}`}
      onclick={(e: Event) => e.stopPropagation()}
      onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      {#each state.timeOptions as time}
        <div
          class={`p-2 hover:bg-[var(--color-background-secondary)] cursor-pointer ${
            state.selectedTime === time ? 'bg-[var(--color-primary-100)]' : ''
          }`}
          onclick={() => {
            state.selectedTime = time;
            state.updateValue();
            state.isOpen = false;
          }}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              state.selectedTime = time;
              state.updateValue();
              state.isOpen = false;
            }
          }}
          role="option"
          aria-selected={state.selectedTime === time}
          tabindex={0}
        >
          {time}
        </div>
      {/each}
    </div>
  {/if}
</div>






