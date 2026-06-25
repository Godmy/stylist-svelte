import type { Idef0Port } from '$stylist/science/type/struct/idef-zero/idef0port';

export type Idef0BlackBoxProps = {
	title?: string;
	subtitle?: string;
	inputs: Idef0Port[];
	outputs: Idef0Port[];
	width?: number;
	height?: number;
};
