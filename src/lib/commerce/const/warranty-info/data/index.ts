export const warrantyInfoCoverageDetails = [
	'Electronic components',
	'Housing materials',
	'Cables and connectors',
	'Firmware support'
];

export const warrantyInfoExclusions = [
	'Improper storage conditions',
	'Water damage',
	'Unauthorized modifications',
	'Normal wear and tear'
];

export const warrantyInfoClaims = [
	{ id: 'claim-1', date: new Date('2024-01-15'), status: 'resolved' as const, issue: 'Screen malfunction', description: 'Screen stopped responding', resolution: 'Screen replaced', claimNumber: 'WC-2024-001' },
	{ id: 'claim-2', date: new Date('2024-03-20'), status: 'approved' as const, issue: 'Battery degradation', description: 'Battery capacity below 80%', resolution: 'Battery replacement scheduled', claimNumber: 'WC-2024-002' }
];
