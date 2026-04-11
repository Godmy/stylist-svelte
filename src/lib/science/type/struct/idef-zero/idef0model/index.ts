import type { Idef0Port } from '../idef0port';

export type Idef0Model = {
	title: string;
	subtitle?: string;
	inputs: Idef0Port[];
	outputs: Idef0Port[];
};
