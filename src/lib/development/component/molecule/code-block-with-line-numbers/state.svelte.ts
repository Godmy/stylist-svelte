import type { CodeBlockWithLineNumbersProps } from '$stylist/development/type/struct/code-block-with-line-numbers-props';
export function createCodeBlockWithLineNumbersState(props: CodeBlockWithLineNumbersProps) {
	return {
		get props() {
			return props;
		}
	};
}

export default createCodeBlockWithLineNumbersState;
