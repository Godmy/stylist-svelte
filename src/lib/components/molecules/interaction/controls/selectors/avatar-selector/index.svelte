<script lang="ts">
  import type { Snippet } from 'svelte';
  
  let {
    src = '',
    alt = 'Avatar',
    size = 'md',
    class: className = '',
    children
  } = $props<{
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    class?: string;
    children?: Snippet;
  }>();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };
</script>

<div class={`inline-block ${className}`}>
  <img 
    src={src} 
    alt={alt} 
    class={`rounded-full object-cover ${sizeClasses[size as keyof typeof sizeClasses]}`}
  />
  {#if children}
    <div class="absolute bottom-0 right-0">
      {@render children()}
    </div>
  {/if}
</div>
