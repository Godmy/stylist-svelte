<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Package, Truck, CheckCircle, Clock, MapPin, Phone, MessageCircle, Calendar, AlertCircle, Navigation, RotateCcw, User, RotateCw, AlertTriangle, Mail, PackagePlus, PackageCheck } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  type TrackingStatus = 'pending' | 'processing' | 'shipped' | 'out-for-delivery' | 'delivered' | 'delayed' | 'returned';

  type TrackingEvent = {
    id: string;
    status: TrackingStatus;
    timestamp: Date;
    location?: string;
    description: string;
    notes?: string;
  };

  type TrackingInfo = {
    orderId: string;
    trackingNumber: string;
    carrier: string;
    estimatedDelivery: Date;
    status: TrackingStatus;
    progress: number; // Percentage
    events: TrackingEvent[];
    recipientName?: string;
    recipientPhone?: string;
    shippingAddress: string;
    deliveryNotes?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    trackingInfo: TrackingInfo;
    showRecipientDetails?: boolean;
    showDeliveryNotes?: boolean;
    showContactCarrier?: boolean;
    showReportIssue?: boolean;
    class?: string;
    headerClass?: string;
    timelineClass?: string;
    eventClass?: string;
    summaryClass?: string;
    onContactCarrier?: () => void;
    onReportIssue?: () => void;
    onStatusChange?: (status: TrackingStatus) => void;
    locale?: string;
    currency?: string;
  };

  let {
    trackingInfo,
    showRecipientDetails = true,
    showDeliveryNotes = true,
    showContactCarrier = true,
    showReportIssue = true,
    class: hostClass = '',
    headerClass = '',
    timelineClass = '',
    eventClass = '',
    summaryClass = '',
    onContactCarrier,
    onReportIssue,
    onStatusChange,
    locale = 'en-US',
    currency = 'USD',
    ...restProps
  }: Props = $props();

  let currentStatus = $state(trackingInfo.status);
  let progressPercentage = $state(trackingInfo.progress);

  $effect(() => {
    currentStatus = trackingInfo.status;
    progressPercentage = trackingInfo.progress;
  });

  function getStatusConfig(status: TrackingStatus) {
    const statusConfigs: Record<TrackingStatus, { text: string; color: string; icon: any; description: string }> = {
      pending: {
        text: 'Order Pending',
        color: 'text-yellow-800 bg-yellow-100',
        icon: Clock,
        description: 'Order received, being processed'
      },
      processing: {
        text: 'Processing',
        color: 'text-blue-800 bg-blue-100',
        icon: Package,
        description: 'Preparing your order'
      },
      shipped: {
        text: 'Shipped',
        color: 'text-indigo-800 bg-indigo-100',
        icon: Truck,
        description: 'On the way to you'
      },
      'out-for-delivery': {
        text: 'Out for Delivery',
        color: 'text-orange-800 bg-orange-100',
        icon: Navigation,  // Fixed to use Navigation instead of Truck
        description: 'Expected today'
      },
      delivered: {
        text: 'Delivered',
        color: 'text-green-800 bg-green-100',
        icon: CheckCircle,
        description: 'Delivered successfully'
      },
      delayed: {
        text: 'Delayed',
        color: 'text-red-800 bg-red-100',
        icon: AlertCircle,
        description: 'Delivery delayed, contact carrier'
      },
      returned: {
        text: 'Returned',
        color: 'text-purple-800 bg-purple-100',
        icon: RotateCcw,
        description: 'Package returned to sender'
      }
    };

    return statusConfigs[status];
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  function handleContactCarrier() {
    onContactCarrier?.();
  }

  function handleReportIssue() {
    onReportIssue?.();
  }

  // Additional computed properties
  const statusConfig = $derived(getStatusConfig(currentStatus));
  const StatusIcon = $derived(statusConfig.icon);

  let sortedEvents = $derived([...trackingInfo.events].sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  ));
</script>

