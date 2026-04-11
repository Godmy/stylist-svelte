export const shippingCalculatorOptions = [
	{ id: 'standard', name: 'Standard', price: 7.99, deliveryDays: 5, carrier: 'USPS', tracking: true },
	{ id: 'express', name: 'Express', price: 14.99, deliveryDays: 2, carrier: 'FedEx', tracking: true },
	{ id: 'overnight', name: 'Overnight', price: 24.99, deliveryDays: 1, carrier: 'FedEx', tracking: true }
];

export const shippingCalculatorCountries = ['US', 'CA', 'UK', 'DE', 'FR'];
export const shippingCalculatorStates = ['NY', 'CA', 'TX', 'FL', 'IL'];
