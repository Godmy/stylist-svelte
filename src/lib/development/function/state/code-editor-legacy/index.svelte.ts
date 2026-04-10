import type { CodeBlockProps } from '$stylist/development/type/struct/code-block';

export function createCodeEditorLegacyState(props: CodeBlockProps & { showCopyButton?: boolean }) {
	return {
		get props() {
			return props;
		}
	};
}

export default createCodeEditorLegacyState;
