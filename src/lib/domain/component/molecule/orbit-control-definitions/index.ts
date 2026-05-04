import type { TokenControlDefinition } from '$stylist/control/type/struct/token-control-definition';
import type { TokenRadioControlDefinition } from '$stylist/control/type/struct/radio-control-definition';
import type { TokenRangeControlDefinition } from '$stylist/control/type/struct/range-control-definition';
import type { TokenSelectControlDefinition } from '$stylist/control/type/struct/select-control-definition';
import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

const radioDefinition: TokenRadioControlDefinition = {
	id: 'l6-radio-state',
	functionalTaxonomy: 'interaction',
	tokenFile: 'state-variants',
	tokenName: 'STATE_VARIANTS',
	controlKind: 'radio',
	defaultValue: 'default' as const,
	options: [
		{ label: 'default', value: 'default' as const },
		{ label: 'hover', value: 'hover' as const },
		{ label: 'active', value: 'active' as const }
	]
};

const selectDefinition: TokenSelectControlDefinition = {
	id: 'l6-select-semantic',
	functionalTaxonomy: 'information',
	tokenFile: 'semantic-variants',
	tokenName: 'SEMANTIC_VARIANTS',
	controlKind: 'select',
	defaultValue: 'primary' as const,
	options: [
		{ label: 'primary', value: 'primary' as const },
		{ label: 'secondary', value: 'secondary' as const },
		{ label: 'success', value: 'success' as const },
		{ label: 'danger', value: 'danger' as const }
	]
};

const rangeDefinition: TokenRangeControlDefinition = {
	id: 'l6-range-opacity',
	functionalTaxonomy: 'architecture',
	tokenFile: 'opacity',
	tokenName: 'OPACITY',
	controlKind: 'range',
	defaultValue: 70 as const,
	min: 0,
	max: 100,
	step: 5
};

const textDefinition: TokenTextControlDefinition = {
	id: 'l6-text-token',
	functionalTaxonomy: 'information',
	tokenFile: 'token-text',
	tokenName: 'TOKEN_TEXT',
	controlKind: 'text',
	defaultValue: 'token-primary-500' as const,
	placeholder: 'token value'
};

export const L6_TOKEN_DEFINITIONS: Record<string, TokenControlDefinition> = {
	'component-size': rangeDefinition,
	style: textDefinition,
	variants: selectDefinition,
	'text-element': textDefinition,
	animations: rangeDefinition,
	controls: radioDefinition,
	state: radioDefinition
};
