import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/struct/item';

export type IMessageMetaProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	author?: string;
	timestamp?: string;
	status?: 'sent' | 'delivered' | 'read';
};

export interface IMessageMetaStyleClasses {
	root?: string;
	author?: string;
	timestamp?: string;
	status?: string;
}
