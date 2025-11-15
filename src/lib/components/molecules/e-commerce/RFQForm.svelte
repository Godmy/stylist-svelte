<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { FileText, User, Mail, Phone, MapPin, Briefcase, Send, Calendar, Package, Plus, Minus, Truck, CreditCard, Paperclip, X, Settings } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';
  import Textarea from '../../atoms/input/base/Textarea.svelte';
  import Select from '../../atoms/controls/selectors/Select.svelte';

  type RFQProduct = {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    unit?: string;
    unitPrice?: number;
    totalValue?: number;
    specifications?: string;
    deliveryDate?: string;
    notes?: string;
  };

  type RFQFormData = {
    requesterName: string;
    requesterEmail: string;
    requesterPhone?: string;
    companyName?: string;
    companyAddress?: string;
    shippingAddress?: string;
    products: RFQProduct[];
    message: string;
    urgent?: boolean;
    validUntil?: Date;
    deliveryTerms?: string;
    paymentTerms?: string;
    currency?: string;
    attachments: File[]; // Make attachments required since it's initialized as []
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    title?: string;
    description?: string;
    onSubmit?: (rfq: RFQFormData) => void;
    onCancel?: () => void;
    class?: string;
    formClass?: string;
    sectionClass?: string;
    inputClass?: string;
    buttonClass?: string;
    showCompanyFields?: boolean;
    showShippingFields?: boolean;
    showUrgentOption?: boolean;
    showValidUntil?: boolean;
    showDeliveryTerms?: boolean;
    showPaymentTerms?: boolean;
    showAttachments?: boolean;
    defaultCurrency?: string;
    maxAttachments?: number;
  };

  let {
    title = 'Request for Quotation',
    description = 'Submit your request for quotation and we will provide you with the best pricing options',
    onSubmit,
    onCancel,
    class: hostClass = '',
    formClass = '',
    sectionClass = '',
    inputClass = '',
    buttonClass = '',
    showCompanyFields = true,
    showShippingFields = true,
    showUrgentOption = true,
    showValidUntil = true,
    showDeliveryTerms = true,
    showPaymentTerms = true,
    showAttachments = true,
    defaultCurrency = 'USD',
    maxAttachments = 5,
    ...restProps
  }: Props = $props();

  let rfqData = $state<RFQFormData>({
    requesterName: '',
    requesterEmail: '',
    requesterPhone: '',
    companyName: '',
    companyAddress: '',
    shippingAddress: '',
    products: [{ 
      id: '1', 
      name: '', 
      description: '', 
      quantity: 1, 
      unit: 'pcs',
      specifications: '',
      deliveryDate: '',
      notes: ''
    }],
    message: '',
    urgent: false,
    validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    deliveryTerms: '',
    paymentTerms: '',
    currency: defaultCurrency,
    attachments: []
  });

  function handleInputChange(field: keyof RFQFormData, value: any) {
    rfqData = { ...rfqData, [field]: value };
  }

  function handleProductChange(index: number, field: keyof RFQProduct, value: any) {
    const newProducts = [...rfqData.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    rfqData = { ...rfqData, products: newProducts };
  }

  function addProduct() {
    const newProducts = [
      ...rfqData.products,
      { 
        id: `product-${Date.now()}`, 
        name: '', 
        description: '', 
        quantity: 1, 
        unit: 'pcs',
        specifications: '',
        deliveryDate: '',
        notes: ''
      }
    ];
    rfqData = { ...rfqData, products: newProducts };
  }

  function removeProduct(index: number) {
    if (rfqData.products.length <= 1) return;
    const newProducts = rfqData.products.filter((_, i) => i !== index);
    rfqData = { ...rfqData, products: newProducts };
  }

  function handleFileUpload(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);
      if (rfqData.attachments.length + files.length <= maxAttachments) {
        rfqData = { ...rfqData, attachments: [...rfqData.attachments, ...files] };
      } else {
        // Handle exceeding max attachments
        console.warn(`Cannot attach more than ${maxAttachments} files`);
      }
    }
  }

  function removeAttachment(index: number) {
    const newAttachments = [...rfqData.attachments];
    newAttachments.splice(index, 1);
    rfqData = { ...rfqData, attachments: newAttachments };
  }

  function handleSubmit() {
    onSubmit?.(rfqData);
  }

  function handleCancel() {
    onCancel?.();
  }

  function isValid(): boolean {
    return (
      !!rfqData.requesterName &&
      !!rfqData.requesterEmail &&
      rfqData.products.length > 0 &&
      rfqData.products.every(p => p.name && p.quantity > 0)
    );
  }

  function calculateTotalValue(index: number): number {
    const product = rfqData.products[index];
    if (product.unitPrice && product.quantity) {
      return product.unitPrice * product.quantity;
    }
    return 0;
  }
