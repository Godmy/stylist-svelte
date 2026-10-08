import type { TypeFilePreset } from '$stylist/domain/type/alias/file-preset';

export type TypeDomainTreeEntity = {
	name: string;
	path?: string;
	preset?: TypeFilePreset;
	component_type?: TypeFilePreset<'component'>;
	code?: TypeFilePreset<'code' | 'barrel' | 'class' | 'type' | 'interface' | 'const' | 'function'>;
	svg?: TypeFilePreset<'svg'>;
	files?: { name: string; path?: string }[];
};
