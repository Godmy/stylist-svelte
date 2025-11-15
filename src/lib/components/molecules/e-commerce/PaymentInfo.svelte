<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { CreditCard, Banknote, Wallet, Shield, Info, Lock, ShieldCheck, Globe, CheckCircle } from 'lucide-svelte';
  import Accordion from '$lib/components/molecules/controls/Accordion.svelte';
  import AccordionItem from '$lib/components/organisms/controls/accordion/AccordionItem.svelte';
  import AccordionHeader from '$lib/components/organisms/controls/accordion/AccordionHeader.svelte';
  import AccordionPanel from '$lib/components/organisms/controls/accordion/AccordionPanel.svelte';

  type PaymentMethod = {
    id: string;
    type: 'credit_card' | 'debit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet' | 'cash_on_delivery' | 'crypto';
    name: string;
    description: string;
    icon?: string;
    enabled?: boolean;
    fee?: number; // Percentage fee if applicable
    processingTime?: string; // Time to process payment
    limitations?: string[]; // Any limitations for this method
    disabled?: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    paymentMethods: PaymentMethod[];
    acceptedCards?: string[]; // e.g., ['visa', 'mastercard', 'amex']
    showMethods?: boolean;
    showSecurity?: boolean;
    showAcceptedCards?: boolean;
    showFees?: boolean;
    showProcessingTime?: boolean;
    showFAQ?: boolean;
    faqs?: { question: string; answer: string }[];
    class?: string;
    headerClass?: string;
    methodClass?: string;
    cardClass?: string;
    securityClass?: string;
    faqClass?: string;
    onMethodSelect?: (method: PaymentMethod) => void;
    showSecurityInfo?: boolean;
  };

  let {
    paymentMethods = [
      {
        id: 'credit-card',
        type: 'credit_card',
        name: 'Credit/Debit Card',
        description: 'Pay with your major credit or debit card',
        enabled: true,
        processingTime: 'Immediate'
      },
      {
        id: 'paypal',
        type: 'paypal',
        name: 'PayPal',
        description: 'Secure payments with PayPal',
        enabled: true,
        processingTime: 'Immediate'
      },
      {
        id: 'bank-transfer',
        type: 'bank_transfer',
        name: 'Bank Transfer',
        description: 'Direct bank transfer payment',
        enabled: true,
        processingTime: '1-3 business days'
      }
    ],
    acceptedCards = ['visa', 'mastercard', 'amex', 'discover'],
    showMethods = true,
    showSecurity = true,
    showAcceptedCards = true,
    showFees = true,
    showProcessingTime = true,
    showFAQ = true,
    faqs = [
      {
        question: "Is my payment information secure?",
        answer: "Yes, all payment information is encrypted and processed through secure payment gateways."
      },
      {
        question: "Which payment methods are available?",
        answer: "We accept all major credit cards, PayPal, and bank transfers."
      },
      {
        question: "Will I be charged extra fees?",
        answer: "Some payment methods may have additional fees. These will be clearly displayed before you confirm your order."
      }
    ],
    class: hostClass = '',
    headerClass = '',
    methodClass = '',
    cardClass = '',
    securityClass = '',
    faqClass = '',
    onMethodSelect,
    showSecurityInfo = true,
    ...restProps
  }: Props = $props();

  let supportedCards = $state(paymentMethods.filter(method => method.enabled));
  let selectedMethodId = $state(paymentMethods.find(m => m.enabled)?.id || '');

  function handleMethodSelect(method: PaymentMethod) {
    if (method.disabled) return;
    selectedMethodId = method.id;
    onMethodSelect?.(method);
  }

  function getPaymentIcon(methodType: string) {
    switch (methodType) {
      case 'credit_card':
      case 'debit_card':
        return CreditCard;
      case 'paypal':
        return CreditCard; // PayPal typically accepts cards
      case 'bank_transfer':
        return Banknote;
      case 'digital_wallet':
        return Wallet;
      default:
        return CreditCard;
    }
  }

  let PaymentIcon = getPaymentIcon(supportedCards[0].type);
</script>

