<script lang="ts">
  /**
   * РљРѕРјРїРѕРЅРµРЅС‚ BillingSummary
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - SRP: РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ СЃРІРѕРґРєРё РїРѕ Р±РёР»Р»РёРЅРіСѓ
   * - OCP: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј Р·Р° СЃС‡РµС‚ РїСЂРѕРїСЃРѕРІ
   * - LSP: РџРѕРґС‡РёРЅСЏРµС‚СЃСЏ РєРѕРЅС‚СЂР°РєС‚Сѓ, Р·Р°РґР°РЅРЅРѕРјСѓ РёРЅС‚РµСЂС„РµР№СЃРѕРј IBillingSummaryProps
   * - ISP: РРЅС‚РµСЂС„РµР№СЃ РїСЂРѕРїСЃРѕРІ СЂР°Р·РґРµР»РµРЅ РЅР° РєРѕРЅРєСЂРµС‚РЅС‹Рµ, РЅРµРѕР±С…РѕРґРёРјС‹Рµ С‡Р°СЃС‚Рё
   * - DIP: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (С‚РёРїРѕРІ Рё СЃС‚РёР»РµР№), Р° РЅРµ РѕС‚ РґРµС‚Р°Р»РµР№ СЂРµР°Р»РёР·Р°С†РёРё
   *
   * РЎР»РµРґСѓРµС‚ Atomic Design: Р­С‚Рѕ РјРѕР»РµРєСѓР»Р°, РѕР±СЉРµРґРёРЅСЏСЋС‰Р°СЏ СЂР°Р·Р»РёС‡РЅС‹Рµ СЌР»РµРјРµРЅС‚С‹ Р±РёР»Р»РёРЅРіР°
   */

  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const DollarSign = 'dollar-sign';
