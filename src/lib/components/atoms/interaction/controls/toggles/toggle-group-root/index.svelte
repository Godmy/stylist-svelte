<script lang="ts">
  import { setContext } from 'svelte';
  import type { ToggleGroupRootProps } from '$stylist/design-system/attributes';
  import { createToggleGroupRootState } from '../../state.svelte';

  let props: ToggleGroupRootProps = $props();

  const toggleGroupState = createToggleGroupRootState(props);

  let internalValue = $state<string | string[] | null>(props.value ?? null);

  $effect(() => {
    internalValue = props.value ?? null;
  });

  function updateValue(newValue: string) {
    let newValueState: string | string[] | null = internalValue;
    if (toggleGroupState.type === 'single') {
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
    const event = new CustomEvent('valueChange', { detail: { value: newValueState } });
    props.onvalueChange?.(event);
  }

  setContext('toggleGroup', {
    updateValue,
    get value() {
      return internalValue;
    },
    disabled: toggleGroupState.disabled
  });

  const restProps = $derived((() => {
    const {
      value: _value,
      type: _type,
      disabled: _disabled,
      children: _children,
      onvalueChange: _onvalueChange,
      class: _class,
      ...rest
    } = props;
    return rest;
  })());
</script>

<div class={toggleGroupState.classes} role="group" {...restProps}>
  {@render props.children?.()}
</div>

