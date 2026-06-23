import type { TokenControlOption } from '$stylist/control/type/struct/token-control-option';
import type { TokenTokenValue as TokenValue } from '$stylist/theme/type/enum/token-value';
import type { TokenFunctionalTaxonomy as TokenControlDomain } from '$stylist/architecture/type/enum/functional-taxonomy';

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
