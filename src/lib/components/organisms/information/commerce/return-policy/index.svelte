<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const RotateCcw = 'rotate-ccw';
const Calendar = 'calendar';
const Package = 'package';
const FileText = 'file-text';
const Info = 'info';
const Truck = 'truck';
const DollarSign = 'dollar-sign';
const CheckCircle = 'check-circle';
const XCircle = 'x-circle';
const Tag = 'tag';
const ChevronDown = 'chevron-down';

  import { Button } from '$stylist/components/atoms';

  type ReturnCondition = {
    id: string;
    title: string;
    description: string;
    appliesTo: string[]; // Categories or products this condition applies to
    exceptions?: string[];
  };

  type ReturnStep = {
    id: string;
    title: string;
    description: string;
    icon: any; // Lucide icon
  };

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    policyPeriod: number; // in days
    policyDescription?: string;
    conditions?: ReturnCondition[];
    returnSteps?: ReturnStep[];
    eligibleProducts?: string[];
    ineligibleProducts?: string[];
    shippingCosts?: 'buyer' | 'seller' | 'partial';
    restockingFee?: number; // percentage
    showConditions?: boolean;
    showSteps?: boolean;
    showEligibility?: boolean;
    showShippingInfo?: boolean;
    showFAQ?: boolean;
    faqs?: { question: string; answer: string }[];
    class?: string;
    headerClass?: string;
    contentClass?: string;
    conditionClass?: string;
    stepClass?: string;
    shippingInfoClass?: string;
    onPolicyClick?: () => void;
    onReturnInitiate?: () => void;
    policyEffectiveDate?: Date;
    locale?: string;
  };

  let {
    policyPeriod = 30,
    policyDescription = 'Our return policy allows you to return most new, unopened items within {days} days of delivery for a full refund.',
    policyEffectiveDate,
    conditions = [
      {
        id: 'condition-1',
        title: 'Time Limit',
        description: `Returns must be initiated within ${policyPeriod} days of delivery`,
        appliesTo: ['all']
      },
      {
        id: 'condition-2',
        title: 'Original Condition',
        description: 'Item must be in original condition, unused and in original packaging',
        appliesTo: ['all']
      },
      {
        id: 'condition-3',
        title: 'Proof of Purchase',
        description: 'Receipt or proof of purchase is required',
        appliesTo: ['all']
      }
    ],
    returnSteps = [
      {
        id: 'step-1',
        title: 'Initiate Return',
        description: 'Start your return online and print the return label',
        icon: FileText
      },
      {
        id: 'step-2',
        title: 'Pack Item',
        description: 'Pack the item securely with original packaging if possible',
        icon: Package
      },
      {
        id: 'step-3',
        title: 'Ship Item',
        description: 'Drop off the package at the designated carrier location',
        icon: Truck
      },
      {
        id: 'step-4',
        title: 'Refund Processed',
        description: 'Once received, we\'ll process your refund within 5-7 business days',
        icon: DollarSign
      }
    ],
    eligibleProducts = ['Clothing', 'Electronics', 'Home & Garden', 'Books'],
    ineligibleProducts = ['Food & Grocery', 'Personal Care', 'Gift Cards'],
    shippingCosts = 'buyer',
    restockingFee = 0,
    showConditions = true,
    showSteps = true,
    showEligibility = true,
    showShippingInfo = true,
    showFAQ = true,
    faqs = [
      {
        question: "How long does the return process take?",
        answer: "The return process typically takes 5-7 business days from the time we receive your return."
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer: "Yes, we offer exchanges for items of equal or greater value. Just select the exchange option when initiating your return."
      },
      {
        question: "Will I be charged a restocking fee?",
        answer: `We charge a ${restockingFee}% restocking fee for certain items. This will be deducted from your refund.`
      }
    ],
    class: hostClass = '',
    headerClass = '',
    contentClass = '',
    conditionClass = '',
    stepClass = '',
    shippingInfoClass = '',
    onPolicyClick,
    onReturnInitiate,
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let showReturnForm = $state(false);
  let activeFaqId: string | null = $state(null);

  function initiateReturn() {
    onReturnInitiate?.();
    showReturnForm = true;
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  }

  function formatPolicyDescription(description: string): string {
    return description.replace('{days}', policyPeriod.toString());
  }

  let formattedDescription = $derived(formatPolicyDescription(policyDescription));
</script>

<div class={`c-return-policy ${hostClass}`} {...restProps}>
  <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${headerClass}`}>
    <div class="flex items-start">
      <BaseIcon name={RotateCcw} class="h-8 w-8 text-[var(--color-primary-500)] flex-shrink-0" />
      <div class="ml-4">
        <h2 class="text-xl font-bold text-[var(--color-text-primary)]">Return Policy</h2>
        <p class="mt-1 text-[var(--color-text-secondary)]">
          {formattedDescription}
        </p>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
          For purchases made on or after <time>{formatDate(policyEffectiveDate || new Date())}</time>
        </p>
      </div>
    </div>
  </div>

  <div class={`mt-6 space-y-8 ${contentClass}`}>
    <!-- Return period information -->
    <div class="bg-[var(--color-primary-50)] border border-[var(--color-primary-100)] rounded-lg p-6">
      <div class="flex items-center">
        <BaseIcon name={Calendar} class="h-5 w-5 text-[var(--color-primary-500)] mr-2" />
        <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Return Period</h3>
      </div>
      <div class="mt-4 ml-7">
        <p class="text-[var(--color-text-primary)]">
          You can return most new, unopened items within
          <span class="font-semibold">{policyPeriod} days</span> of delivery for a full refund.
        </p>
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
          Items must be returned at your expense unless the return is due to an error on our part (incorrect or defective item).
        </p>
      </div>
    </div>

    <!-- Conditions -->
    {#if showConditions}
      <div class="border border-[var(--color-border-primary)] rounded-lg p-6">
        <div class="flex items-center">
          <BaseIcon name={FileText} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
          <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Return Conditions</h3>
        </div>

        <div class="mt-4 space-y-4">
          {#each conditions as condition}
            <div class={`border-l-4 border-[var(--color-primary-500)] pl-4 ${conditionClass}`}>
              <h4 class="font-medium text-[var(--color-text-primary)]">{condition.title}</h4>
              <p class="mt-1 text-[var(--color-text-secondary)]">{condition.description}</p>

              {#if condition.exceptions && condition.exceptions.length > 0}
                <div class="mt-2">
                  <p class="text-sm font-medium text-[var(--color-text-primary)]">Exceptions:</p>
                  <ul class="list-disc list-inside mt-1 text-sm text-[var(--color-text-secondary)]">
                    {#each condition.exceptions as exception}
                      <li>{exception}</li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Eligible/Ineligible products -->
    {#if showEligibility}
      <div class="border border-[var(--color-border-primary)] rounded-lg p-6">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Eligible & Ineligible Products</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-medium text-[var(--color-success-800)] mb-3 flex items-center">
              <BaseIcon name={CheckCircle} class="h-5 w-5 mr-2 text-[var(--color-success-500)]" />
              Eligible for Return
            </h4>
            <ul class="space-y-2">
              {#each eligibleProducts as product}
                <li class="flex items-start">
                  <BaseIcon name={CheckCircle} class="h-5 w-5 text-[var(--color-success-500)] mr-2 flex-shrink-0 mt-0.5" />
                  <span class="text-[var(--color-text-primary)]">{product}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div>
            <h4 class="font-medium text-[var(--color-danger-800)] mb-3 flex items-center">
              <BaseIcon name={XCircle} class="h-5 w-5 mr-2 text-[var(--color-danger-500)]" />
              Not Eligible for Return
            </h4>
            <ul class="space-y-2">
              {#each ineligibleProducts as product}
                <li class="flex items-start">
                  <BaseIcon name={XCircle} class="h-5 w-5 text-[var(--color-danger-500)] mr-2 flex-shrink-0 mt-0.5" />
                  <span class="text-[var(--color-text-primary)]">{product}</span>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    {/if}

    <!-- Return process steps -->
    {#if showSteps}
      <div class="border border-[var(--color-border-primary)] rounded-lg p-6">
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Return Process</h3>

        <div class="space-y-6">
          {#each returnSteps as step, index}
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] font-medium">
                  {index + 1}
                </div>
              </div>
              <div class={`ml-4 ${stepClass}`}>
                <div class="flex items-center">
                  <span class="h-6 w-6 mr-2 text-[var(--color-primary-500)]">{@render step.icon()}</span>
                  <h4 class="font-medium text-[var(--color-text-primary)]">{step.title}</h4>
                </div>
                <p class="mt-1 text-[var(--color-text-secondary)]">{step.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Shipping costs information -->
    {#if showShippingInfo}
      <div class={`border border-[var(--color-border-primary)] rounded-lg p-6 ${shippingInfoClass}`}>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Shipping Costs</h3>

        <div class="flex items-start">
          <BaseIcon name={Truck} class="h-6 w-6 text-[var(--color-text-secondary)] mr-3 flex-shrink-0 mt-0.5" />
          <div>
            {#if shippingCosts === 'buyer'}
              <p class="text-[var(--color-text-primary)]">
                <span class="font-medium">Who pays for return shipping:</span> Customer (you) pays for return shipping costs.
              </p>
              <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
                Original shipping costs are not refunded unless the return is due to our error or product defect.
              </p>
            {:else if shippingCosts === 'seller'}
              <p class="text-[var(--color-text-primary)]">
                <span class="font-medium">Who pays for return shipping:</span> Seller pays for return shipping costs.
              </p>
              <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
                We'll provide a prepaid return label that you can use to ship the item back.
              </p>
            {:else if shippingCosts === 'partial'}
              <p class="text-[var(--color-text-primary)]">
                <span class="font-medium">Who pays for return shipping:</span> Partial cost covered by seller.
              </p>
              <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
                We'll provide a return label with reduced shipping costs for your convenience.
              </p>
            {/if}
          </div>
        </div>

        {#if restockingFee > 0}
          <div class="mt-4 flex items-start">
            <BaseIcon name={Tag} class="h-6 w-6 text-[var(--color-text-secondary)] mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p class="text-[var(--color-text-primary)]">
                <span class="font-medium">Restocking fee:</span> {restockingFee}% of item price will be deducted from refund.
              </p>
              <p class="mt-2 text-sm text-[var(--color-text-secondary)]">
                Restocking fee helps cover the cost of inspecting and restocking returned items.
              </p>
            </div>
          </div>
        {/if}
      </div>
    {/if}

    <!-- FAQ accordion -->
    {#if showFAQ && faqs.length > 0}
      <div>
        <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Return Policy FAQs</h3>

        <div class="space-y-2">
          {#each faqs as faq, index}
            <div class="border border-[var(--color-border-primary)] rounded-lg overflow-hidden">
              <button
                class="w-full text-left p-4 bg-[var(--color-background-secondary)] hover:bg-[var(--color-background-secondary)] font-medium flex justify-between items-center"
                onclick={() => {
                  const current = activeFaqId;
                  activeFaqId = current === `faq-${index}` ? null : `faq-${index}`;
                }}
              >
                <span>{faq.question}</span>
                <BaseIcon name={ChevronDown} class={`h-4 w-4 transition-transform ${activeFaqId === `faq-${index}` ? 'rotate-180' : ''}`} />
              </button>
              {#if activeFaqId === `faq-${index}`}
                <div class="p-4 bg-[var(--color-background-primary)]">
                  <p class="text-[var(--color-text-primary)]">{faq.answer}</p>
                </div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    {/if}

    <!-- Action buttons -->
    <div class="mt-6 flex flex-wrap gap-3">
      <Button variant="primary" onclick={initiateReturn}>
        <BaseIcon name={RotateCcw} class="h-4 w-4 mr-2" />
        Initiate Return
      </Button>

      <Button variant="outline">
        <BaseIcon name={FileText} class="h-4 w-4 mr-2" />
        View Full Policy
      </Button>

      <Button variant="outline">
        <BaseIcon name={Info} class="h-4 w-4 mr-2" />
        Contact Support
      </Button>
    </div>
  </div>

  <!-- Return form (when initiated) -->
  {#if showReturnForm}
    <div class="mt-6 border border-[var(--color-border-primary)] rounded-lg p-6">
      <h3 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Initiate Return</h3>

      <form class="space-y-4">
        <div>
          <label for="orderNumber" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Order Number
          </label>
          <input
            type="text"
            id="orderNumber"
            class="block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
            placeholder="Enter your order number"
          />
        </div>

        <div>
          <label for="returnReason" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Return Reason
          </label>
          <select
            id="returnReason"
            class="block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md bg-[var(--color-background-primary)] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
          >
            <option value="">Select a reason</option>
            <option value="wrong-item">Received wrong item</option>
            <option value="defective">Item is defective</option>
            <option value="not-as-described">Item not as described</option>
            <option value="no-longer-needed">No longer needed</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label for="returnNotes" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            Additional Notes (Optional)
          </label>
          <textarea
            id="returnNotes"
            rows="3"
            class="block w-full px-3 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
            placeholder="Provide any additional details about your return"
          ></textarea>
        </div>

        <div class="flex space-x-3">
          <Button variant="primary" type="submit">
            Submit Return Request
          </Button>
          <Button variant="outline" onclick={() => showReturnForm = false}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  {/if}
</div>