</script>

<div class={`rfq-form ${hostClass}`} {...restProps}>
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
      
      <div class="grid grid-cols-1 gap-4">
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
              value={rfqData.requesterName}
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
              value={rfqData.requesterEmail}
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
              value={rfqData.requesterPhone || ''}
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
                value={rfqData.companyName || ''}
                oninput={(e) => handleInputChange('companyName', (e.target as HTMLInputElement).value)}
              />
            </div>
          </div>
          
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
                value={rfqData.companyAddress || ''}
                oninput={(e) => handleInputChange('companyAddress', (e.target as HTMLTextAreaElement).value)}
              ></textarea>
            </div>
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Product Requirements -->
    <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-gray-900 flex items-center">
          <Package class="h-5 w-5 mr-2 text-blue-500" />
          Product Requirements
        </h3>
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          onclick={addProduct}
        >
          <Plus class="h-4 w-4 mr-1" />
          Add Product
        </button>
      </div>
      
      <div class="space-y-6">
        {#each rfqData.products as product, index}
          {@const baseProductId = `rfq-product-${index}`}
          <div class="border border-gray-200 rounded-md p-4">
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-medium text-gray-900">Product #{index + 1}</h4>
              {#if rfqData.products.length > 1}
                <button
                  type="button"
                  class="text-red-600 hover:text-red-800 text-sm font-medium"
                  onclick={() => removeProduct(index)}
                >
                  <Minus class="h-4 w-4" />
                </button>
              {/if}
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for={`${baseProductId}-name`} class="block text-sm font-medium text-gray-700 mb-1">
                  Product Name/Part Number *
                </label>
                <input
                  id={`${baseProductId}-name`}
                  type="text"
                  required
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="Enter product name or part number"
                  value={product.name}
                  oninput={(e) => handleProductChange(index, 'name', (e.target as HTMLInputElement).value)}
                />
              </div>
              
              <div>
                <label for={`${baseProductId}-description`} class="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  id={`${baseProductId}-description`}
                  type="text"
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="Product description"
                  value={product.description || ''}
                  oninput={(e) => handleProductChange(index, 'description', (e.target as HTMLInputElement).value)}
                />
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for={`${baseProductId}-quantity`} class="block text-sm font-medium text-gray-700 mb-1">
                    Quantity *
                  </label>
                  <input
                    id={`${baseProductId}-quantity`}
                    type="number"
                    required
                    min="1"
                    class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                    placeholder="1"
                    value={product.quantity}
                    oninput={(e) => handleProductChange(index, 'quantity', parseInt((e.target as HTMLInputElement).value) || 1)}
                  />
                </div>
                
                <div>
                  <label for={`${baseProductId}-unit`} class="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <select
                    id={`${baseProductId}-unit`}
                    class={`block w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                    value={product.unit || 'pcs'}
                    onchange={(e) => handleProductChange(index, 'unit', (e.target as HTMLSelectElement).value)}
                  >
                    <option value="pcs">Pieces</option>
                    <option value="kg">Kilograms</option>
                    <option value="m">Meters</option>
                    <option value="cm">Centimeters</option>
                    <option value="liter">Liters</option>
                    <option value="set">Sets</option>
                    <option value="box">Boxes</option>
                    <option value="ton">Tons</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label for={`${baseProductId}-unit-price`} class="block text-sm font-medium text-gray-700 mb-1">
                  Target Price per Unit
                </label>
                <div class="relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    id={`${baseProductId}-unit-price`}
                    type="number"
                    step="0.01"
                    min="0"
                    class={`block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                    placeholder="0.00"
                    value={product.unitPrice || ''}
                    oninput={(e) => handleProductChange(index, 'unitPrice', parseFloat((e.target as HTMLInputElement).value) || 0)}
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span class="text-gray-500 sm:text-sm">{rfqData.currency || 'USD'}</span>
                  </div>
                </div>
              </div>
              
              <div class="md:col-span-2">
                <label for={`${baseProductId}-specifications`} class="block text-sm font-medium text-gray-700 mb-1">
                  Specifications & Requirements
                </label>
                <textarea
                  id={`${baseProductId}-specifications`}
                  rows="3"
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="Material, dimensions, color, certifications, or other technical requirements"
                  value={product.specifications || ''}
                  oninput={(e) => handleProductChange(index, 'specifications', (e.target as HTMLTextAreaElement).value)}
                ></textarea>
              </div>
              
              <div>
                <label for={`${baseProductId}-delivery-date`} class="block text-sm font-medium text-gray-700 mb-1">
                  Desired Delivery Date
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar class="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id={`${baseProductId}-delivery-date`}
                    type="date"
                    class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                    value={product.deliveryDate || ''}
                    oninput={(e) => handleProductChange(index, 'deliveryDate', (e.target as HTMLInputElement).value)}
                  />
                </div>
              </div>
              
              <div>
                <label for={`${baseProductId}-notes`} class="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <input
                  id={`${baseProductId}-notes`}
                  type="text"
                  class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
                  placeholder="Any special notes"
                  value={product.notes || ''}
                  oninput={(e) => handleProductChange(index, 'notes', (e.target as HTMLInputElement).value)}
                />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    {#if showShippingFields}
      <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Truck class="h-5 w-5 mr-2 text-blue-500" />
          Shipping Information
        </h3>
        
        <div class="grid grid-cols-1 gap-4">
          <div>
            <label for="shippingAddress" class="block text-sm font-medium text-gray-700 mb-1">
              Shipping Address (if different from company address)
            </label>
            <textarea
              id="shippingAddress"
              class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
              rows="2"
              placeholder="Shipping address (if different from company address)"
              value={rfqData.shippingAddress || ''}
              oninput={(e) => handleInputChange('shippingAddress', (e.target as HTMLTextAreaElement).value)}
            ></textarea>
          </div>
        </div>
      </div>
    {/if}
    
    {#if showDeliveryTerms}
      <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Truck class="h-5 w-5 mr-2 text-blue-500" />
          Delivery Terms
        </h3>
        
        <div>
          <label for="deliveryTerms" class="block text-sm font-medium text-gray-700 mb-1">
            Delivery Terms
          </label>
          <input
            id="deliveryTerms"
            type="text"
            class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
            placeholder="Incoterms, shipping method, packaging requirements, etc."
            value={rfqData.deliveryTerms || ''}
            oninput={(e) => handleInputChange('deliveryTerms', (e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
    {/if}
    
    {#if showPaymentTerms}
      <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <CreditCard class="h-5 w-5 mr-2 text-blue-500" />
          Payment Terms
        </h3>
        
        <div>
          <label for="paymentTerms" class="block text-sm font-medium text-gray-700 mb-1">
            Payment Terms
          </label>
          <input
            id="paymentTerms"
            type="text"
            class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
            placeholder="Net 30, advance payment, letter of credit, etc."
            value={rfqData.paymentTerms || ''}
            oninput={(e) => handleInputChange('paymentTerms', (e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
    {/if}
    
    {#if showAttachments}
      <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Paperclip class="h-5 w-5 mr-2 text-blue-500" />
          Attachments
        </h3>
        
        <div class="flex flex-col">
          <label for="attachments" class="block text-sm font-medium text-gray-700 mb-1">
            Technical drawings, specifications, or other documents
          </label>
          <div class="flex">
            <input
              id="attachments"
              type="file"
              multiple
              class="hidden"
              onchange={handleFileUpload}
            />
            <Button
              variant="outline"
              onclick={() => document.getElementById('attachments')?.click()}
              class="mr-2"
            >
              <Paperclip class="h-4 w-4 mr-1" />
              Browse Files
            </Button>
            <div class="text-sm text-gray-500">
              Max {maxAttachments} files, 10MB each
            </div>
          </div>
          
          {#if rfqData.attachments && rfqData.attachments.length > 0}
            <div class="mt-4 space-y-2">
              {#each rfqData.attachments as attachment, index}
                <div class="flex items-center justify-between p-2 border border-gray-200 rounded">
                  <span class="text-sm text-gray-700 truncate">{attachment.name}</span>
                  <button
                    type="button"
                    class="text-red-600 hover:text-red-800"
                    onclick={() => removeAttachment(index)}
                  >
                    <X class="h-4 w-4" />
                  </button>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}
    
    <div class={`border border-gray-200 rounded-lg p-6 ${sectionClass}`}>
      <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
        <FileText class="h-5 w-5 mr-2 text-blue-500" />
        Additional Information
      </h3>
      
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          id="message"
          class={`block w-full px-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
          rows="4"
          placeholder="Any additional information or special requirements..."
          value={rfqData.message}
          oninput={(e) => handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
        ></textarea>
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
        Submit RFQ
      </Button>
    </div>
  </form>
</div>
