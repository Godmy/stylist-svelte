/**
 * OrderConfirmationContract вЂ” РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenOrderStatus } from '$stylist/commerce/type/enum/order-status';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';

export interface ContractShippingAddress {
	firstName: string;
	lastName: string;
	address1: string;
	address2?: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}
