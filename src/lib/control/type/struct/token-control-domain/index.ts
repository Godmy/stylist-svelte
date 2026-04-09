import type { TokenFunctionalTaxonomy } from '$stylist/architecture/type/enum/functional-taxonomy';
import type { TokenControlOption } from '$stylist/control/type/struct/token-control-option';
import type { TokenValue } from '$stylist/control/type/struct/token-value';

export type TokenControlDomain = TokenFunctionalTaxonomy;
export type TokenControlKind = 'radio' | 'select' | 'range' | 'text';

export type TokenControlDefinitionData = {
	id: string;
	functionalTaxonomy: TokenControlDomain;
	tokenFile: string;
	tokenName: string;
	controlKind: TokenControlKind;
	defaultValue?: TokenValue;
	description?: string;
	options?: TokenControlOption[];
	min?: number;
	max?: number;
	step?: number;
	placeholder?: string;
};
