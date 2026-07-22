import type { HTMLAttributes } from 'svelte/elements';
import type { TranslatableText } from '$stylist/localization/type/struct/translatable-text';

export interface SlotExtendedTranslationEditor extends HTMLAttributes<HTMLDivElement> {
	texts?: TranslatableText[];
	locales?: string[];
	defaultLocale?: string;
	currentLocale?: string;
	class?: string;
	headerClass?: string;
	tableClass?: string;
	rowClass?: string;
	editorClass?: string;
	showKeyColumn?: boolean;
	showContextColumn?: boolean;
	showStatusColumn?: boolean;
	onTranslationChange?: (key: string, locale: string, value: string) => void;
	onSave?: () => void;
	onImport?: (data: any) => void;
	onExport?: () => void;
}
