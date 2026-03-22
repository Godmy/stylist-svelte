import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { TokenAlignment } from '$stylist/design-system/tokens/architecture/alignment';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/ownership/orientation';

/**
 * Divider Props
 * Used for visual dividers/separators
 *
 * Note: РСЃРїРѕР»СЊР·СѓРµС‚ HTMLDivElement, С‚Р°Рє РєР°Рє РєРѕРјРїРѕРЅРµРЅС‚ РјРѕР¶РµС‚ СЂРµРЅРґРµСЂРёС‚СЊ
 * РєР°Рє div (РґР»СЏ РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅС‹С… СЂР°Р·РґРµР»РёС‚РµР»РµР№ СЃ label), С‚Р°Рє Рё hr
 */
export interface DividerProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
  /** TokenOrientation of the divider */
  orientation?: TokenOrientation;
  /** Whether the divider is inset */
  inset?: boolean;
  /** TokenAlignment of the divider content */
  align?: TokenAlignment;
  /** Whether the divider is dashed */
  dashed?: boolean;
  /** Label text to display on the divider */
  label?: string;
}



