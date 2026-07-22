export type PeriodicElement = {
	atomicNumber: number;
	symbol: string;
	name: string;
	atomicMass: string;
	category: string;
	group: number;
	period: number;
	state: 'solid' | 'liquid' | 'gas' | 'unknown';
};
