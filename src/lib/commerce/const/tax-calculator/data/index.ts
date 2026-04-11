export const taxCalculatorLocations = [
	{ id: 'loc-1', name: 'New York', city: 'New York', countryCode: 'US', stateCode: 'NY', taxRates: [{ id: 'rate-1', name: 'State Tax', rate: 0.04, description: 'New York state tax' }, { id: 'rate-2', name: 'City Tax', rate: 0.045, description: 'New York city tax', compound: true }] },
	{ id: 'loc-2', name: 'Los Angeles', city: 'Los Angeles', countryCode: 'US', stateCode: 'CA', taxRates: [{ id: 'rate-3', name: 'State Tax', rate: 0.0725, description: 'California state tax' }] }
];

export const taxCalculatorRates = [
	{ id: 'rate-1', name: 'State Tax', rate: 0.04, description: 'State sales tax' },
	{ id: 'rate-2', name: 'City Tax', rate: 0.045, description: 'City sales tax', compound: true }
];
