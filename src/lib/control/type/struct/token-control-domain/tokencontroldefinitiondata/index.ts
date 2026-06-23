import type { TokenControlOption } from '$stylist/control/type/struct/token-control-option';
import type { TokenValue } from '$stylist/control/type/struct/token-value';
import type { TokenControlDomain } from '../tokencontroldomain';

export type TokenControlDefinitionData = {
	id: string;
	functionalTaxonomy: TokenControlDomain;
	tokenFile: string;
	tokenName: string;
	controlKind: 'radio' | 'select' | 'range' | 'text';
	defaultValue?: TokenValue;
	description?: string;
	options?: TokenControlOption[];
	min?: number;
	max?: number;
	step?: number;
	placeholder?: string;
};
