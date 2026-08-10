import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export function createCodeEditorLegacyState(props: ((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography) & {
	code?: string;
	language?: string;
	showLineNumbers?: boolean;
	highlightLines?: number[];
	title?: string;
	copyable?: boolean;
	class?: string;
	contentClass?: string;
	lineNumberClass?: string;
	codeClass?: string;
	headerClass?: string;
}) & { showCopyButton?: boolean }) {
	return {
		get props() {
			return props;
		}
	};
}

export default createCodeEditorLegacyState;
