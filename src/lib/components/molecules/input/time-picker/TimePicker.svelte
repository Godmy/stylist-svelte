<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { Clock } from 'lucide-svelte';

  type Props = {
    value?: string;
    disabled?: boolean;
    class?: string;
    dropdownClass?: string;
    showSeconds?: boolean;
  } & HTMLAttributes<HTMLInputElement>;

  const dispatch = createEventDispatcher<{ change: { time: string } }>();

  let {
    value = '00:00',
    disabled = false,
    class: className = '',
    dropdownClass = '',
    showSeconds = false,
    ...restProps
  }: Props = $props();

  let isOpen = $state(false);
  let selectedTime = $state<string>(value);
  let timeInputRef: HTMLInputElement;
  let timePickerRef = $state<HTMLDivElement>();

  function setTime(hours: number, minutes: number, seconds: number = 0) {
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${showSeconds ? `:${seconds.toString().padStart(2, '0')}` : ''}`;
    selectedTime = timeString;
    updateValue();
  }

  function updateValue() {
    dispatch('change', { time: selectedTime });
    const event = new CustomEvent('change', { 
      detail: { time: selectedTime },
      bubbles: true
    });
    timeInputRef?.dispatchEvent(event);
  }

  function toggleDropdown() {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  function formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${showSeconds ? `:${seconds.toString().padStart(2, '0')}` : ''}`;
  }

  // Handle clicks outside to close the dropdown
  $effect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        timeInputRef && 
        timePickerRef && 
        !timeInputRef.contains(event.target as Node) && 
        !timePickerRef.contains(event.target as Node)
      ) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  // Create time options
  const timeOptions: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      if (showSeconds) {
        for (let second = 0; second < 60; second += 15) {
          timeOptions.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`);
        }
      } else {
        timeOptions.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
      }
    }
  }
</script>

<div class="relative" class:className>
  <div class="relative">
    <input
      bind:this={timeInputRef}
      type="text"
      class={`w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
        disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'cursor-pointer'
      }`}
      readonly
      value={selectedTime}
      onclick={toggleDropdown}
      disabled={disabled}
      {...restProps}
    />
    <button
      type="button"
      class="absolute right-0 top-0 h-full px-3 rounded-r-md hover:bg-gray-100"
      onclick={toggleDropdown}
      disabled={disabled}
    >
      <Clock class="w-4 h-4 text-gray-500" />
    </button>
  </div>

  {#if isOpen}
    <div
      bind:this={timePickerRef}
      class={`absolute z-10 w-full mt-1 p-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto ${dropdownClass}`}
      onclick={(e: Event) => e.stopPropagation()}
      onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      {#each timeOptions as time}
        <div
          class={`p-2 hover:bg-gray-100 cursor-pointer ${
            selectedTime === time ? 'bg-blue-100' : ''
          }`}
          onclick={() => {
            selectedTime = time;
            updateValue();
            isOpen = false;
          }}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              selectedTime = time;
              updateValue();
              isOpen = false;
            }
          }}
          role="option"
          aria-selected={selectedTime === time}
          tabindex={0}
        >
          {time}
        </div>
      {/each}
    </div>
  {/if}
</div>
