export const shippingInfoOptions = [
	{ id: 'standard', name: 'Standard Shipping', price: 7.99, deliveryDays: 5, carrier: 'USPS', tracking: true, signatureRequired: false, insurance: false, carbonNeutral: false },
	{ id: 'express', name: 'Express Shipping', price: 14.99, deliveryDays: 2, carrier: 'FedEx', tracking: true, signatureRequired: true, insurance: true, carbonNeutral: false },
	{ id: 'overnight', name: 'Overnight Shipping', price: 24.99, deliveryDays: 1, carrier: 'FedEx', tracking: true, signatureRequired: true, insurance: true, carbonNeutral: true }
];

export const shippingInfoRegions = ['North America', 'Europe', 'Asia Pacific', 'Latin America'];
