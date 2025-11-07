<script lang="ts">
  import { Loader2 } from 'lucide-svelte';

  type Props = {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'white' | 'gray';
    label?: string;
    class?: string;
  };

  let {
    size = 'md',
    variant = 'primary',
    label = 'Loading...',
    class: className = ''
  }: Props = $props();

  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const variantClasses = {
    primary: 'text-indigo-600',
    white: 'text-white',
    gray: 'text-gray-600'
  };
</script>

<div class="flex items-center justify-center {className}" role="status" aria-live="polite">
  <Loader2
    class="animate-spin {sizeClasses[size]} {variantClasses[variant]}"
    aria-hidden="true"
  />
  <span class="sr-only">{label}</span>
</div>
