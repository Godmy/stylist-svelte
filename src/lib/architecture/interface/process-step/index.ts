import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';

export interface IProcessStepProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	number: number;
	title: string;
	description: string;
	agent?: string;
	icon?: string;
	active?: boolean;
}
