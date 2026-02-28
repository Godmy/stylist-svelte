export type TokenDomain = 'architecture' | 'information' | 'interaction';
export type TokenControlKind = 'radio' | 'select' | 'range';
export type TokenValue = string | number | boolean;

export type TokenOption = {
	label: string;
	value: TokenValue;
};

type TokenControlBase = {
	id: string;
	tokenDomain: TokenDomain;
	tokenFile: string;
	tokenName: string;
	controlKind: TokenControlKind;
	defaultValue?: TokenValue;
	description?: string;
};

export type TokenRadioControlDefinition = TokenControlBase & {
	controlKind: 'radio';
	options: readonly TokenOption[];
};

export type TokenSelectControlDefinition = TokenControlBase & {
	controlKind: 'select';
	options: readonly TokenOption[];
};

export type TokenRangeControlDefinition = TokenControlBase & {
	controlKind: 'range';
	min: number;
	max: number;
	step?: number;
};

export type TokenControlDefinition =
	| TokenRadioControlDefinition
	| TokenSelectControlDefinition
	| TokenRangeControlDefinition;

