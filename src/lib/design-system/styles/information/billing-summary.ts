/**
 * РњРµРЅРµРґР¶РµСЂ СЃС‚РёР»РµР№ РґР»СЏ РєРѕРјРїРѕРЅРµРЅС‚Р° BillingSummary
 *
 * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїСѓ РµРґРёРЅСЃС‚РІРµРЅРЅРѕР№ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё (SRP) РёР· SOLID -
 * РґР°РЅРЅС‹Р№ РєР»Р°СЃСЃ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РіРµРЅРµСЂР°С†РёСЋ CSS-РєР»Р°СЃСЃРѕРІ РґР»СЏ РєРѕРјРїРѕРЅРµРЅС‚Р° BillingSummary
 */

import type { TokenBillingItem } from '$stylist/design-system/tokens/commerce/billing-item';
import type { TokenBillingSummary } from '$stylist/design-system/tokens/commerce/billing-summary';

export class BillingSummaryStyleManager {
  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РѕСЃРЅРѕРІРЅРѕРіРѕ РєРѕРЅС‚РµР№РЅРµСЂР°
   */
  static getContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-secondary] overflow-hidden';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ Р·Р°РіРѕР»РѕРІРєР°
   */
  static getHeaderClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-b px-6 py-5';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ Р·Р°РіРѕР»РѕРІРєР°
   */
  static getTitleClasses(): string {
    return 'text-lg font-medium text-[--color-text-primary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РїРѕРґР·Р°РіРѕР»РѕРІРєР°
   */
  static getSubtitleClasses(): string {
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РѕР±С‰РµР№ СЃСѓРјРјС‹
   */
  static getTotalAmountClasses(): string {
    return 'text-2xl font-semibold text-[--color-text-primary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ СЃС‚Р°С‚СѓСЃР°
   */
  static getStatusBadgeClasses(status: TokenBillingSummary): string {
    switch(status) {
      case 'paid':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-success-600] bg-[--color-success-100]';
      case 'overdue':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-error-600] bg-[--color-error-100]';
      case 'cancelled':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-text-tertiary] bg-[--color-neutral-100]';
      default: // pending
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-warning-600] bg-[--color-warning-100]';
    }
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РѕСЃРЅРѕРІРЅРѕРіРѕ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ
   */
  static getSummaryClasses(additionalClass: string = ''): string {
    const baseClasses = 'p-6';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РєР°СЂС‚РѕС‡РєРё РјРµС‚СЂРёРєРё
   */
  static getMetricCardClasses(): string {
    return 'border rounded-lg p-4';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РёРєРѕРЅРєРё РјРµС‚СЂРёРєРё
   */
  static getMetricIconContainerClasses(status?: TokenBillingSummary): string {
    if (status === 'overdue') {
      return 'p-2 rounded-md bg-[--color-error-100]';
    }
    if (status === 'paid') {
      return 'p-2 rounded-md bg-[--color-success-100]';
    }
    if (status === 'cancelled') {
      return 'p-2 rounded-md bg-[--color-neutral-100]';
    }
    // pending
    return 'p-2 rounded-md bg-[--color-warning-100]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РёРєРѕРЅРєРё РєР°Р»РµРЅРґР°СЂСЏ
   */
  static getCalendarIconClasses(status?: TokenBillingSummary): string {
    if (status === 'overdue') {
      return 'h-5 w-5 text-[--color-error-600]';
    }
    return 'h-5 w-5 text-[--color-text-tertiary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ С‚РµРєСЃС‚Р° РґР°С‚С‹
   */
  static getDueDateTextClasses(status?: TokenBillingSummary): string {
    if (status === 'overdue') {
      return 'text-lg font-semibold text-[--color-error-600]';
    }
    return 'text-lg font-semibold text-[--color-text-primary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ С‚РµРєСЃС‚Р° РјРµС‚СЂРёРєРё
   */
  static getMetricTextClasses(status?: TokenBillingSummary): string {
    if (status === 'paid') {
      return 'text-lg font-semibold text-[--color-success-600]';
    }
    if (status === 'overdue') {
      return 'text-lg font-semibold text-[--color-error-600]';
    }
    if (status === 'cancelled') {
      return 'text-lg font-semibold text-[--color-text-tertiary]';
    }
    // pending
    return 'text-lg font-semibold text-[--color-warning-600]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ СЃРїРёСЃРєР° СЌР»РµРјРµРЅС‚РѕРІ СЃС‡РµС‚Р°
   */
  static getItemsListContainerClasses(additionalClass: string = ''): string {
    const baseClasses = 'border rounded-lg';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ СЌР»РµРјРµРЅС‚Р° СЃРїРёСЃРєР°
   */
  static getItemsListItemClasses(): string {
    return 'p-4';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РѕРїРёСЃР°РЅРёСЏ СЌР»РµРјРµРЅС‚Р°
   */
  static getItemDescriptionClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РґР°С‚С‹ СЌР»РµРјРµРЅС‚Р°
   */
  static getItemDateClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ СЃСѓРјРјС‹ СЌР»РµРјРµРЅС‚Р°
   */
  static getItemAmountClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ СЃС‚Р°С‚СѓСЃР° СЌР»РµРјРµРЅС‚Р°
   */
  static getItemStatusBadgeClasses(status: TokenBillingItem): string {
    switch(status) {
      case 'paid':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-success-800] bg-[--color-success-100]';
      case 'refunded':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-info-800] bg-[--color-info-100]';
      case 'failed':
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-error-800] bg-[--color-error-100]';
      default: // pending
        return 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-[--color-warning-800] bg-[--color-warning-100]';
    }
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РЅРёР¶РЅРµРіРѕ РєРѕР»РѕРЅС‚РёС‚СѓР»Р°
   */
  static getFooterClasses(additionalClass: string = ''): string {
    const baseClasses = 'border-t px-6 py-4';
    return additionalClass ? `${baseClasses} ${additionalClass}` : baseClasses;
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ ID СЃС‡РµС‚Р°
   */
  static getInvoiceIdClasses(): string {
    return 'text-xs text-[--color-text-secondary]';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ С€СЂРёС„С‚Р° ID СЃС‡РµС‚Р°
   */
  static getInvoiceIdFontClass(): string {
    return 'font-mono';
  }

  /**
   * РџРѕР»СѓС‡Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РґР°С‚С‹ РіРµРЅРµСЂР°С†РёРё
   */
  static getGeneratedDateClasses(): string {
    return 'text-sm text-[--color-text-secondary]';
  }
}










