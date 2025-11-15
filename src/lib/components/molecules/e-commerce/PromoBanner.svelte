<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, Gift, Percent, Zap, ArrowRight, Timer } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type PromoBanner = {
    id: string;
    title: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    expirationDate?: Date;
    discount?: string; // e.g., "20% OFF", "$10 OFF"
    icon?: 'gift' | 'percent' | 'zap' | 'sale' | 'timer';
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
    dismissible?: boolean;
    autoDismiss?: boolean;
    dismissDelay?: number; // in ms
    onCtaClick?: () => void;
    onDismiss?: (id: string) => void;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    banner: PromoBanner;
    class?: string;
    contentClass?: string;
    ctaClass?: string;
    dismissClass?: string;
    showTimer?: boolean;
    timerPosition?: 'left' | 'right';
    countdownFormat?: 'compact' | 'verbose';
    onCtaClick?: () => void;
    onDismiss?: () => void;
  };

  let {
    banner,
    class: hostClass = '',
    contentClass = '',
    ctaClass = '',
    dismissClass = '',
    showTimer = true,
    timerPosition = 'right',
    countdownFormat = 'compact',
    onCtaClick,
    onDismiss,
    ...restProps
  }: Props = $props();

  let isVisible = $state(true);
  let remainingTime = $state<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  let remainingMs = $state<number | null>(null);

  // Calculate remaining time if expiration date is set
  $effect(() => {
    if (banner.expirationDate) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const expTime = new Date(banner.expirationDate!).getTime();
        const diff = expTime - now;

        if (diff <= 0) {
          clearInterval(interval);
          remainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          remainingMs = 0;
        } else {
          remainingTime = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000)
          };
          remainingMs = diff;
        }
      }, 1000);

      // Cleanup interval when component is destroyed
      return () => clearInterval(interval);
    }
  });

  function handleCtaClick() {
    if (banner.onCtaClick) {
      banner.onCtaClick();
    } else {
      onCtaClick?.();
    }
  }

  function handleDismiss() {
    isVisible = false;
    if (banner.onDismiss) {
      banner.onDismiss(banner.id);
    } else {
      onDismiss?.();
    }
  }

  function formatTimeRemaining(): string {
    if (!remainingTime) return '';
    
    if (countdownFormat === 'verbose') {
      return `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;
    } else {
      // Compact format
      if (remainingTime.days > 0) {
        return `${remainingTime.days}d ${remainingTime.hours}h`;
      } else if (remainingTime.hours > 0) {
        return `${remainingTime.hours}h ${remainingTime.minutes}m`;
      } else {
        return `${remainingTime.minutes}m ${remainingTime.seconds}s`;
      }
    }
  }

  let variantClasses = $derived({
    'primary': 'bg-blue-50 border-blue-200 text-blue-800',
    'secondary': 'bg-purple-50 border-purple-200 text-purple-800',
    'success': 'bg-green-50 border-green-200 text-green-800',
    'warning': 'bg-yellow-50 border-yellow-200 text-yellow-800',
    'danger': 'bg-red-50 border-red-200 text-red-800',
    'info': 'bg-indigo-50 border-indigo-200 text-indigo-800'
  }[banner.variant || 'primary']);

  let IconComponent = $derived.by(() => {
    if (banner.icon === 'gift') return Gift;
    if (banner.icon === 'percent') return Percent;
    if (banner.icon === 'zap') return Zap;
    if (banner.icon === 'timer') return Timer;
    return Gift; // default icon
  });
</script>

{#if isVisible}
  <div class={`promo-banner border rounded-lg p-4 flex items-start ${variantClasses} ${hostClass}`} {...restProps}>
    <div class="flex-shrink-0">
      <Gift class={`h-6 w-6 ${banner.variant === 'warning' ? 'text-yellow-500' : 'text-blue-500'}`} />
    </div>
    
    <div class={`flex-1 min-w-0 ${contentClass}`}>
      <div class="flex items-baseline justify-between">
        <div class="flex items-baseline">
          <h3 class="text-sm font-medium">
            {banner.title}
          </h3>
          {#if banner.discount}
            <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {banner.discount}
            </span>
          {/if}
        </div>
        
        {#if showTimer && banner.expirationDate && remainingTime}
          <div class="ml-4 flex items-center text-xs font-medium">
            <Timer class="h-4 w-4 mr-1" />
            <span class="font-mono">{formatTimeRemaining()}</span>
          </div>
        {/if}
      </div>
      
      {#if banner.description}
        <p class="mt-2 text-sm text-gray-600">
          {banner.description}
        </p>
      {/if}
      
      <div class="mt-3 flex items-center">
        {#if banner.ctaText}
          <Button
            variant={banner.variant === 'warning' ? 'warning' : 'primary'}
            size="sm"
            onclick={handleCtaClick}
            class={`${ctaClass}`}
            aria-label={`Take action: ${banner.ctaText}`}
          >
            {banner.ctaText}
            <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
        {/if}
      </div>
    </div>
    
    {#if banner.dismissible}
      <div class="ml-4 flex-shrink-0">
        <button
          type="button"
          class={`inline-flex text-${banner.variant}-500 hover:text-${banner.variant}-700 focus:outline-none ${dismissClass}`}
          onclick={handleDismiss}
          aria-label="Dismiss banner"
        >
          <X class="h-5 w-5" />
        </button>
      </div>
    {/if}
  </div>
{/if}





