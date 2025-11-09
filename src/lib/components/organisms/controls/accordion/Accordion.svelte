<script lang="ts">
  import { setContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    multiple?: boolean;
    defaultValue?: string[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    class?: string;
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLDivElement>;

  let {
    multiple = false,
    defaultValue = [],
    value,
    onValueChange,
    class: className = '',
    content, // Destructure content
    ...restProps
  }: Props = $props();

  const accordionId = Math.random().toString(36).substring(2, 9);
  let openPanels = $state<string[]>(defaultValue);

  function handleValueChange(panelId: string) {
    let newOpenPanels: string[];

    if (multiple) {
      newOpenPanels = openPanels.includes(panelId)
        ? openPanels.filter(id => id !== panelId)
        : [...openPanels, panelId];
    } else {
      newOpenPanels = openPanels.includes(panelId) ? [] : [panelId];
    }

    openPanels = newOpenPanels;
    onValueChange?.(newOpenPanels);
  }

  function isPanelOpen(panelId: string): boolean {
    return openPanels.includes(panelId);
  }

  setContext('accordion-context', {
    accordionId,
    isPanelOpen,
    handleValueChange
  });
</script>

<div {...restProps} class="w-full space-y-2 {className}">
  {#if content}
    {@render content()}
  {/if}
</div>
