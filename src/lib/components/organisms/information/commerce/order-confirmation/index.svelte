<script lang="ts">
  import { OrderConfirmationStyleManager } from '$lib/design-system/styles/order-confirmation';
  import type { IOrderConfirmationProps } from '$lib/design-system/props/order-confirmation';
  import type { HTMLAttributes } from 'svelte/elements';
  import { CheckCircle, Package, Truck, Calendar, CreditCard, MapPin, User, Mail, Phone, Download, Share2, Home, X } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  let {
    orderId,
    orderDate,
    items = [],
    total,
    shippingAddress,
    paymentInfo,
    estimatedDelivery,
    trackingNumber,
    orderStatus = 'processing',
    shippingCost = 0,
    taxAmount = 0,
    class: hostClass = '',
    headerClass = '',
    summaryClass = '',
    itemClass = '',
    addressClass = '',
    actionsClass = '',
    showDownloadInvoice = true,
    showShareOrder = true,
    onDownloadInvoice,
    onShareOrder,
    onContinueShopping,
    onTrackOrder,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: IOrderConfirmationProps = $props();

  let orderStatusConfig = $derived({
    'processing': {
      icon: Package,
      text: 'Processing',
      color: OrderConfirmationStyleManager.getOrderStatusClasses('processing')
    },
    'shipped': {
      icon: Truck,
      text: 'Shipped',
      color: OrderConfirmationStyleManager.getOrderStatusClasses('shipped')
    },
    'delivered': {
      icon: CheckCircle,
      text: 'Delivered',
      color: OrderConfirmationStyleManager.getOrderStatusClasses('delivered')
    },
    'cancelled': {
      icon: X,
      text: 'Cancelled',
      color: OrderConfirmationStyleManager.getOrderStatusClasses('cancelled')
    }
  }[orderStatus]);

  let OrderStatusIcon = $derived(orderStatusConfig.icon);

  let formattedTotal = $derived(new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(total));

  let formattedOrderDate = $derived(orderDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }));

  let formattedEstimatedDelivery = $derived(estimatedDelivery
    ? estimatedDelivery.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : '');

  function handleDownloadInvoice() {
    onDownloadInvoice?.();
  }

  function handleShareOrder() {
    onShareOrder?.();
  }

  function handleContinueShopping() {
    onContinueShopping?.();
  }

  function handleTrackOrder() {
    onTrackOrder?.();
  }

  // Import icons
  let CheckCircleIcon = CheckCircle;
  let PackageIcon = Package;
  let TruckIcon = Truck;
  let CalendarIcon = Calendar;
  let CreditCardIcon = CreditCard;
  let MapPinIcon = MapPin;
  let UserIcon = User;
  let MailIcon = Mail;
  let PhoneIcon = Phone;
  let DownloadIcon = Download;
  let ShareIcon = Share2;
  let HomeIcon = Home;
</script>