const Calendar = 'calendar';
const Clock = 'clock';
const Receipt = 'receipt';
const TrendingUp = 'trending-up';
const TrendingDown = 'trending-down';

  import { BillingSummaryStyleManager } from '$stylist/design-system/styles/information/billing-summary';
  import type { IBillingSummaryProps } from '$stylist/design-system/contracts/information/billing-summary';

  let {
    title = 'Billing Summary',
    subtitle = 'Payment summary for your subscription',
    totalAmount = 0,
    currency = 'USD',
    dueDate,
    status = 'pending',
    items = [],
    showDetails = true,
    showDueDate = true,
    showStatus = true,
    class: className = '',
    headerClass = '',
    summaryClass = '',
    itemsClass = '',
    footerClass = '',
    ...restProps
  }: IBillingSummaryProps = $props();

  // Format currency
  function formatCurrency(amount: number, curr: string) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr
    }).format(amount);
  }

  // Format date
  function formatDate(date?: Date) {
    if (!date) return '';
    return date.toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Get status text
  function getStatusText() {
    switch(status) {
      case 'paid': return 'Paid';
      case 'overdue': return 'Overdue';
      case 'cancelled': return 'Cancelled';
      default: return 'Pending';
    }
  }

  // Calculate total amount
  const total = $derived(items.reduce((sum, item) => sum + item.amount, 0));
</script>

<div class={`c-billing-summary ${BillingSummaryStyleManager.getContainerClasses(className)}`} {...restProps}>
  <div class={BillingSummaryStyleManager.getHeaderClasses(headerClass)}>
    <div class="flex items-center justify-between">
      <div>
        <div class="flex items-center">
          <BaseIcon name={DollarSign} class="h-6 w-6 text-[--color-text-tertiary] mr-2" />
          <h3 class={BillingSummaryStyleManager.getTitleClasses()}>{title}</h3>
        </div>
        {#if subtitle}
          <p class={BillingSummaryStyleManager.getSubtitleClasses()}>{subtitle}</p>
        {/if}
      </div>

      <div class="text-right">
        <p class={BillingSummaryStyleManager.getTotalAmountClasses()}>
          {formatCurrency(total, currency)}
        </p>
        {#if showStatus}
          <span class={BillingSummaryStyleManager.getStatusBadgeClasses(status)}>
            {getStatusText()}
          </span>
        {/if}
      </div>
    </div>
  </div>

  {#if showDetails}
    <div class={BillingSummaryStyleManager.getSummaryClasses(summaryClass)}>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Total amount -->
        <div class={BillingSummaryStyleManager.getMetricCardClasses()}>
          <div class="flex items-center">
            <div class={BillingSummaryStyleManager.getMetricIconContainerClasses()}>
              <BaseIcon name={DollarSign} class="h-5 w-5 text-[--color-primary-600]" />
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-[--color-text-secondary]">Total Amount</p>
              <p class="text-xl font-semibold text-[--color-text-primary]">
                {formatCurrency(total, currency)}
              </p>
            </div>
          </div>
        </div>

        <!-- Due date -->
        {#if showDueDate && dueDate}
          <div class={BillingSummaryStyleManager.getMetricCardClasses()}>
            <div class="flex items-center">
              <div class={BillingSummaryStyleManager.getMetricIconContainerClasses(status)}>
                <BaseIcon name={Calendar} class={BillingSummaryStyleManager.getCalendarIconClasses(status)} />
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-[--color-text-secondary]">Due Date</p>
                <p class={BillingSummaryStyleManager.getDueDateTextClasses(status)}>
                  {formatDate(dueDate)}
                </p>
              </div>
            </div>
          </div>
        {/if}

        <!-- Status -->
        {#if showStatus}
          <div class={BillingSummaryStyleManager.getMetricCardClasses()}>
            <div class="flex items-center">
              <div class={BillingSummaryStyleManager.getMetricIconContainerClasses(status)}>
                {#if status === 'paid'}
                  <BaseIcon name={TrendingUp} class="h-5 w-5 text-[--color-success-600]" />
                {:else if status === 'overdue'}
                  <BaseIcon name={TrendingDown} class="h-5 w-5 text-[--color-error-600]" />
                {:else if status === 'cancelled'}
                  <BaseIcon name={Receipt} class="h-5 w-5 text-[--color-text-tertiary]" />
                {:else}
                  <BaseIcon name={Clock} class="h-5 w-5 text-[--color-warning-600]" />
                {/if}
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-[--color-text-secondary]">Status</p>
                <p class={BillingSummaryStyleManager.getMetricTextClasses(status)}>
                  {getStatusText()}
                </p>
              </div>
            </div>
          </div>
        {/if}
      </div>

      <!-- Billing items -->
      {#if items.length > 0}
        <div class="mt-8">
          <h4 class="text-sm font-medium text-[--color-text-primary] mb-4">Billing Details</h4>
          <div class={BillingSummaryStyleManager.getItemsListContainerClasses(itemsClass)}>
            <ul class="divide-y divide-[--color-border-divider]">
              {#each items as item}
                <li class={BillingSummaryStyleManager.getItemsListItemClasses()}>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class={BillingSummaryStyleManager.getItemDescriptionClasses()}>{item.description}</p>
                      <p class={BillingSummaryStyleManager.getItemDateClasses()}>{formatDate(item.date)}</p>
                    </div>
                    <div class="text-right">
                      <p class={BillingSummaryStyleManager.getItemAmountClasses()}>
                        {formatCurrency(item.amount, item.currency)}
                      </p>
                      <span class={BillingSummaryStyleManager.getItemStatusBadgeClasses(item.status)}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}
    </div>
  {/if}

  <div class={BillingSummaryStyleManager.getFooterClasses(footerClass)}>
    <div class="flex items-center justify-between">
      <div class={BillingSummaryStyleManager.getInvoiceIdClasses()}>
        Invoice ID: <span class={BillingSummaryStyleManager.getInvoiceIdFontClass()}>#INV-{Math.floor(Math.random() * 900000) + 100000}</span>
      </div>
      <div class={BillingSummaryStyleManager.getGeneratedDateClasses()}>
        Generated: {new Date().toLocaleDateString()}
      </div>
    </div>
  </div>
</div>


