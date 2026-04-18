import type { DomainForEachContext } from '$stylist/development/interface/slot/domain-for-each-context';

export interface DomainForEachOptions {
	libPath?: string;
	filter?: (context: Omit<DomainForEachContext, 'index' | 'total'>) => boolean;
}
