export interface DomainForEachOptions {
	libPath?: string;
	filter?: (context: Omit<({
domainName: string;
	domainPath: string;
	libPath: string;
	index: number;
	total: number;
}), 'index' | 'total'>) => boolean;
}
