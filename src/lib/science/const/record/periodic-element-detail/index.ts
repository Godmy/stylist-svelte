import type { PeriodicElementDetail } from '$stylist/science/type/struct/periodic-element-detail';

export const PERIODIC_ELEMENT_DETAIL: Record<string, PeriodicElementDetail> = {
	H: {
		description: 'The lightest element and the most abundant chemical substance in the observable universe.',
		electronConfiguration: '1s1',
		electronegativity: '2.20',
		density: '0.00008988 g/cm3',
		meltingPoint: '13.99 K',
		boilingPoint: '20.27 K',
		discovery: 'Henry Cavendish, 1766',
		uses: ['Fuel cells', 'Ammonia production', 'Hydrogenation', 'Rocket propellant']
	},
	He: {
		description: 'A noble gas with very low reactivity and the lowest boiling point of all elements.',
		electronConfiguration: '1s2',
		density: '0.0001785 g/cm3',
		meltingPoint: '0.95 K',
		boilingPoint: '4.22 K',
		discovery: 'Pierre Janssen and Norman Lockyer, 1868',
		uses: ['Cryogenics', 'Leak detection', 'Shielding gas', 'Balloons']
	},
	C: {
		description: 'The structural basis of organic chemistry, forming stable chains and diverse compounds.',
		electronConfiguration: '[He] 2s2 2p2',
		electronegativity: '2.55',
		density: '2.267 g/cm3',
		meltingPoint: '3915 K',
		boilingPoint: '3915 K',
		discovery: 'Known since antiquity',
		uses: ['Steelmaking', 'Graphite electrodes', 'Carbon fiber', 'Organic materials']
	},
	O: {
		description: 'A reactive nonmetal essential for respiration, combustion, and many oxide minerals.',
		electronConfiguration: '[He] 2s2 2p4',
		electronegativity: '3.44',
		density: '0.001429 g/cm3',
		meltingPoint: '54.36 K',
		boilingPoint: '90.20 K',
		discovery: 'Carl Wilhelm Scheele and Joseph Priestley, 1770s',
		uses: ['Medical oxygen', 'Steelmaking', 'Water treatment', 'Oxidizers']
	},
	Na: {
		description: 'A soft alkali metal recognized by its strong yellow spectral doublet.',
		electronConfiguration: '[Ne] 3s1',
		electronegativity: '0.93',
		density: '0.971 g/cm3',
		meltingPoint: '370.87 K',
		boilingPoint: '1156 K',
		discovery: 'Humphry Davy, 1807',
		uses: ['Sodium vapor lamps', 'Heat transfer', 'Chemical synthesis', 'Table salt compounds']
	},
	Mg: {
		description: 'A lightweight alkaline earth metal used where low mass and high brightness matter.',
		electronConfiguration: '[Ne] 3s2',
		electronegativity: '1.31',
		density: '1.738 g/cm3',
		meltingPoint: '923 K',
		boilingPoint: '1363 K',
		discovery: 'Joseph Black and Humphry Davy, 18th century',
		uses: ['Light alloys', 'Flares', 'Fireworks', 'Grignard reagents']
	},
	Ca: {
		description: 'An alkaline earth metal important in minerals, bones, limestone, and cement chemistry.',
		electronConfiguration: '[Ar] 4s2',
		electronegativity: '1.00',
		density: '1.54 g/cm3',
		meltingPoint: '1115 K',
		boilingPoint: '1757 K',
		discovery: 'Humphry Davy, 1808',
		uses: ['Cement', 'Metallurgy', 'Calcium supplements', 'Deoxidizers']
	},
	Fe: {
		description: 'A transition metal central to steel, machinery, construction, and biological oxygen transport.',
		electronConfiguration: '[Ar] 3d6 4s2',
		electronegativity: '1.83',
		density: '7.874 g/cm3',
		meltingPoint: '1811 K',
		boilingPoint: '3134 K',
		discovery: 'Known since antiquity',
		uses: ['Steel', 'Magnets', 'Tools', 'Hemoglobin']
	},
	Hg: {
		description: 'A dense liquid transition metal with distinctive emission and absorption lines.',
		electronConfiguration: '[Xe] 4f14 5d10 6s2',
		electronegativity: '2.00',
		density: '13.534 g/cm3',
		meltingPoint: '234.32 K',
		boilingPoint: '629.88 K',
		discovery: 'Known since antiquity',
		uses: ['Scientific instruments', 'Switches', 'Fluorescent lamps', 'Reference electrodes']
	},
	U: {
		description: 'A heavy actinide used as nuclear fuel and known for several naturally occurring isotopes.',
		electronConfiguration: '[Rn] 5f3 6d1 7s2',
		electronegativity: '1.38',
		density: '19.1 g/cm3',
		meltingPoint: '1405.3 K',
		boilingPoint: '4404 K',
		discovery: 'Martin Heinrich Klaproth, 1789',
		uses: ['Nuclear fuel', 'Radiometric dating', 'Shielding', 'Research materials']
	}
};
