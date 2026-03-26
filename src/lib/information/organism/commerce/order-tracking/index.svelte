<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
  import { Icon as BaseIcon } from '$stylist';
const Package = 'package';
const Truck = 'truck';
const CheckCircle = 'check-circle';
const Clock = 'clock';
const MapPin = 'map-pin';
const Phone = 'phone';
const MessageCircle = 'message-circle';
const Calendar = 'calendar';
const AlertCircle = 'alert-circle';
const Navigation = 'navigation';
const RotateCcw = 'rotate-ccw';
const User = 'user';
const RotateCw = 'rotate-cw';
const AlertTriangle = 'alert-triangle';
const Mail = 'mail';
const PackagePlus = 'package-plus';
const PackageCheck = 'package-check';

  import { Button } from '$stylist';

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

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
        color: 'text-[var(--color-primary-800)] bg-[var(--color-primary-100)]',
        icon: Package,
        description: 'Preparing your order'
      },
      shipped: {
        text: 'Shipped',
        color: 'text-[var(--color-primary-800)] bg-[var(--color-primary-100)]',
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
        color: 'text-[var(--color-success-800)] bg-[var(--color-success-100)]',
        icon: CheckCircle,
        description: 'Delivered successfully'
      },
      delayed: {
        text: 'Delayed',
        color: 'text-[var(--color-danger-800)] bg-[var(--color-danger-100)]',
        icon: AlertCircle,
        description: 'Delivery delayed, contact carrier'
      },
      returned: {
        text: 'Returned',
        color: 'text-[var(--color-secondary-800)] bg-[var(--color-secondary-100)]',
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
  <div class={`bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6 mb-6 ${headerClass}`}>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h2 class="text-xl font-bold text-[var(--color-text-primary)] flex items-center">
          <BaseIcon name={Package} class="h-6 w-6 mr-2 text-[var(--color-primary-500)]" />
          Order Tracking
        </h2>

        <div class="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Order ID</p>
            <p class="text-lg font-semibold text-[var(--color-text-primary)]">#{trackingInfo.orderId}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Tracking Number</p>
            <p class="text-lg font-semibold text-[var(--color-text-primary)]">{trackingInfo.trackingNumber}</p>
          </div>

          <div>
            <p class="text-sm font-medium text-[var(--color-text-secondary)]">Estimated Delivery</p>
            <p class="text-lg font-semibold text-[var(--color-text-primary)]">{formatDate(trackingInfo.estimatedDelivery)}</p>
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
  <div class={`bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6 mb-6 ${timelineClass}`}>
    <div class="mb-6">
      <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Delivery Progress</h3>

      <!-- Visual progress bar -->
      <div class="w-full bg-[var(--color-background-tertiary)] rounded-full h-2.5 mb-4">
        <div
          class={`h-2.5 rounded-full ${
            currentStatus === 'delivered' ? 'bg-[var(--color-success-600)]' :
            currentStatus === 'out-for-delivery' ? 'bg-orange-500' :
            currentStatus === 'shipped' ? 'bg-[var(--color-primary-600)]' :
            'bg-[var(--color-primary-600)]'
          }`}
          style={`width: ${progressPercentage}%`}
        ></div>
      </div>

      <div class="flex justify-between text-sm text-[var(--color-text-secondary)]">
        <span>Pending</span>
        <span>Processing</span>
        <span>Shipped</span>
        <span>Out for Delivery</span>
        <span>Delivered</span>
      </div>
    </div>

    <!-- Tracking events -->
    <div class="space-y-6">
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Tracking Events</h3>

      {#if trackingInfo.events.length === 0}
        <div class="text-center py-8">
          <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[var(--color-background-secondary)]">
            <BaseIcon name={Package} class="h-6 w-6 text-[var(--color-text-tertiary)]" />
          </div>
          <h3 class="mt-2 text-sm font-medium text-[var(--color-text-primary)]">No tracking events</h3>
          <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Tracking information will appear here once the order ships.</p>
        </div>
      {:else}
        <ol class="relative border-l border-[var(--color-border-primary)] ml-4">
          {#each sortedEvents as event, index}
            {@const eventStatusConfig = getStatusConfig(event.status)}
            {@const EventStatusIcon = eventStatusConfig.icon}
            <li class="mb-10 ml-6">
              <span class={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ${
                index === 0 ? 'bg-[var(--color-primary-200)]' : index < sortedEvents.length - 1 ? 'bg-[var(--color-background-tertiary)]' : 'bg-[var(--color-success-200)]'
              }`}>
                <EventStatusIcon class={`w-4 h-4 ${
                  index === 0 ? 'text-[var(--color-primary-800)]' : index < sortedEvents.length - 1 ? 'text-[var(--color-text-primary)]' : 'text-[var(--color-success-800)]'
                }`} />
              </span>

              <div class={`p-4 ${currentStatus === 'delivered' && event.status === 'delivered' ? 'bg-[var(--color-success-50)] border border-[var(--color-success-200)] rounded-lg' : 'bg-[var(--color-background-secondary)] border border-[var(--color-border-primary)] rounded-lg'}`}>
                <div class="flex flex-wrap justify-between items-start">
                  <h4 class="text-sm font-semibold text-[var(--color-text-primary)]">{event.description}</h4>
                  <time class="text-sm text-[var(--color-text-secondary)] mb-1">{formatDate(event.timestamp)}</time>
                </div>

                <p class="text-sm text-[var(--color-text-secondary)] mt-1">
                  {event.location && `Location: ${event.location}`}
                </p>

                {#if event.notes}
                  <p class="text-sm text-[var(--color-text-primary)] mt-2 bg-[var(--color-background-primary)] p-2 rounded">
                    <span class="font-medium">Notes:</span> {event.notes}
                  </p>
                {/if}

                {#if event.status === 'delayed'}
                  <div class="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-md flex items-start">
                    <BaseIcon name={AlertCircle} class="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
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
  <div class={`bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-lg p-6 ${summaryClass}`}>
    <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Order Details</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Shipping Information</h4>

        <div class="space-y-2">
          <div class="flex">
            <BaseIcon name={MapPin} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2 flex-shrink-0" />
            <div>
              <p class="text-sm font-medium text-[var(--color-text-primary)]">Shipping Address</p>
              <p class="text-sm text-[var(--color-text-secondary)]">{trackingInfo.shippingAddress}</p>
            </div>
          </div>

          {#if trackingInfo.carrier}
            <div class="flex">
              <BaseIcon name={Truck} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2 flex-shrink-0" />
              <div>
                <p class="text-sm font-medium text-[var(--color-text-primary)]">Carrier</p>
                <p class="text-sm text-[var(--color-text-secondary)]">{trackingInfo.carrier}</p>
              </div>
            </div>
          {/if}
        </div>
      </div>

      {#if showRecipientDetails && (trackingInfo.recipientName || trackingInfo.recipientPhone)}
        <div>
          <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Recipient Information</h4>

          <div class="space-y-2">
            {#if trackingInfo.recipientName}
              <div class="flex">
                <BaseIcon name={User} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-[var(--color-text-primary)]">Recipient</p>
                  <p class="text-sm text-[var(--color-text-secondary)]">{trackingInfo.recipientName}</p>
                </div>
              </div>
            {/if}

            {#if trackingInfo.recipientPhone}
              <div class="flex">
                <BaseIcon name={Phone} class="h-5 w-5 text-[var(--color-text-tertiary)] mr-2 flex-shrink-0" />
                <div>
                  <p class="text-sm font-medium text-[var(--color-text-primary)]">Phone</p>
                  <p class="text-sm text-[var(--color-text-secondary)]">{trackingInfo.recipientPhone}</p>
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>

    {#if showDeliveryNotes && trackingInfo.deliveryNotes}
      <div class="mt-4">
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-2">Delivery Notes</h4>
        <div class="bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] rounded-md p-3">
          <p class="text-sm text-[var(--color-primary-700)]">{trackingInfo.deliveryNotes}</p>
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
        <BaseIcon name={Phone} class="h-4 w-4 mr-2" />
        Contact Carrier
      </Button>
    {/if}

    {#if showReportIssue && currentStatus !== 'delivered'}
      <Button
        variant="danger"
        onclick={handleReportIssue}
      >
        <BaseIcon name={AlertCircle} class="h-4 w-4 mr-2" />
        Report Issue
      </Button>
    {/if}

    <Button
      variant="outline"
    >
      <BaseIcon name={MessageCircle} class="h-4 w-4 mr-2" />
      Send Message
    </Button>
  </div>
</div>