<div class={`payment-info ${hostClass}`} {...restProps}>
  <div class={`border border-gray-200 rounded-lg p-6 ${headerClass}`}>
    <div class="flex items-center">
      <CreditCard class="h-6 w-6 text-blue-500 mr-3" />
      <h2 class="text-xl font-bold text-gray-900">Payment Information</h2>
    </div>
    
    <p class="mt-2 text-gray-600">
      Secure and convenient payment options for your purchase
    </p>
  </div>
  
  <div class="mt-6 space-y-8">
    {#if showMethods && paymentMethods.length > 0}
      <!-- Payment methods -->
      <div class={`border border-gray-200 rounded-lg p-6 ${methodClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Available Payment Methods</h3>
        
        <div class="space-y-4">
          {#each paymentMethods as method}
            {@const MethodIcon = getPaymentIcon(method.type)}
            <button
              type="button"
              class={`w-full flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                selectedMethodId === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              } ${method.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onclick={() => handleMethodSelect(method)}
              disabled={method.disabled}
              aria-pressed={selectedMethodId === method.id}
            >
              <div class="flex items-center">
                <MethodIcon class="h-6 w-6 text-gray-600 mr-3" />
                <div>
                  <h4 class="font-medium text-gray-900">{method.name}</h4>
                  <p class="text-sm text-gray-600">{method.description}</p>
                  
                  {#if method.limitations && method.limitations.length > 0}
                    <div class="mt-1">
                      {#each method.limitations as limitation}
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-1 mb-1">
                          {limitation}
                        </span>
                      {/each}
                    </div>
                  {/if}
                </div>
              </div>
              
              <div class="flex flex-col items-end">
                {#if showFees && method.fee !== undefined}
                  <span class="text-sm font-medium text-gray-900">+{method.fee}% fee</span>
                {/if}
                
                {#if showProcessingTime && method.processingTime}
                  <span class="text-xs text-gray-500">{method.processingTime}</span>
                {/if}
                
                <div class="mt-2">
                  <CheckCircle class="h-5 w-5 text-green-500" />
                </div>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/if}
    
    {#if showSecurityInfo}
      <!-- Security information -->
      <div class={`border border-gray-200 rounded-lg p-6 ${securityClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <Shield class="h-5 w-5 mr-2 text-green-500" />
          Security Information
        </h3>
        
        <div class="prose prose-sm max-w-none">
          <p>
            Your payment information is securely encrypted and processed through trusted payment partners. 
            We never store your complete payment details on our servers.
          </p>
          
          <ul class="mt-4 space-y-2">
            <li class="flex items-start">
              <Lock class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>All transactions are protected with 256-bit SSL encryption</span>
            </li>
            <li class="flex items-start">
              <ShieldCheck class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>We are PCI DSS compliant to ensure payment security</span>
            </li>
            <li class="flex items-start">
              <Globe class="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Our payment processors are certified by international security standards</span>
            </li>
          </ul>
        </div>
      </div>
    {/if}
    
    {#if showAcceptedCards && acceptedCards.length > 0}
      <!-- Accepted cards -->
      <div class={`border border-gray-200 rounded-lg p-6 ${cardClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Accepted Cards</h3>
        
        <div class="flex flex-wrap gap-4">
          {#each acceptedCards as card}
            <div class="flex flex-col items-center">
              <div class="h-12 w-16 rounded border border-gray-300 flex items-center justify-center bg-white">
                {#if card === 'visa'}
                  <span class="font-bold text-gray-800">VISA</span>
                {:else if card === 'mastercard'}
                  <span class="font-bold text-red-600">MC</span>
                {:else if card === 'amex'}
                  <span class="font-bold text-blue-600">AMEX</span>
                {:else if card === 'discover'}
                  <span class="font-bold text-blue-800">DISC</span>
                {:else}
                  <span class="text-xs font-medium text-gray-700">{card.toUpperCase()}</span>
                {/if}
              </div>
              <span class="mt-2 text-xs text-gray-600 capitalize">{card}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
    
    {#if showFAQ && faqs.length > 0}
      <!-- Payment FAQ -->
      <div class={`border border-gray-200 rounded-lg p-6 ${faqClass}`}>
        <h3 class="text-lg font-medium text-gray-900 mb-4">Payment FAQ</h3>

        <Accordion
          items={faqs.map((faq, index) => ({
            id: `faq-${index}`,
            title: faq.question,
            content: () => faq.answer
          }))}
          class="mt-4"
        />
      </div>
    {/if}
  </div>
</div>
