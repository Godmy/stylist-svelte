<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const FileText = 'file-text';
const User = 'user';
const Mail = 'mail';
const Phone = 'phone';
const MapPin = 'map-pin';
const Briefcase = 'briefcase';
const Send = 'send';
const Calendar = 'calendar';
const Package = 'package';
const Plus = 'plus';
const Minus = 'minus';
const Truck = 'truck';
const CreditCard = 'credit-card';
const Paperclip = 'paperclip';
const X = 'x';
const Settings = 'settings';

  import { Button } from '$stylist/components/atoms';
  import InputField from '$stylist/components/atoms/interaction/input/field/input-field/index.svelte';
  import TextArea from '$stylist/components/atoms/interaction/input/field/text-area/index.svelte';
  import Select from '$stylist/components/molecules/interaction/controls/selectors/selector/index.svelte';

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

  type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

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

<div class={`c-rfqform ${hostClass}`} {...restProps}>
  <div class="mb-6">
    <h2 class="text-xl font-bold text-[var(--color-text-primary)] flex items-center">
      <BaseIcon name={FileText} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
      {title}
    </h2>
    {#if description}
      <p class="mt-1 text-[var(--color-text-secondary)]">{description}</p>
    {/if}
  </div>

  <form class={`space-y-6 ${formClass}`} onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <!-- Customer Information -->
    <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
      <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
        <BaseIcon name={User} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
        Customer Information
      </h3>

      <div class="grid grid-cols-1 gap-4">
        <div>
          <label for="requesterName" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Full Name *
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name={User} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              id="requesterName"
              type="text"
              required
              class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              placeholder="John Doe"
              value={rfqData.requesterName}
              oninput={(e: Event) => handleInputChange('requesterName', (e.target as HTMLInputElement).value)}
            />
          </div>
        </div>

        <div>
          <label for="requesterEmail" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Email Address *
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name={Mail} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              id="requesterEmail"
              type="email"
              required
              class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              placeholder="john@example.com"
              value={rfqData.requesterEmail}
              oninput={(e: Event) => handleInputChange('requesterEmail', (e.target as HTMLInputElement).value)}
            />
          </div>
        </div>

        <div>
          <label for="requesterPhone" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Phone Number
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <BaseIcon name={Phone} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
            </div>
            <input
              id="requesterPhone"
              type="tel"
              class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              placeholder="+1 (555) 123-4567"
              value={rfqData.requesterPhone || ''}
              oninput={(e: Event) => handleInputChange('requesterPhone', (e.target as HTMLInputElement).value)}
            />
          </div>
        </div>

        {#if showCompanyFields}
          <div>
            <label for="companyName" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Company Name
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BaseIcon name={Briefcase} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
              </div>
              <input
                id="companyName"
                type="text"
                class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                placeholder="Company Ltd."
                value={rfqData.companyName || ''}
                oninput={(e: Event) => handleInputChange('companyName', (e.target as HTMLInputElement).value)}
              />
            </div>
          </div>

          <div>
            <label for="companyAddress" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Company Address
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BaseIcon name={MapPin} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
              </div>
              <TextArea label=""
                id="companyAddress"
                class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                rows={2}
                placeholder="Street, city, state, postal code"
                value={rfqData.companyAddress || ''}
                oninput={(e: Event) => handleInputChange('companyAddress', (e.target as HTMLTextAreaElement).value)}
              ></TextArea>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Product Requirements -->
    <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] flex items-center">
          <BaseIcon name={Package} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Product Requirements
        </h3>
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-[var(--color-primary-700)] bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-200)]"
          onclick={addProduct}
        >
          <BaseIcon name={Plus} class="h-4 w-4 mr-1" />
          Add Product
        </button>
      </div>

      <div class="space-y-6">
        {#each rfqData.products as product, index}
          {@const baseProductId = `rfq-product-${index}`}
          <div class="border border-[var(--color-border-primary)] rounded-md p-4">
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-medium text-[var(--color-text-primary)]">Product #{index + 1}</h4>
              {#if rfqData.products.length > 1}
                <button
                  type="button"
                  class="text-[var(--color-danger-600)] hover:text-[var(--color-danger-800)] text-sm font-medium"
                  onclick={() => removeProduct(index)}
                >
                  <BaseIcon name={Minus} class="h-4 w-4" />
                </button>
              {/if}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for={`${baseProductId}-name`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  Product Name/Part Number *
                </label>
                <input
                  id={`${baseProductId}-name`}
                  type="text"
                  required
                  class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                  placeholder="Enter product name or part number"
                  value={product.name}
                  oninput={(e: Event) => handleProductChange(index, 'name', (e.target as HTMLInputElement).value)}
                />
              </div>

              <div>
                <label for={`${baseProductId}-description`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  Description
                </label>
                <input
                  id={`${baseProductId}-description`}
                  type="text"
                  class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                  placeholder="Product description"
                  value={product.description || ''}
                  oninput={(e: Event) => handleProductChange(index, 'description', (e.target as HTMLInputElement).value)}
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for={`${baseProductId}-quantity`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                    Quantity *
                  </label>
                  <input
                    id={`${baseProductId}-quantity`}
                    type="number"
                    required
                    min="1"
                    class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                    placeholder="1"
                    value={product.quantity}
                    oninput={(e: Event) => handleProductChange(index, 'quantity', parseInt((e.target as HTMLInputElement).value) || 1)}
                  />
                </div>

                <div>
                  <label for={`${baseProductId}-unit`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                    Unit
                  </label>
                  <select
                    id={`${baseProductId}-unit`}
                    class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md bg-[var(--color-background-primary)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
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
                <label for={`${baseProductId}-unit-price`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  Target Price per Unit
                </label>
                <div class="relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="text-[var(--color-text-secondary)] sm:text-sm">$</span>
                  </div>
                  <input
                    id={`${baseProductId}-unit-price`}
                    type="number"
                    step="0.01"
                    min="0"
                    class={`block w-full pl-7 pr-12 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                    placeholder="0.00"
                    value={product.unitPrice || ''}
                    oninput={(e: Event) => handleProductChange(index, 'unitPrice', parseFloat((e.target as HTMLInputElement).value) || 0)}
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span class="text-[var(--color-text-secondary)] sm:text-sm">{rfqData.currency || 'USD'}</span>
                  </div>
                </div>
              </div>

              <div class="md:col-span-2">
                <label for={`${baseProductId}-specifications`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  Specifications & Requirements
                </label>
                <TextArea label=""
                  id={`${baseProductId}-specifications`}
                  rows={3}
                  class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                  placeholder="Material, dimensions, color, certifications, or other technical requirements"
                  value={product.specifications || ''}
                  oninput={(e: Event) => handleProductChange(index, 'specifications', (e.target as HTMLTextAreaElement).value)}
                ></TextArea>
              </div>

              <div>
                <label for={`${baseProductId}-delivery-date`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  Desired Delivery Date
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BaseIcon name={Calendar} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
                  </div>
                  <input
                    id={`${baseProductId}-delivery-date`}
                    type="date"
                    class={`block w-full pl-10 pr-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                    value={product.deliveryDate || ''}
                    oninput={(e: Event) => handleProductChange(index, 'deliveryDate', (e.target as HTMLInputElement).value)}
                  />
                </div>
              </div>

              <div>
                <label for={`${baseProductId}-notes`} class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                  Notes
                </label>
                <input
                  id={`${baseProductId}-notes`}
                  type="text"
                  class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
                  placeholder="Any special notes"
                  value={product.notes || ''}
                  oninput={(e: Event) => handleProductChange(index, 'notes', (e.target as HTMLInputElement).value)}
                />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    {#if showShippingFields}
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={Truck} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Shipping Information
        </h3>

        <div class="grid grid-cols-1 gap-4">
          <div>
            <label for="shippingAddress" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Shipping Address (if different from company address)
            </label>
            <TextArea label=""
              id="shippingAddress"
              class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
              rows={2}
              placeholder="Shipping address (if different from company address)"
              value={rfqData.shippingAddress || ''}
              oninput={(e: Event) => handleInputChange('shippingAddress', (e.target as HTMLTextAreaElement).value)}
            ></TextArea>
          </div>
        </div>
      </div>
    {/if}

    {#if showDeliveryTerms}
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={Truck} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Delivery Terms
        </h3>

        <div>
          <label for="deliveryTerms" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Delivery Terms
          </label>
          <input
            id="deliveryTerms"
            type="text"
            class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
            placeholder="Incoterms, shipping method, packaging requirements, etc."
            value={rfqData.deliveryTerms || ''}
            oninput={(e: Event) => handleInputChange('deliveryTerms', (e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
    {/if}

    {#if showPaymentTerms}
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={CreditCard} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Payment Terms
        </h3>

        <div>
          <label for="paymentTerms" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Payment Terms
          </label>
          <input
            id="paymentTerms"
            type="text"
            class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
            placeholder="Net 30, advance payment, letter of credit, etc."
            value={rfqData.paymentTerms || ''}
            oninput={(e: Event) => handleInputChange('paymentTerms', (e.target as HTMLInputElement).value)}
          />
        </div>
      </div>
    {/if}

    {#if showAttachments}
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
          <BaseIcon name={Paperclip} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
          Attachments
        </h3>

        <div class="flex flex-col">
          <label for="attachments" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
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
              <BaseIcon name={Paperclip} class="h-4 w-4 mr-1" />
              Browse Files
            </Button>
            <div class="text-sm text-[var(--color-text-secondary)]">
              Max {maxAttachments} files, 10MB each
            </div>
          </div>

          {#if rfqData.attachments && rfqData.attachments.length > 0}
            <div class="mt-4 space-y-2">
              {#each rfqData.attachments as attachment, index}
                <div class="flex items-center justify-between p-2 border border-[var(--color-border-primary)] rounded">
                  <span class="text-sm text-[var(--color-text-primary)] truncate">{attachment.name}</span>
                  <button
                    type="button"
                    class="text-[var(--color-danger-600)] hover:text-[var(--color-danger-800)]"
                    onclick={() => removeAttachment(index)}
                  >
                    <BaseIcon name={X} class="h-4 w-4" />
                  </button>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}

    <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${sectionClass}`}>
      <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4 flex items-center">
        <BaseIcon name={FileText} class="h-5 w-5 mr-2 text-[var(--color-primary-500)]" />
        Additional Information
      </h3>

      <div>
        <label for="message" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
          Additional Notes
        </label>
        <TextArea label=""
          id="message"
          class={`block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md leading-5 bg-[var(--color-background-primary)] placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm ${inputClass}`}
          rows={4}
          placeholder="Any additional information or special requirements..."
          value={rfqData.message}
          oninput={(e: Event) => handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
        ></TextArea>
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
        <BaseIcon name={Send} class="h-4 w-4 mr-2" />
        Submit RFQ
      </Button>
    </div>
  </form>
</div>
















