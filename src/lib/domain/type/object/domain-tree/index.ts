import type { TypeFilePreset } from '$stylist/domain/type/alias/file-preset';

export type TypeDomainTree = Record<
	string,
	Record<string, Record<string, Record<string, TypeFilePreset>>>
>;
