<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { DollarSign, TrendingDown, TrendingUp, Target, CheckCircle, AlertCircle, LoaderCircle, RefreshCw, ExternalLink, Star, Truck, XCircle } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/badge/Badge.svelte';

  type Competitor = {
    id: string;
    name: string;
    price: number;
    currency?: string;
    url?: string;
    lastChecked: Date;
    rating?: number;
  };

  type ProductInfo = {
    id: string;
    title: string;
    currentPrice: number;
    originalPrice?: number;
    thumbnail?: string;
    currency?: string;
  };

  type PriceMatchEntry = {
    id: string;
    productId: string;
    productTitle: string;
    targetPrice: number;
    currentPrice: number;
    competitors: Competitor[];
    status: 'matching' | 'matched' | 'not_matching' | 'in_progress';
    lastChecked: Date;
    savings?: number; // Potential savings if matched
    currency?: string;
    thumbnail?: string;  // Added for missing property
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    priceMatches: PriceMatchEntry[];
    showCompetitors?: boolean;
    showSavings?: boolean;
    showStatus?: boolean;
    showLastChecked?: boolean;
    allowManualCheck?: boolean;
    onManualCheck?: (matchId: string) => void;
    onCompetitorRedirect?: (competitor: Competitor) => void;
    onPriceAdjustmentRequest?: (matchId: string) => void;
    class?: string;
    matchClass?: string;
    competitorClass?: string;
    headerClass?: string;
    currency?: string;
    locale?: string;
  };

  let {
    priceMatches = [],
    showCompetitors = true,
    showSavings = true,
    showStatus = true,
    showLastChecked = true,
    allowManualCheck = true,
    onManualCheck,
    onCompetitorRedirect,
    onPriceAdjustmentRequest,
    class: hostClass = '',
    matchClass = '',
    competitorClass = '',
    headerClass = '',
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  $effect(() => {
    // Update price match statuses after any changes
    for (const match of priceMatches) {
      updateStatus(match);
    }
  });

  function updateStatus(match: PriceMatchEntry) {
    if (match.currentPrice <= match.targetPrice) {
      match.status = 'matched';
    } else if (match.status !== 'in_progress') {
      match.status = 'not_matching';
    }
  }

  function handleManualCheck(matchId: string) {
    onManualCheck?.(matchId);
  }

  function redirectToCompetitor(competitor: Competitor) {
    if (competitor.url) {
      window.open(competitor.url, '_blank');
    }
    onCompetitorRedirect?.(competitor);
  }

  function requestPriceAdjustment(matchId: string) {
    onPriceAdjustmentRequest?.(matchId);
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  function formatRelativeTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const mins = Math.floor(diffInSeconds / 60);
      return `${mins} min${mins !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
  }

  function getStatusConfig(status: string) {
    const config: Record<string, { text: string; icon: any; color: string; bgColor: string }> = {
      'matching': {
        text: 'Matching',
        icon: TrendingDown,
        color: 'text-green-800',
        bgColor: 'bg-green-100'
      },
      'matched': {
        text: 'Matched',
        icon: CheckCircle,
        color: 'text-green-800',
        bgColor: 'bg-green-100'
      },
      'not_matching': {
        text: 'Not Matching',
        icon: AlertCircle,
        color: 'text-red-800',
        bgColor: 'bg-red-100'
      },
      'in_progress': {
        text: 'Checking',
        icon: LoaderCircle,
        color: 'text-blue-800',
        bgColor: 'bg-blue-100'
      }
    };

    return config[status] || config['not_matching'];
  }
</script>

<div class={`price-match ${hostClass}`} {...restProps}>
  <div class={`border border-gray-200 rounded-lg p-6 ${headerClass}`}>
    <div class="flex items-center">
      <Target class="h-6 w-6 text-blue-500 mr-3" />
      <h2 class="text-xl font-bold text-gray-900">Price Match Guarantee</h2>
    </div>
    <p class="mt-1 text-gray-600">
      We'll match competitor prices and help you find the best deals
    </p>
  </div>

  <div class="mt-6 space-y-6">
    {#if priceMatches.length === 0}
      <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
        <DollarSign class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">No price matches</h3>
        <p class="mt-1 text-sm text-gray-500">
          Add products to monitor for price matching.
        </p>
      </div>
    {:else}
      {#each priceMatches as match}
        {@const statusConfig = getStatusConfig(match.status)}
        {@const StatusIcon = statusConfig.icon}
        <div class={`border rounded-lg p-6 ${match.status === 'matched' ? 'border-green-200 bg-green-50' : match.status === 'not_matching' ? 'border-red-200 bg-red-50' : 'border-gray-200'} ${matchClass}`}>
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-start space-x-4">
              {#if match.thumbnail}
                <img
                  src={match.thumbnail}
                  alt={match.productTitle}
                  class="w-16 h-16 rounded-md object-cover"
                />
              {/if}

              <div class="min-w-0">
                <h3 class="text-lg font-medium text-gray-900">{match.productTitle}</h3>
                <div class="flex items-center mt-1 space-x-3">
                  <span class={`text-sm font-medium ${match.currentPrice <= match.targetPrice ? 'text-green-600' : 'text-red-600'}`}>
                    Current: {formatPrice(match.currentPrice)}
                  </span>
                  <span class="text-sm text-gray-500 line-through">
                    Target: {formatPrice(match.targetPrice)}
                  </span>

                  {#if showSavings && match.savings}
                    <span class="text-sm font-medium text-green-600">
                      You save: {formatPrice(match.savings)}
                    </span>
                  {/if}
                </div>
              </div>
            </div>

            <div class="flex items-center space-x-3">
              {#if showStatus}
                <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.color}`}>
                  <StatusIcon class="h-4 w-4 mr-1.5" />
                  {statusConfig.text}
                </span>
              {/if}

              {#if showLastChecked && match.lastChecked}
                <span class="text-xs text-gray-500">
                  Last checked: {formatRelativeTime(match.lastChecked)}
                </span>
              {/if}

              {#if allowManualCheck}
                <Button
                  variant="outline"
                  size="sm"
                  onclick={() => handleManualCheck(match.id)}
                  disabled={match.status === 'in_progress'}
                >
                  <RefreshCw class={`h-4 w-4 mr-2 ${match.status === 'in_progress' ? 'animate-spin' : ''}`} />
                  Check Again
                </Button>
              {/if}
            </div>
          </div>

          {#if showCompetitors && match.competitors && match.competitors.length > 0}
            <div class="mt-6">
              <h4 class="text-sm font-medium text-gray-900 mb-3">Competitor Prices</h4>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                {#each match.competitors as competitor}
                  <div class={`border rounded-lg p-4 flex flex-col ${competitorClass} ${
                    competitor.price <= match.currentPrice
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200'
                  }`}>
                    <div class="flex justify-between items-start">
                      <h5 class="text-sm font-medium text-gray-900">{competitor.name}</h5>
                      <span class={`text-lg font-semibold ${
                        competitor.price <= match.currentPrice
                          ? 'text-green-600'
                          : 'text-gray-900'
                      }`}>
                        {formatPrice(competitor.price)}
                      </span>
                    </div>

                    <div class="mt-2 text-xs text-gray-500">
                      {#if competitor.rating}
                        <div class="flex items-center">
                          <Star class="h-3 w-3 text-yellow-400 mr-1" />
                          <span>{competitor.rating}/5</span>
                        </div>
                      {/if}
                      <p>Last checked: {formatRelativeTime(competitor.lastChecked)}</p>
                    </div>

                    <button
                      class="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center"
                      onclick={() => redirectToCompetitor(competitor)}
                    >
                      <ExternalLink class="h-4 w-4 mr-1" />
                      Visit site
                    </button>
                  </div>
                {/each}
              </div>

              {#if match.status === 'not_matching'}
                <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 class="text-sm font-medium text-blue-800 flex items-center">
                    <AlertCircle class="h-5 w-5 mr-2 text-blue-500" />
                    Price Match Opportunity
                  </h4>
                  <p class="mt-2 text-sm text-blue-700">
                    We found a lower price from a competitor. You can purchase from them or request price adjustment.
                  </p>

                  <div class="mt-4 flex space-x-3">
                    <Button
                      variant="primary"
                      onclick={() => redirectToCompetitor(match.competitors[0])}
                    >
                      View Lower Price
                    </Button>
                    <Button
                      variant="outline"
                      onclick={() => requestPriceAdjustment(match.id)}
                    >
                      Request Adjustment
                    </Button>
                  </div>
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</div>