<div class={`c-order-confirmation ${OrderConfirmationStyleManager.getBaseClasses(hostClass)}`} {...restProps}>
  <div class={OrderConfirmationStyleManager.getContainerClasses()}>
    <div class="text-center">
      <div class="flex justify-center">
        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-[--color-green-100]">
          <CheckCircleIcon class="h-10 w-10 text-[--color-green-600]" />
        </div>
      </div>

      <h1 class={OrderConfirmationStyleManager.getHeaderClasses(headerClass)}>
        Thank you for your order!
      </h1>

      <p class="mt-4 text-[--color-gray-600]">
        Your order <span class="font-medium">#{orderId}</span> has been confirmed and is being processed
      </p>
    </div>

    <div class="mt-12">
      <div class={OrderConfirmationStyleManager.getOrderContainerClasses()}>
        <div class={OrderConfirmationStyleManager.getOrderHeaderClasses()}>
          <div class="flex flex-wrap justify-between items-center gap-4">
            <h3 class="text-lg leading-6 font-medium text-[--color-gray-900]">
              Order #{orderId}
            </h3>

            <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${orderStatusConfig.color}`}>
              <OrderStatusIcon class="h-4 w-4 mr-1" />
              {orderStatusConfig.text}
            </span>
          </div>

          <p class="mt-1 text-sm text-[--color-gray-500]">
            Placed on {formattedOrderDate}
          </p>
        </div>

        <div class={OrderConfirmationStyleManager.getOrderContentClasses()}>
          <div class={OrderConfirmationStyleManager.getMainGridClasses()}>
            <!-- Order items -->
            <div class="md:col-span-2">
              <h4 class="text-md font-medium text-[--color-gray-900] mb-4">Order Items</h4>

              <div class="space-y-4">
                {#each items as item}
                  <div class="flex items-center">
                    {#if item.thumbnail}
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        class="flex-shrink-0 h-16 w-16 rounded-md object-cover object-center"
                      />
                    {/if}

                    <div class="ml-4 flex-1">
                      <div class="flex items-baseline justify-between">
                        <h5 class="text-sm font-medium text-[--color-gray-900]">{item.name}</h5>
                        <p class="text-sm font-medium text-[--color-gray-900]">
                          {new Intl.NumberFormat(locale, {
                            style: 'currency',
                            currency: currency
                          }).format(item.price * item.quantity)}
                        </p>
                      </div>

                      {#if item.variant}
                        <p class="mt-1 text-sm text-[--color-gray-500]">{item.variant}</p>
                      {/if}

                      <p class="mt-1 text-sm text-[--color-gray-500]">Qty: {item.quantity}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            <!-- Order summary -->
            <div class={OrderConfirmationStyleManager.getOrderDetailsClasses(summaryClass)}>
              <h4 class="text-md font-medium text-[--color-gray-900] mb-4">Order Summary</h4>

              <div class="space-y-3">
                <div class="flex justify-between text-sm text-[--color-gray-600]">
                  <dt>Subtotal</dt>
                  <dd>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency: currency
                    }).format(items.reduce((sum, item) => sum + (item.price * item.quantity), 0))}
                  </dd>
                </div>

                <div class="flex justify-between text-sm text-[--color-gray-600]">
                  <dt>Shipping</dt>
                  <dd>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency: currency
                    }).format(shippingCost)}
                  </dd>
                </div>

                <div class="flex justify-between text-sm text-[--color-gray-600]">
                  <dt>Tax</dt>
                  <dd>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency: currency
                    }).format(taxAmount)}
                  </dd>
                </div>

                <div class="flex justify-between text-base font-medium text-[--color-gray-900] pt-3 border-t border-[--color-gray-200]">
                  <dt>Total</dt>
                  <dd>{formattedTotal}</dd>
                </div>
              </div>
            </div>
          </div>

          <!-- Shipping and payment info -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Shipping address -->
            <div>
              <h4 class="text-md font-medium text-[--color-gray-900] mb-4 flex items-center">
                <MapPinIcon class="h-4 w-4 mr-2" />
                Shipping Address
              </h4>

              <div class={OrderConfirmationStyleManager.getShippingAddressClasses(addressClass)}>
                <p class="text-sm text-[--color-gray-900]">{shippingAddress.firstName} {shippingAddress.lastName}</p>
                <p class="text-sm text-[--color-gray-900]">{shippingAddress.address1}</p>
                {#if shippingAddress.address2}
                  <p class="text-sm text-[--color-gray-900]">{shippingAddress.address2}</p>
                {/if}
                <p class="text-sm text-[--color-gray-900]">
                  {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                </p>
                <p class="text-sm text-[--color-gray-900]">{shippingAddress.country}</p>
              </div>
            </div>

            <!-- Payment and delivery info -->
            <div>
              <h4 class="text-md font-medium text-[--color-gray-900] mb-4 flex items-center">
                <CreditCardIcon class="h-4 w-4 mr-2" />
                Payment & Delivery
              </h4>

              <div class="space-y-3">
                <div class="flex items-start">
                  <CreditCardIcon class="h-5 w-5 text-[--color-gray-400] mt-0.5 flex-shrink-0" />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-[--color-gray-900] capitalize">{paymentInfo.method}</p>
                    {#if paymentInfo.lastFour}
                      <p class="text-sm text-[--color-gray-500]">Ending in {paymentInfo.lastFour}</p>
                    {/if}
                    <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      paymentInfo.status === 'paid' ? OrderConfirmationStyleManager.getPaymentStatusClasses('paid') :
                      paymentInfo.status === 'pending' ? OrderConfirmationStyleManager.getPaymentStatusClasses('pending') :
                      OrderConfirmationStyleManager.getPaymentStatusClasses('failed')
                    }`}>
                      {paymentInfo.status === 'paid' ? 'Paid' :
                       paymentInfo.status === 'pending' ? 'Pending' : 'Failed'}
                    </span>
                  </div>
                </div>

                {#if estimatedDelivery}
                  <div class="flex items-start">
                    <CalendarIcon class="h-5 w-5 text-[--color-gray-400] mt-0.5 flex-shrink-0" />
                    <div class="ml-3">
                      <p class="text-sm font-medium text-[--color-gray-900]">Estimated Delivery</p>
                      <p class="text-sm text-[--color-gray-500]">{formattedEstimatedDelivery}</p>
                    </div>
                  </div>
                {/if}

                {#if trackingNumber}
                  <div class="flex items-start">
                    <TruckIcon class="h-5 w-5 text-[--color-gray-400] mt-0.5 flex-shrink-0" />
                    <div class="ml-3">
                      <p class="text-sm font-medium text-[--color-gray-900]">Tracking Number</p>
                      <p class="text-sm text-[--color-gray-500]">{trackingNumber}</p>
                    </div>
                  </div>
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class={OrderConfirmationStyleManager.getActionButtonsClasses(actionsClass)}>
      <Button variant="primary" onclick={handleContinueShopping}>
        <HomeIcon class="h-4 w-4 mr-2" />
        Continue Shopping
      </Button>

      {#if trackingNumber}
        <Button variant="ghost" onclick={handleTrackOrder}>
          <TruckIcon class="h-4 w-4 mr-2" />
          Track Order
        </Button>
      {/if}

      {#if showDownloadInvoice}
        <Button variant="ghost" onclick={handleDownloadInvoice}>
          <DownloadIcon class="h-4 w-4 mr-2" />
          Download Invoice
        </Button>
      {/if}

      {#if showShareOrder}
        <Button variant="ghost" onclick={handleShareOrder}>
          <ShareIcon class="h-4 w-4 mr-2" />
          Share Order
        </Button>
      {/if}
    </div>
  </div>
</div>

