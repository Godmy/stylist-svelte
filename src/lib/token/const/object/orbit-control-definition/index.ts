export const L6_TOKEN_DEFINITIONS = {
	'component-size': {
		id: 'l6-range-opacity',
		functionalTaxonomy: 'architecture' as const,
		tokenFile: 'opacity',
		tokenName: 'OPACITY',
		controlKind: 'range' as const,
		defaultValue: 70,
		min: 0,
		max: 100,
		step: 5
	},
	style: {
		id: 'l6-text-token',
		functionalTaxonomy: 'information' as const,
		tokenFile: 'token-text',
		tokenName: 'TOKEN_TEXT',
		controlKind: 'text' as const,
		defaultValue: 'token-primary-500',
		placeholder: 'token value'
	},
	variants: {
		id: 'l6-select-semantic',
		functionalTaxonomy: 'information' as const,
		tokenFile: 'semantic-variants',
		tokenName: 'SEMANTIC_VARIANTS',
		controlKind: 'select' as const,
		defaultValue: 'primary',
		options: [
			{ label: 'primary', value: 'primary' },
			{ label: 'secondary', value: 'secondary' },
			{ label: 'success', value: 'success' },
			{ label: 'danger', value: 'danger' }
		]
	},
	'text-element': {
		id: 'l6-text-token',
		functionalTaxonomy: 'information' as const,
		tokenFile: 'token-text',
		tokenName: 'TOKEN_TEXT',
		controlKind: 'text' as const,
		defaultValue: 'token-primary-500',
		placeholder: 'token value'
	},
	animations: {
		id: 'l6-range-opacity',
		functionalTaxonomy: 'architecture' as const,
		tokenFile: 'opacity',
		tokenName: 'OPACITY',
		controlKind: 'range' as const,
		defaultValue: 70,
		min: 0,
		max: 100,
		step: 5
	},
	controls: {
		id: 'l6-radio-state',
		functionalTaxonomy: 'interaction' as const,
		tokenFile: 'state-variants',
		tokenName: 'STATE_VARIANTS',
		controlKind: 'radio' as const,
		defaultValue: 'default',
		options: [
			{ label: 'default', value: 'default' },
			{ label: 'hover', value: 'hover' },
			{ label: 'active', value: 'active' }
		]
	},
	state: {
		id: 'l6-radio-state',
		functionalTaxonomy: 'interaction' as const,
		tokenFile: 'state-variants',
		tokenName: 'STATE_VARIANTS',
		controlKind: 'radio' as const,
		defaultValue: 'default',
		options: [
			{ label: 'default', value: 'default' },
			{ label: 'hover', value: 'hover' },
			{ label: 'active', value: 'active' }
		]
	}
};
