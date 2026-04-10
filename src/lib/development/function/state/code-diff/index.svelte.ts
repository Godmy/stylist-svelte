import type { Props, DiffLine } from '$stylist/development/type/struct/code-diff';
import { CodeDiffStyleManager } from '$stylist/development/class/style-manager/code-diff';

export function computeDiffLines(original: string, modified: string): DiffLine[] {
	const originalLines = original.split('\n');
	const modifiedLines = modified.split('\n');
	const lines: DiffLine[] = [];
	const maxLines = Math.max(originalLines.length, modifiedLines.length);

	for (let i = 0; i < maxLines; i++) {
		const origLine = i < originalLines.length ? originalLines[i] : null;
		const modLine = i < modifiedLines.length ? modifiedLines[i] : null;

		if (origLine === modLine) {
			lines.push({ type: 'unchanged', original: origLine, modified: modLine, lineNumber: i + 1 });
		} else {
			lines.push({
				type: origLine === null ? 'added' : modLine === null ? 'removed' : 'changed',
				original: origLine,
				modified: modLine,
				lineNumber: i + 1
			});
		}
	}
	return lines;
}

export function createCodeDiffState(props: Props) {
	const diffLines = $derived(computeDiffLines(props.original ?? '', props.modified ?? ''));
	const containerClass = $derived(CodeDiffStyleManager.getContainerClass(props.class ?? ''));
	const headerClassComputed = $derived(CodeDiffStyleManager.getHeaderClass(props.headerClass ?? ''));
	const mainContentClass = $derived(CodeDiffStyleManager.getMainContentClass());
	const lineNumbersContainerClass = $derived(CodeDiffStyleManager.getLineNumbersContainerClass());
	const lineNumberItemClass = $derived(CodeDiffStyleManager.getLineNumberItemClass());
	const contentContainerClass = $derived(CodeDiffStyleManager.getContentContainerClass(props.contentClass ?? ''));
	const diffLineClass = (type: string) => CodeDiffStyleManager.getDiffLineClass(type);
	const diffSpanClass = (type: string) => CodeDiffStyleManager.getDiffSpanClass(type);
	const getDiffContentClass = $derived(CodeDiffStyleManager.getDiffContentClass());
	const getChangedContainerClass = $derived(CodeDiffStyleManager.getChangedContainerClass());

	return {
		get diffLines() {
			return diffLines;
		},
		get containerClass() {
			return containerClass;
		},
		get headerClassComputed() {
			return headerClassComputed;
		},
		get mainContentClass() {
			return mainContentClass;
		},
		get lineNumbersContainerClass() {
			return lineNumbersContainerClass;
		},
		get lineNumberItemClass() {
			return lineNumberItemClass;
		},
		get contentContainerClass() {
			return contentContainerClass;
		},
		diffLineClass,
		diffSpanClass,
		getDiffContentClass,
		getChangedContainerClass
	};
}

export default createCodeDiffState;
