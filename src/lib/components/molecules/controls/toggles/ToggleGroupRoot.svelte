<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { setContext } from 'svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    value?: string | string[] | null;
    type?: 'single' | 'multiple';
    disabled?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value,
    type = 'single',
    disabled = false,
    children,
    ...restProps
  }: Props = $props();

  let internalValue = $state<string | string[] | null>(value ?? null);

  // Update internal value when prop value changes
  $effect(() => {
    internalValue = value ?? null;
  });

  function updateValue(newValue: string) {
    let newValueState: string | string[] | null = internalValue;
    if (type === 'single') {
      newValueState = internalValue === newValue ? null : newValue;
    } else {
      if (Array.isArray(internalValue)) {
        if (internalValue.includes(newValue)) {
          newValueState = internalValue.filter((v: string) => v !== newValue);
        } else {
          newValueState = [...internalValue, newValue];
        }
      } else {
        newValueState = [newValue];
      }
    }
    internalValue = newValueState;
    // Notify parent of value change
    const event = new CustomEvent('valueChange', { detail: { value: newValueState } });
    dispatchEvent(event);
  }

  // Set context for child ToggleGroupItem components
  setContext('toggleGroup', {
    updateValue,
    get value() {
      return internalValue;
    },
    disabled
  });
</script>

<div class="inline-flex items-center bg-gray-100 p-1 rounded-md" role="group" {...restProps}>
  {@render children?.()}
</div>