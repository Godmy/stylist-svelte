<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Package, Calendar, DollarSign, Star, Filter, Search, Download, Repeat, Clock, Truck, CheckCircle, XCircle, RotateCcw, ChevronLeft, ChevronRight, TrendingDown, TrendingUp } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';

  type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' | 'refunded';

  type OrderSort = {
    field: 'date' | 'total' | 'status';
    direction: 'asc' | 'desc';
  };

  type OrderItem = {
    id: string;
    name: string;
    quantity: number;
    price: number;
    thumbnail?: string;
  };

  type Order = {
    id: string;
    orderNumber: string;
    date: Date;
    status: OrderStatus;
    total: number;
    currency?: string;
    items: OrderItem[];
    shippingAddress?: string;
    billingAddress?: string;
    paymentMethod?: string;
    trackingNumber?: string;
    estimatedDelivery?: Date;
    rating?: number;
    review?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    orders: Order[];
    showSearch?: boolean;
    showFilter?: boolean;
    showPagination?: boolean;
    showStatusFilter?: boolean;
    showDateFilter?: boolean;
    showRepeatOrder?: boolean;
    showDownloadInvoice?: boolean;
    showOrderRating?: boolean;
    defaultSort?: 'date' | 'total' | 'status';
    defaultSortDirection?: 'asc' | 'desc';
    itemsPerPage?: number;
    class?: string;
    headerClass?: string;
    itemClass?: string;
    statusClass?: string;
    onOrderClick?: (order: Order) => void;
    onRepeatOrder?: (order: Order) => void;
    onDownloadInvoice?: (order: Order) => void;
    onOrderRated?: (orderId: string, rating: number) => void;
    currency?: string;
    inputClass?: string;
    locale?: string;
  };

  let {
    orders = [],
    showSearch = true,
    showFilter = true,
    showPagination = true,
    showStatusFilter = true,
    showDateFilter = true,
    showRepeatOrder = true,
    showDownloadInvoice = true,
    showOrderRating = true,
    defaultSort = 'date',
    defaultSortDirection = 'desc',
    itemsPerPage = 5,
    class: hostClass = '',
    headerClass = '',
    itemClass = '',
    statusClass = '',
    onOrderClick,
    onRepeatOrder,
    onDownloadInvoice,
    onOrderRated,
    currency = 'USD',
    inputClass = '',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let searchTerm = $state('');
  let selectedStatus: OrderStatus | 'all' = $state('all');
  let sortOrder = $state<OrderSort>({ field: defaultSort, direction: defaultSortDirection });
  let currentPage = $state(1);
  
  let filteredOrders = $derived.by(() => {
    let result = [...orders];
    
    // Apply search filter
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
      result = result.filter(order => 
        order.orderNumber.toLowerCase().includes(query) ||
        order.items.some(item => item.name.toLowerCase().includes(query))
      );
    }
    
    // Apply status filter
    if (selectedStatus !== 'all') {
      result = result.filter(order => order.status === selectedStatus);
    }
    
    // Apply sorting
    result.sort((a, b) => {
      let comparison = 0;
      
      switch (sortOrder.field) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'total':
          comparison = a.total - b.total;
          break;
        case 'status':
          comparison = a.status.localeCompare(b.status);
          break;
      }
      
      return sortOrder.direction === 'asc' ? comparison : -comparison;
    });
    
    return result;
  });

  let paginatedOrders = $derived.by(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredOrders.slice(startIndex, startIndex + itemsPerPage);
  });

  let totalPages = $derived(Math.ceil(filteredOrders.length / itemsPerPage));

  $effect(() => {
    // Reset to first page when filters change
    currentPage = 1;
  });

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchTerm = target.value.toLowerCase();
  }

  function handleStatusFilterChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    selectedStatus = target.value as OrderStatus | 'all';
  }

  function handleSortChange(field: 'date' | 'total' | 'status') {
    if (sortOrder.field === field) {
      // Toggle direction if clicking the same field
      sortOrder = {
        field,
        direction: sortOrder.direction === 'asc' ? 'desc' : 'asc'
      };
    } else {
      // Set new field with default ascending direction
      sortOrder = { field, direction: 'desc' };
    }
  }

  function handleOrderClick(order: Order) {
    onOrderClick?.(order);
  }

  function handleRepeatOrder(order: Order) {
    onRepeatOrder?.(order);
  }

  function handleDownloadInvoice(order: Order) {
    onDownloadInvoice?.(order);
  }

  function handlePageChange(page: number) {
    currentPage = Math.max(1, Math.min(page, totalPages));
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
      month: 'short',
      day: 'numeric'
    });
  }

  function getStatusConfig(status: OrderStatus) {
    const config: Record<OrderStatus, { text: string; color: string; icon: any }> = {
      pending: { text: 'Pending', color: 'text-yellow-800 bg-yellow-100', icon: Clock },
      processing: { text: 'Processing', color: 'text-blue-800 bg-blue-100', icon: Package },
      shipped: { text: 'Shipped', color: 'text-indigo-800 bg-indigo-100', icon: Truck },
      delivered: { text: 'Delivered', color: 'text-green-800 bg-green-100', icon: CheckCircle },
      cancelled: { text: 'Cancelled', color: 'text-red-800 bg-red-100', icon: XCircle },
      refunded: { text: 'Refunded', color: 'text-purple-800 bg-purple-100', icon: RotateCcw }
    };
    
    return config[status];
  }
</script>

