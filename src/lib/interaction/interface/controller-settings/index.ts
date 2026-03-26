import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

export interface InterfaceControllerSettings {
	name: string;
	type: TokenControllerType;
	defaultValue?: unknown;
	description?: string;
	options?: string[] | number[];
	min?: number;
	max?: number;
	step?: number;
}
