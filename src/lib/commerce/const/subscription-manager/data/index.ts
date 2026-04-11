export const subscriptionManagerData = {
	id: 'sub-123',
	plan: { id: 'premium', name: 'Premium Plan', description: 'Full access to all features', price: 29.99, period: 'monthly', currency: 'USD', features: ['Unlimited projects', 'Priority support', 'Advanced analytics'] },
	startDate: new Date('2024-01-01'),
	endDate: new Date('2025-01-01'),
	nextBillingDate: new Date('2024-02-01'),
	status: 'active' as const,
	paymentMethod: { type: 'credit_card', lastFour: '4242' },
	autoRenew: true
};
