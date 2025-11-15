<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CheckCircle, Package, Truck, Calendar, CreditCard, MapPin, User, Mail, Phone, Download, Share2, Home, X } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type OrderItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    thumbnail?: string;
    variant?: string;
  };

  type ShippingAddress = {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };

  type PaymentInfo = {
    method: string;
    lastFour?: string;
    status: 'paid' | 'pending' | 'failed';
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    orderId: string;
    orderDate: Date;
    items: OrderItem[];
    total: number;
    shippingAddress: ShippingAddress;
    paymentInfo: PaymentInfo;
    estimatedDelivery?: Date;
    trackingNumber?: string;
    orderStatus?: 'processing' | 'shipped' | 'delivered' | 'cancelled';
    shippingCost?: number;
    taxAmount?: number;
    class?: string;
    headerClass?: string;
    summaryClass?: string;
    itemClass?: string;
    addressClass?: string;
    actionsClass?: string;
    showDownloadInvoice?: boolean;
    showShareOrder?: boolean;
    onDownloadInvoice?: () => void;
    onShareOrder?: () => void;
    onContinueShopping?: () => void;
    onTrackOrder?: () => void;
    currency?: string;
    locale?: string;
  };

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
  }: Props = $props();

  let orderStatusConfig = $derived({
    'processing': { 
      icon: Package, 
      text: 'Processing', 
      color: 'text-yellow-800 bg-yellow-100' 
    },
    'shipped': { 
      icon: Truck, 
      text: 'Shipped', 
      color: 'text-blue-800 bg-blue-100' 
    },
    'delivered': { 
      icon: CheckCircle, 
      text: 'Delivered', 
      color: 'text-green-800 bg-green-100' 
    },
    'cancelled': { 
      icon: X, 
      text: 'Cancelled', 
      color: 'text-red-800 bg-red-100' 
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

<div class={`order-confirmation ${hostClass}`} {...restProps}>
  <div class="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="text-center">
      <div class="flex justify-center">
        <div class="flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <CheckCircleIcon class="h-10 w-10 text-green-600" />
        </div>
      </div>
      
      <h1 class={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${headerClass}`}>
        Thank you for your order!
      </h1>
      
      <p class="mt-4 text-gray-600">
        Your order <span class="font-medium">#{orderId}</span> has been confirmed and is being processed
      </p>
    </div>

    <div class="mt-12">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
          <div class="flex flex-wrap justify-between items-center gap-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Order #{orderId}
            </h3>
            
            <span class={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${orderStatusConfig.color}`}>
              <OrderStatusIcon class="h-4 w-4 mr-1" />
              {orderStatusConfig.text}
            </span>
          </div>
          
          <p class="mt-1 text-sm text-gray-500">
            Placed on {formattedOrderDate}
          </p>
        </div>
        
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Order items -->
            <div class="md:col-span-2">
              <h4 class="text-md font-medium text-gray-900 mb-4">Order Items</h4>
              
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
                        <h5 class="text-sm font-medium text-gray-900">{item.name}</h5>
                        <p class="text-sm font-medium text-gray-900">
                          {new Intl.NumberFormat(locale, { 
                            style: 'currency', 
                            currency: currency 
                          }).format(item.price * item.quantity)}
                        </p>
                      </div>
                      
                      {#if item.variant}
                        <p class="mt-1 text-sm text-gray-500">{item.variant}</p>
                      {/if}
                      
                      <p class="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
            
            <!-- Order summary -->
            <div class={`${summaryClass}`}>
              <h4 class="text-md font-medium text-gray-900 mb-4">Order Summary</h4>
              
              <div class="space-y-3">
                <div class="flex justify-between text-sm text-gray-600">
                  <dt>Subtotal</dt>
                  <dd>
                    {new Intl.NumberFormat(locale, { 
                      style: 'currency', 
                      currency: currency 
                    }).format(items.reduce((sum, item) => sum + (item.price * item.quantity), 0))}
                  </dd>
                </div>
                
                <div class="flex justify-between text-sm text-gray-600">
                  <dt>Shipping</dt>
                  <dd>
                    {new Intl.NumberFormat(locale, { 
                      style: 'currency', 
                      currency: currency 
                    }).format(shippingCost)}
                  </dd>
                </div>
                
                <div class="flex justify-between text-sm text-gray-600">
                  <dt>Tax</dt>
                  <dd>
                    {new Intl.NumberFormat(locale, { 
                      style: 'currency', 
                      currency: currency 
                    }).format(taxAmount)}
                  </dd>
                </div>
                
                <div class="flex justify-between text-base font-medium text-gray-900 pt-3 border-t border-gray-200">
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
              <h4 class="text-md font-medium text-gray-900 mb-4 flex items-center">
                <MapPinIcon class="h-4 w-4 mr-2" />
                Shipping Address
              </h4>
              
              <div class={`bg-gray-50 rounded-md p-4 ${addressClass}`}>
                <p class="text-sm text-gray-900">{shippingAddress.firstName} {shippingAddress.lastName}</p>
                <p class="text-sm text-gray-900">{shippingAddress.address1}</p>
                {#if shippingAddress.address2}
                  <p class="text-sm text-gray-900">{shippingAddress.address2}</p>
                {/if}
                <p class="text-sm text-gray-900">
                  {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}
                </p>
                <p class="text-sm text-gray-900">{shippingAddress.country}</p>
              </div>
            </div>
            
            <!-- Payment and delivery info -->
            <div>
              <h4 class="text-md font-medium text-gray-900 mb-4 flex items-center">
                <CreditCardIcon class="h-4 w-4 mr-2" />
                Payment & Delivery
              </h4>
              
              <div class="space-y-3">
                <div class="flex items-start">
                  <CreditCardIcon class="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 capitalize">{paymentInfo.method}</p>
                    {#if paymentInfo.lastFour}
                      <p class="text-sm text-gray-500">Ending in {paymentInfo.lastFour}</p>
                    {/if}
                    <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      paymentInfo.status === 'paid' ? 'bg-green-100 text-green-800' :
                      paymentInfo.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {paymentInfo.status === 'paid' ? 'Paid' : 
                       paymentInfo.status === 'pending' ? 'Pending' : 'Failed'}
                    </span>
                  </div>
                </div>
                
                {#if estimatedDelivery}
                  <div class="flex items-start">
                    <CalendarIcon class="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Estimated Delivery</p>
                      <p class="text-sm text-gray-500">{formattedEstimatedDelivery}</p>
                    </div>
                  </div>
                {/if}
                
                {#if trackingNumber}
                  <div class="flex items-start">
                    <TruckIcon class="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">Tracking Number</p>
                      <p class="text-sm text-gray-500">{trackingNumber}</p>
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
    <div class={`mt-8 flex flex-wrap gap-3 justify-center ${actionsClass}`}>
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
