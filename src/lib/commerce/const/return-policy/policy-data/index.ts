export const returnPolicyPolicyData = {
	policyPeriod: 30,
	policyDescription: 'Our return policy allows you to return most new, unopened items within {days} days of delivery for a full refund.',
	policyEffectiveDate: new Date(),
	conditions: [
		{ id: 'condition-1', title: 'Time Limit', description: 'Returns must be initiated within 30 days of delivery', appliesTo: ['all'] },
		{ id: 'condition-2', title: 'Original Condition', description: 'Item must be in original condition, unused and in original packaging', appliesTo: ['all'] },
		{ id: 'condition-3', title: 'Proof of Purchase', description: 'Receipt or proof of purchase is required', appliesTo: ['all'] }
	],
	eligibleProducts: ['Clothing', 'Electronics', 'Home & Garden', 'Books'],
	ineligibleProducts: ['Food & Grocery', 'Personal Care', 'Gift Cards'],
	shippingCosts: 'buyer' as const,
	restockingFee: 5,
	faqs: [
		{ question: "How long does the return process take?", answer: "The return process typically takes 5-7 business days from the time we receive your return." },
		{ question: "Can I exchange an item instead of returning it?", answer: "Yes, we offer exchanges for items of equal or greater value. Just select the exchange option when initiating your return." },
		{ question: "Will I be charged a restocking fee?", answer: "We charge a 5% restocking fee for certain items. This will be deducted from your refund." }
	]
};
