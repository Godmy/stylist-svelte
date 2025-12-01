<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Heart, Check, X, CheckCircle } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Tooltip from '../tooltips/Tooltip.svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    inWishlist?: boolean;
    class?: string;
    buttonClass?: string;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
    showLabel?: boolean;
    label?: string;
    tooltip?: string;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    disabled?: boolean;
    onToggle?: (inWishlist: boolean) => void;
    onSuccess?: () => void;
    onError?: (error: string) => void;
  };

  let {
    inWishlist = false,
    class: hostClass = '',
    buttonClass = '',
    size = 'md',
    variant = 'ghost',
    showLabel = true,
    label = 'Wishlist',
    tooltip,
    tooltipPosition = 'top',
    disabled = false,
    onToggle,
    onSuccess,
    onError,
    ...restProps
  }: Props = $props();

  let isLoading = $state(false);
  let showMessage = $state(false);
  let message = $state('');

  async function toggleWishlist() {
    if (disabled || isLoading) return;

    isLoading = true;
    message = '';

    try {
      onToggle?.(!inWishlist);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (Math.random() > 0.1) { // 90% success rate simulation
        inWishlist = !inWishlist;
        onSuccess?.();
        message = inWishlist ? 'Added to wishlist!' : 'Removed from wishlist!';
        showMessage = true;
        setTimeout(() => showMessage = false, 2000);
      } else {
        throw new Error('Failed to update wishlist');
      }
    } catch (error) {
      console.error('Wishlist error:', error);
      onError?.(error instanceof Error ? error.message : 'Unknown error');
      message = 'Failed to update wishlist';
      showMessage = true;
      setTimeout(() => showMessage = false, 2000);
    } finally {
      isLoading = false;
    }
  }

  let buttonText = $derived(inWishlist ? 'In Wishlist' : 'Add to Wishlist');
  let buttonVariant = $derived(inWishlist ? 'primary' : variant);
  let buttonSize = $derived(size);
</script>

<div class={`wishlist-button ${hostClass}`} {...restProps}>
  <Tooltip text={tooltip || (inWishlist ? 'Remove from wishlist' : 'Add to wishlist')} position={tooltipPosition}>
    <Button
      variant={buttonVariant}
      size={buttonSize}
      class={`${buttonClass} ${inWishlist ? 'bg-red-100 hover:bg-red-200 text-red-600' : ''}`}
      onclick={toggleWishlist}
      disabled={disabled || isLoading}
      aria-pressed={inWishlist}
    >
      {#if isLoading}
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
      {:else if inWishlist}
        <Check class="h-4 w-4 mr-2" />
      {:else}
        <Heart class={`h-4 w-4 mr-2 ${inWishlist ? 'fill-current text-red-500' : ''}`} />
      {/if}
      
      {#if showLabel}
        <span>{inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
      {/if}
    </Button>
  </Tooltip>
  
  {#if showMessage}
    <div class="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-md shadow-lg px-4 py-3 flex items-center space-x-2 z-50">
      <CheckCircle class="h-5 w-5 text-green-500" />
      <span class="text-sm text-gray-700">{message}</span>
      <button 
        class="ml-2 text-gray-500 hover:text-gray-700"
        onclick={() => showMessage = false}
      >
        <X class="h-4 w-4" />
      </button>
    </div>
  {/if}
</div>
