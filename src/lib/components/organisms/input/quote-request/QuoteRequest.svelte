<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { FileText, User, Mail, Phone, MapPin, Briefcase, Send, CheckCircle, ShoppingCart, Plus, Truck, Settings } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';
  import Textarea from '../../atoms/input/base/Textarea.svelte';
  import Select from '../../atoms/controls/selectors/Select.svelte';

  type ProductForQuote = {
    id: string;
    name: string;
    quantity: number;
    unitPrice?: number;
    notes?: string;
  };

  type QuoteRequest = {
    id?: string;
    requesterName: string;
    requesterEmail: string;
    requesterPhone?: string;
    companyName?: string;
    companyAddress?: string;
    shippingAddress?: string;
    products: ProductForQuote[];
    message: string;
    urgent?: boolean;
    validUntil?: Date;
    currency?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    title?: string;
    description?: string;
    onSubmit?: (request: QuoteRequest) => void;
    onCancel?: () => void;
    onProductAdd?: () => void;
    onProductRemove?: (index: number) => void;
    class?: string;
    formClass?: string;
    sectionClass?: string;
    inputClass?: string;
    buttonClass?: string;
    showCompanyFields?: boolean;
    showShippingFields?: boolean;
    showUrgentOption?: boolean;
    showValidUntil?: boolean;
    defaultCurrency?: string;
  };

  let {
    title = 'Request a Quote',
    description = 'Fill out the form below to request a custom quote for your products',
    onSubmit,
    onCancel,
    onProductAdd,
    onProductRemove,
    class: hostClass = '',
    formClass = '',
    sectionClass = '',
    inputClass = '',
    buttonClass = '',
    showCompanyFields = true,
    showShippingFields = true,
    showUrgentOption = true,
    showValidUntil = true,
    defaultCurrency = 'USD',
    ...restProps
  }: Props = $props();

  let quoteRequest = $state<QuoteRequest>({
    requesterName: '',
    requesterEmail: '',
    requesterPhone: '',
    companyName: '',
    companyAddress: '',
    shippingAddress: '',
    products: [{ id: '1', name: '', quantity: 1, notes: '' }],
    message: '',
    urgent: false,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    currency: defaultCurrency
  });

  function handleInputChange(field: keyof QuoteRequest, value: any) {
    quoteRequest = { ...quoteRequest, [field]: value };
  }

  function handleProductChange(index: number, field: keyof ProductForQuote, value: any) {
    const newProducts = [...quoteRequest.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    quoteRequest = { ...quoteRequest, products: newProducts };
  }

  function addProduct() {
    const newProducts = [
      ...quoteRequest.products,
      { id: `product-${Date.now()}`, name: '', quantity: 1, notes: '' }
    ];
    quoteRequest = { ...quoteRequest, products: newProducts };
    onProductAdd?.();
  }

  function removeProduct(index: number) {
    if (quoteRequest.products.length <= 1) return;
    const newProducts = quoteRequest.products.filter((_, i) => i !== index);
    quoteRequest = { ...quoteRequest, products: newProducts };
    onProductRemove?.(index);
  }

  function handleSubmit() {
    onSubmit?.(quoteRequest);
  }

  function handleCancel() {
    onCancel?.();
  }

  function isValid(): boolean {
    return (
      !!quoteRequest.requesterName &&
      !!quoteRequest.requesterEmail &&
      quoteRequest.products.length > 0 &&
      quoteRequest.products.every(p => p.name && p.quantity > 0)
    );
  }
</script>

<div class={`quote-request-form ${hostClass}`} {...restProps}>
  <div class="mb-6">
    <h2 class="text-xl font-bold text-gray-900 flex items-center">
      <FileText class="h-5 w-5 mr-2 text-blue-500" />
      {title}
    </h2>
    {#if description}
      <p class="mt-1 text-gray-600">{description}</p>
    {/if}
  </div>
  
  <form class={`space-y-6 ${formClass}`} onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <!-- Customer Information -->
    <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
      <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
        <User class="h-5 w-5 mr-2 text-blue-500" />
        Customer Information
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="requesterName" class="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="requesterName"
              type="text"
              required
              class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="John Doe"
              value={quoteRequest.requesterName}
              oninput={(e) => handleInputChange('requesterName', (e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
        
        <div>
          <label for="requesterEmail" class="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="requesterEmail"
              type="email"
              required
              class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="john@example.com"
              value={quoteRequest.requesterEmail}
              oninput={(e) => handleInputChange('requesterEmail', (e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
        
        <div>
          <label for="requesterPhone" class="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone class="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="requesterPhone"
              type="tel"
              class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              placeholder="+1 (555) 123-4567"
              value={quoteRequest.requesterPhone || ''}
              oninput={(e) => handleInputChange('requesterPhone', (e.target as HTMLInputElement).value)}
            />
          </div>
        </div>
        
        {#if showCompanyFields}
          <div>
            <label for="companyName" class="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase class="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="companyName"
                type="text"
                class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                placeholder="Company Ltd."
                value={quoteRequest.companyName || ''}
                oninput={(e) => handleInputChange('companyName', (e.target as HTMLInputElement).value)}
              />
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Product Requirements -->
    <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
      <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
        <ShoppingCart class="h-5 w-5 mr-2 text-blue-500" />
        Product Requirements
      </h3>
      
      <div class="space-y-4">
        {#each quoteRequest.products as product, index}
          {@const productNameId = `quote-product-${index}-name`}
          {@const productQuantityId = `quote-product-${index}-quantity`}
          {@const productNotesId = `quote-product-${index}-notes`}
          <div class="border border-gray-200 rounded-md p-4">
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-medium text-gray-900">Product #{index + 1}</h4>
              {#if quoteRequest.products.length > 1}
                <button
                  type="button"
                  class="text-red-600 hover:text-red-800 text-sm font-medium"
                  onclick={() => removeProduct(index)}
                >
                  Remove
                </button>
              {/if}
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for={productNameId} class="block text-sm font-medium text-gray-700 mb-1">
                  Product Name/Model *
                </label>
                <input
                  id={productNameId}
                  type="text"
                  required
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="Enter product name or model number"
                  value={product.name}
                  oninput={(e) => handleProductChange(index, 'name', (e.target as HTMLInputElement).value)}
                />
              </div>
              
              <div>
                <label for={productQuantityId} class="block text-sm font-medium text-gray-700 mb-1">
                  Quantity *
                </label>
                <input
                  id={productQuantityId}
                  type="number"
                  required
                  min="1"
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="1"
                  value={product.quantity}
                  oninput={(e) => handleProductChange(index, 'quantity', parseInt((e.target as HTMLInputElement).value) || 1)}
                />
              </div>
              
              <div class="md:col-span-2">
                <label for={productNotesId} class="block text-sm font-medium text-gray-700 mb-1">
                  Notes (Specifications, Colors, Sizes, etc.)
                </label>
                <textarea
                  id={productNotesId}
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  rows="3"
                  placeholder="Additional specifications, color, size, or other details"
                  value={product.notes || ''}
                  oninput={(e) => handleProductChange(index, 'notes', (e.target as HTMLTextAreaElement).value)}
                ></textarea>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="mt-4">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick={addProduct}
        >
          <Plus class="h-4 w-4 mr-1" />
          Add Another Product
        </button>
      </div>
    </div>
    
    <!-- Shipping Information -->
    {#if showShippingFields}
      <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Truck class="h-5 w-5 mr-2 text-blue-500" />
          Shipping Information
        </h3>
        
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label for="companyAddress" class="block text-sm font-medium text-gray-700 mb-1">
              Company Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin class="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="companyAddress"
                class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                rows="2"
                placeholder="Street, city, state, postal code"
                value={quoteRequest.companyAddress || ''}
                oninput={(e) => handleInputChange('companyAddress', (e.target as HTMLTextAreaElement).value)}
              ></textarea>
            </div>
          </div>
          
          <div>
            <label for="shippingAddress" class="block text-sm font-medium text-gray-700 mb-1">
              Shipping Address (if different)
            </label>
            <textarea
              id="shippingAddress"
              class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              rows="2"
              placeholder="Shipping address (if different from company address)"
              value={quoteRequest.shippingAddress || ''}
              oninput={(e) => handleInputChange('shippingAddress', (e.target as HTMLTextAreaElement).value)}
            ></textarea>
          </div>
        </div>
      </div>
    {/if}
    
    <!-- Additional Options -->
    <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
      <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
        <Settings class="h-5 w-5 mr-2 text-blue-500" />
        Additional Options
      </h3>
      
      <div class="space-y-4">
        {#if showUrgentOption}
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="urgent"
                type="checkbox"
                class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                checked={quoteRequest.urgent || false}
                onchange={(e) => handleInputChange('urgent', (e.target as HTMLInputElement).checked)}
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="urgent" class="font-medium text-gray-700">Urgent Request</label>
              <p class="text-gray-500">Need this quote within 24 hours</p>
            </div>
          </div>
        {/if}
        
        {#if showValidUntil}
          <div>
            <label for="validUntil" class="block text-sm font-medium text-gray-700 mb-1">
              Valid Until
            </label>
            <input
              id="validUntil"
              type="date"
              class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              value={quoteRequest.validUntil ? new Date(quoteRequest.validUntil).toISOString().split('T')[0] : ''}
              oninput={(e) => handleInputChange('validUntil', new Date((e.target as HTMLInputElement).value))}
            />
          </div>
        {/if}
        
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
            rows="4"
            placeholder="Any additional information, specific requirements, or special instructions..."
            value={quoteRequest.message}
            oninput={(e) => handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
          ></textarea>
        </div>
      </div>
    </div>
    
    <!-- Form Actions -->
    <div class="flex justify-end space-x-3 pt-4">
      <Button
        variant="outline"
        onclick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        variant="primary"
        type="submit"
        disabled={!isValid()}
        class={buttonClass}
      >
        <Send class="h-4 w-4 mr-2" />
        Send Quote Request
      </Button>
    </div>
  </form>
</div>