<div class={`c-order-tracking ${hostClass}`} {...restProps}>
  <!-- Header section -->
  <div class={`bg-white border border-gray-200 rounded-lg p-6 mb-6 ${headerClass}`}>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-xl font-bold text-gray-900 flex items-center">
          <Package class="h-6 w-6 mr-2 text-blue-500" />
          Order Tracking
        </h2>

        <div class="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p class="text-sm font-medium text-gray-500">Order ID</p>
            <p class="text-lg font-semibold text-gray-900">#{trackingInfo.orderId}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-500">Tracking Number</p>
            <p class="text-lg font-semibold text-gray-900">{trackingInfo.trackingNumber}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-gray-500">Estimated Delivery</p>
            <p class="text-lg font-semibold text-gray-900">{formatDate(trackingInfo.estimatedDelivery)}</p>
          </div>
        </div>
      </div>

      <div class="mt-4 md:mt-0">
        <div class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig.color}`}>
          <StatusIcon class="h-4 w-4 mr-2" />
          {statusConfig.text}
        </div>
      </div>
    </div>
  </div>

  <!-- Progress timeline -->
  <div class={`bg-white border border-gray-200 rounded-lg p-6 mb-6 ${timelineClass}`}>
    <div class="mb-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Delivery Progress</h3>

      <!-- Visual progress bar -->
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          class={`h-2.5 rounded-full ${
            currentStatus === 'delivered' ? 'bg-green-600' :
            currentStatus === 'out-for-delivery' ? 'bg-orange-500' :
            currentStatus === 'shipped' ? 'bg-indigo-600' :
            'bg-blue-600'
          }`}
          style={`width: ${progressPercentage}%`}
        ></div>
      </div>

      <div class="flex justify-between text-sm text-gray-500">
        <span>Pending</span>
        <span>Processing</span>
        <span>Shipped</span>
        <span>Out for Delivery</span>
        <span>Delivered</span>
      </div>
    </div>

    <!-- Tracking events -->
    <div class="space-y-6">
      <h3 class="text-lg font-medium text-gray-900">Tracking Events</h3>

      {#if trackingInfo.events.length === 0}
        <div class="text-center py-8">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
            <Package class="h-6 w-6 text-gray-400" />
          </div>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No tracking events</h3>
          <p class="mt-1 text-sm text-gray-500">Tracking information will appear here once the order ships.</p>
        </div>
      {:else}
        <ol class="relative border-l border-gray-200 ml-4">
          {#each sortedEvents as event, index}
            {@const eventStatusConfig = getStatusConfig(event.status)}
            {@const EventStatusIcon = eventStatusConfig.icon}
            <li class="mb-10 ml-6">
              <span class={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ${
                index === 0 ? 'bg-blue-200' : index < sortedEvents.length - 1 ? 'bg-gray-200' : 'bg-green-200'
              }`}>
                <EventStatusIcon class={`w-4 h-4 ${
                  index === 0 ? 'text-blue-800' : index < sortedEvents.length - 1 ? 'text-gray-800' : 'text-green-800'
                }`} />
              </span>

              <div class={`p-4 ${currentStatus === 'delivered' && event.status === 'delivered' ? 'bg-green-50 border border-green-200 rounded-lg' : 'bg-gray-50 border border-gray-200 rounded-lg'}`}>
                <div class="flex flex-wrap justify-between items-start">
                  <h4 class="text-sm font-semibold text-gray-900">{event.description}</h4>
                  <time class="text-sm text-gray-500 mb-1">{formatDate(event.timestamp)}</time>
                </div>

                <p class="text-sm text-gray-600 mt-1">
                  {event.location && `Location: ${event.location}`}
                </p>

                {#if event.notes}
                  <p class="text-sm text-gray-700 mt-2 bg-white p-2 rounded">
                    <span class="font-medium">Notes:</span> {event.notes}
                  </p>
                {/if}

                {#if event.status === 'delayed'}
                  <div class="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-md flex items-start">
                    <AlertCircle class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <p class="text-sm text-yellow-700">This order has been delayed. Please contact the carrier for more information.</p>
                  </div>
                {/if}
              </div>
            </li>
          {/each}
        </ol>
      {/if}
    </div>
  </div>

  <!-- Order details -->
  <div class={`bg-white border border-gray-200 rounded-lg p-6 ${summaryClass}`}>
    <h3 class="text-lg font-medium text-gray-900 mb-4">Order Details</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="text-sm font-medium text-gray-900 mb-2">Shipping Information</h4>

        <div class="space-y-2">
          <div class="flex">
            <MapPin class="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
            <div>
              <p class="text-sm font-medium text-gray-900">Shipping Address</p>
              <p class="text-sm text-gray-500">{trackingInfo.shippingAddress}</p>
            </div>
          </div>

          {#if trackingInfo.carrier}
            <div class="flex">
              <Truck class="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-gray-900">Carrier</p>
                <p class="text-sm text-gray-500">{trackingInfo.carrier}</p>
              </div>
            </div>
          {/if}
        </div>
      </div>

      {#if showRecipientDetails && (trackingInfo.recipientName || trackingInfo.recipientPhone)}
        <div>
          <h4 class="text-sm font-medium text-gray-900 mb-2">Recipient Information</h4>

          <div class="space-y-2">
            {#if trackingInfo.recipientName}
              <div class="flex">
                <User class="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-900">Recipient</p>
                  <p class="text-sm text-gray-500">{trackingInfo.recipientName}</p>
                </div>
              </div>
            {/if}

            {#if trackingInfo.recipientPhone}
              <div class="flex">
                <Phone class="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-gray-900">Phone</p>
                  <p class="text-sm text-gray-500">{trackingInfo.recipientPhone}</p>
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>

    {#if showDeliveryNotes && trackingInfo.deliveryNotes}
      <div class="mt-4">
        <h4 class="text-sm font-medium text-gray-900 mb-2">Delivery Notes</h4>
        <div class="bg-blue-50 border border-blue-200 rounded-md p-3">
          <p class="text-sm text-blue-700">{trackingInfo.deliveryNotes}</p>
        </div>
      </div>
    {/if}
  </div>

  <!-- Action buttons -->
  <div class="mt-6 flex flex-wrap gap-3">
    {#if showContactCarrier}
      <Button
        variant="outline"
        onclick={handleContactCarrier}
      >
        <Phone class="h-4 w-4 mr-2" />
        Contact Carrier
      </Button>
    {/if}

    {#if showReportIssue && currentStatus !== 'delivered'}
      <Button
        variant="danger"
        onclick={handleReportIssue}
      >
        <AlertCircle class="h-4 w-4 mr-2" />
        Report Issue
      </Button>
    {/if}

    <Button
      variant="outline"
    >
      <MessageCircle class="h-4 w-4 mr-2" />
      Send Message
    </Button>
  </div>
</div>




