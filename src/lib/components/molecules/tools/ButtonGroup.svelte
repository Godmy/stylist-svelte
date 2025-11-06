<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type ButtonGroupVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';
  type ButtonGroupOrientation = 'horizontal' | 'vertical';

  type Props = {
    size?: 'sm' | 'md' | 'lg';
    variant?: ButtonGroupVariant;
    orientation?: ButtonGroupOrientation;
    fullWidth?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    size = 'md',
    variant = 'primary',
    orientation = 'horizontal',
    fullWidth = false,
    children,
    ...restProps
  }: Props = $props();

  let containerClasses = $derived([
    'inline-flex',
    orientation === 'horizontal' ? 'flex-row' : 'flex-col',
    orientation === 'horizontal' ? 'divide-x divide-gray-300 rounded-md' : 'divide-y divide-gray-300 rounded-md',
    fullWidth ? 'w-full' : '',
  ].filter(Boolean).join(' '));
  
  let buttonClasses = $derived([
    'not-first:rounded-none',
    'not-last:rounded-none',
    orientation === 'horizontal' ? 'not-first:ml-0' : 'not-first:mt-0',
  ].join(' '));
</script>

<div class={containerClasses} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</div>