<div class={`order-history ${hostClass}`} {...restProps}>
  <div class={`mb-6 ${headerClass}`}>
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-gray-900 flex items-center">
          <Package class="h-5 w-5 mr-2 text-blue-500" />
          Order History
        </h2>
        <p class="mt-1 text-sm text-gray-500">Review your past orders and re-order items</p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-2">
        {#if showSearch}
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="Search orders..."
              oninput={handleSearchInput}
            />
          </div>
        {/if}
        
        {#if showStatusFilter}
          <select
            class={`block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
            value={selectedStatus}
            onchange={handleStatusFilterChange}
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
            <option value="refunded">Refunded</option>
          </select>
        {/if}
      </div>
    </div>
  </div>
  
  {#if orders.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <Package class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No orders yet</h3>
      <p class="mt-1 text-sm text-gray-500">Get started by placing your first order.</p>
    </div>
  {:else}
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul class="divide-y divide-gray-200">
        {#each paginatedOrders as order}
          {@const StatusIcon = getStatusConfig(order.status).icon}
          <li class={`hover:bg-gray-50 ${itemClass}`}>
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <button
                    type="button"
                    class="text-sm font-medium text-blue-600 truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-primary-500] text-left"
                    onclick={() => handleOrderClick(order)}
                  >
                    #{order.orderNumber}
                  </button>
                  <div class={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusConfig(order.status).color} ${statusClass}`}>
                    <StatusIcon class="h-3 w-3 mr-1" />
                    {getStatusConfig(order.status).text}
                  </div>
                </div>
                <div class="text-sm text-gray-500 flex items-center">
                  <Calendar class="h-4 w-4 mr-1" />
                  {formatDate(order.date)}
                </div>
              </div>
              
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <div class="flex items-center text-sm text-gray-500">
                    <DollarSign class="h-4 w-4 mr-1" />
                    {formatCurrency(order.total)}
                  </div>
                  
                  <div class="mt-2 sm:mt-0 sm:ml-4 flex items-center text-sm text-gray-500">
                    <Package class="h-4 w-4 mr-1" />
                    {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                  </div>
                </div>
                
                <div class="mt-2 flex space-x-2 sm:mt-0">
                  {#if showRepeatOrder}
                    <Button
                      variant="outline"
                      size="sm"
                      onclick={() => handleRepeatOrder(order)}
                      title="Re-order items"
                    >
                      <Repeat class="h-4 w-4" />
                      <span class="hidden sm:inline ml-1">Re-order</span>
                    </Button>
                  {/if}
                  
                  {#if showDownloadInvoice}
                    <Button
                      variant="outline"
                      size="sm"
                      onclick={() => handleDownloadInvoice(order)}
                      title="Download invoice"
                    >
                      <Download class="h-4 w-4" />
                    </Button>
                  {/if}
                </div>
              </div>
              
              <!-- Order items preview -->
              <div class="mt-4">
                <div class="flex space-x-2 overflow-x-auto pb-2">
                  {#each order.items.slice(0, 5) as item}
                    <div class="flex flex-col items-center">
                      {#if item.thumbnail}
                        <img 
                          src={item.thumbnail} 
                          alt={item.name} 
                          class="h-12 w-12 rounded-md object-cover border border-gray-200"
                        />
                      {:else}
                        <div class="h-12 w-12 rounded-md bg-gray-200 flex items-center justify-center">
                          <Package class="h-6 w-6 text-gray-400" />
                        </div>
                      {/if}
                      <p class="mt-1 text-xs text-gray-500 truncate max-w-[80px]">{item.name}</p>
                    </div>
                  {/each}
                  {#if order.items.length > 5}
                    <div class="flex flex-col items-center">
                      <div class="h-12 w-12 rounded-md bg-gray-100 flex items-center justify-center">
                        <span class="text-xs font-medium text-gray-700">+{order.items.length - 5}</span>
                      </div>
                      <p class="mt-1 text-xs text-gray-500">more</p>
                    </div>
                  {/if}
                </div>
              </div>
              
              <!-- Order rating -->
              {#if showOrderRating}
                <div class="mt-4">
                  <div class="flex items-center">
                    <span class="text-sm font-medium text-gray-700 mr-2">Rate this order:</span>
                    <div class="flex">
                      {#each Array(5) as _, i}
                        <button
                          type="button"
                          class={`h-5 w-5 ${i < Math.floor(order.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'} focus:outline-none`}
                          onclick={() => onOrderRated?.(order.id, i + 1)}
                          aria-label={`Rate ${i + 1} out of 5`}
                        >
                          <Star class="h-5 w-5" />
                        </button>
                      {/each}
                    </div>
                    {#if order.review}
                      <span class="ml-3 text-sm text-gray-500 truncate">{order.review}</span>
                    {/if}
                  </div>
                </div>
              {/if}
            </div>
          </li>
        {/each}
      </ul>
    </div>
    
    {#if showPagination && totalPages > 1}
      <div class="mt-6 flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Showing <span class="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to 
          <span class="font-medium">{Math.min(currentPage * itemsPerPage, filteredOrders.length)}</span> of 
          <span class="font-medium">{filteredOrders.length}</span> orders
        </div>
        
        <div class="flex space-x-2">
          <button
            type="button"
            class={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
              currentPage === 1 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onclick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          
          {#each Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const startPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
            return startPage + i;
          }) as pageNum}
            <button
              type="button"
              class={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
                currentPage === pageNum 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
              onclick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </button>
          {/each}
          
          <button
            type="button"
            class={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
              currentPage === totalPages 
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            onclick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    {/if}
  {/if}
</div>



