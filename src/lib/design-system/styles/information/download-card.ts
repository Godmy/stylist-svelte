/**
 * РњРµРЅРµРґР¶РµСЂ СЃС‚РёР»РµР№ РґР»СЏ РєРѕРјРїРѕРЅРµРЅС‚Р° DownloadCard
 *
 * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїСѓ РµРґРёРЅСЃС‚РІРµРЅРЅРѕР№ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё (SRP) РёР· SOLID:
 * РћС‚РІРµС‡Р°РµС‚ РёСЃРєР»СЋС‡РёС‚РµР»СЊРЅРѕ Р·Р° РіРµРЅРµСЂР°С†РёСЋ CSS-РєР»Р°СЃСЃРѕРІ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РїСЂРѕРїСЃРѕРІ
 * Рё РЅРµ СЃРѕРґРµСЂР¶РёС‚ РЅРёРєР°РєРѕР№ Р»РѕРіРёРєРё РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РёР»Рё РїРѕРІРµРґРµРЅРёСЏ.
 *
 * РќРћР РњРђР›РР—РћР’РђРќРќРђРЇ Р’Р•Р РЎРРЇ - РёСЃРїРѕР»СЊР·СѓРµС‚ РѕР±С‰РёРµ Р±Р°Р·РѕРІС‹Рµ РєР»Р°СЃСЃС‹ РёР· cards.ts
 */

import type { ToneVariant } from '$stylist/design-system/tokens/interaction/variants';
import { CardStyleManager } from '$stylist/design-system/styles/information/card';

export class DownloadCardStyleManager {
  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РѕСЃРЅРѕРІРЅРѕРіРѕ РєРѕРЅС‚РµР№РЅРµСЂР° DownloadCard
   * РСЃРїРѕР»СЊР·СѓРµС‚ РЅРѕСЂРјР°Р»РёР·РѕРІР°РЅРЅС‹Рµ Р±Р°Р·РѕРІС‹Рµ РєР»Р°СЃСЃС‹ РґР»СЏ РєР°СЂС‚РѕС‡РµРє
   */
  static getContainerClasses(className?: string): string {
    return `${CardStyleManager.getBaseClasses()} download-card flex items-center p-4 hover:shadow-md transition-shadow duration-[var(--duration-200)] ${className || ''}`.trim();
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РёРєРѕРЅРєРё С„Р°Р№Р»Р°
   * РСЃРїРѕР»СЊР·СѓРµС‚ РЅРѕСЂРјР°Р»РёР·РѕРІР°РЅРЅС‹Рµ РєР»Р°СЃСЃС‹ РґР»СЏ РёРєРѕРЅРѕРє
   */
  static getIconContainerClasses(): string {
    return CardStyleManager.getIconContainerBaseClasses();
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РёРєРѕРЅРєРё РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РІР°СЂРёР°РЅС‚Р°
   */
  static getIconClasses(variant: ToneVariant = 'primary'): string {
    const variantClasses: Record<ToneVariant, string> = {
      primary: 'text-[--color-primary-500] bg-[--color-primary-50]',
      secondary: 'text-[--color-neutral-500] bg-[--color-neutral-50]',
      success: 'text-[--color-success-500] bg-[--color-success-50]',
      warning: 'text-[--color-warning-500] bg-[--color-warning-50]',
      danger: 'text-[--color-danger-500] bg-[--color-danger-50]',
      error: 'text-[--color-danger-500] bg-[--color-danger-50]',
      info: 'text-[--color-info-500] bg-[--color-info-50]'
    };

    return `${CardStyleManager.getIconClasses('md')} ${variantClasses[variant] || variantClasses.primary}`;
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РєРѕРЅС‚РµР№РЅРµСЂР° РёРЅС„РѕСЂРјР°С†РёРё Рѕ С„Р°Р№Р»Рµ
   * РСЃРїРѕР»СЊР·СѓРµС‚ РЅРѕСЂРјР°Р»РёР·РѕРІР°РЅРЅС‹Рµ РєР»Р°СЃСЃС‹ РґР»СЏ С‚РµРєСЃС‚РѕРІРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°
   */
  static getInfoContainerClasses(): string {
    return CardStyleManager.getTextContentBaseClasses();
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РёРјРµРЅРё С„Р°Р№Р»Р°
   * РСЃРїРѕР»СЊР·СѓРµС‚ РЅРѕСЂРјР°Р»РёР·РѕРІР°РЅРЅС‹Рµ РєР»Р°СЃСЃС‹ РґР»СЏ СѓСЃРµС‡РµРЅРёСЏ С‚РµРєСЃС‚Р°
   */
  static getFileNameClasses(): string {
    return `text-sm font-medium text-[--color-text-primary] ${CardStyleManager.getTruncateBaseClasses()} block`;
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РјРµС‚Р°РґР°РЅРЅС‹С… С„Р°Р№Р»Р°
   */
  static getMetadataClasses(): string {
    return 'text-xs text-[--color-text-secondary] mt-1 flex flex-wrap gap-2';
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РѕС‚РґРµР»СЊРЅРѕРіРѕ СЌР»РµРјРµРЅС‚Р° РјРµС‚Р°РґР°РЅРЅС‹С…
   */
  static getMetadataItemClasses(): string {
    return 'inline-flex items-center';
  }

  /**
   * Р’РѕР·РІСЂР°С‰Р°РµС‚ CSS-РєР»Р°СЃСЃС‹ РґР»СЏ РєРЅРѕРїРєРё СЃРєР°С‡РёРІР°РЅРёСЏ
   * РСЃРїРѕР»СЊР·СѓРµС‚ РЅРѕСЂРјР°Р»РёР·РѕРІР°РЅРЅС‹Рµ РєР»Р°СЃСЃС‹ РґР»СЏ РґРµР№СЃС‚РІРёР№
   */
  static getDownloadButtonClasses(variant: ToneVariant = 'primary'): string {
    const variantClasses: Record<ToneVariant, string> = {
      primary: 'text-[--color-primary-600] hover:text-[--color-primary-700]',
      secondary: 'text-[--color-neutral-600] hover:text-[--color-neutral-700]',
      success: 'text-[--color-success-600] hover:text-[--color-success-700]',
      warning: 'text-[--color-warning-600] hover:text-[--color-warning-700]',
      danger: 'text-[--color-danger-600] hover:text-[--color-danger-700]',
      error: 'text-[--color-danger-600] hover:text-[--color-danger-700]',
      info: 'text-[--color-info-600] hover:text-[--color-info-700]'
    };

    return `ml-4 p-2 rounded-full hover:bg-[--color-background-secondary] transition-colors duration-[var(--duration-150)] ${variantClasses[variant] || variantClasses.primary}`;
  }
}









