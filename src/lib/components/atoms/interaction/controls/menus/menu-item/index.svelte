<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Icon } from '$stylist/components/atoms';

  type Variant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';
  
  type BaseComponentProps = {
    class?: string;
    'data-testid'?: string;
  };

  type Props = BaseComponentProps & {
    active?: boolean;
    variant?: Variant;
    href?: string;
    icon?: string;
    disabled?: boolean;
    external?: boolean;
    onClick?: (event: MouseEvent) => void;
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { 
    active = false, 
    variant = 'default',
    href,
    icon,
    disabled = false,
    external = false,
    children,
    class: className = '',
    onClick = (event: MouseEvent) => {},
    ...restProps
  }: Props = $props();
  
  let computedClass = $derived(
    `menu-item flex items-center px-4 py-2 text-sm font-medium rounded transition-colors ${
      disabled 
        ? 'text-gray-400 cursor-not-allowed' 
        : active 
          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100' 
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
    } ${className}`
  );
  
  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    onClick(e);
  };
</script>

{#if href}
  <a 
    href={href} 
    class={computedClass}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    aria-current={active ? 'page' : undefined}
    role="menuitem"
    onclick={handleClick}
    {...restProps}
  >
    {#if icon}
      <Icon name={icon} class="mr-2 h-4 w-4" aria-hidden="true" />
    {/if}
    {#if children}
      {@render children()}
    {/if}
    {#if external}
      <Icon name="external-link" class="ml-1 h-4 w-4" aria-hidden="true" />
    {/if}
  </a>
{:else}
  <button 
    class={computedClass}
    disabled={disabled}
    aria-current={active ? 'true' : undefined}
    role="menuitem"
    onclick={handleClick}
    {...restProps}
  >
    {#if icon}
      <Icon name={icon} class="mr-2 h-4 w-4" aria-hidden="true" />
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </button>
{/if}


