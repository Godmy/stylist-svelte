import type { CopyableCodeBlockProps } from '$stylist/development/type/struct/copyable-code-block-props';
export function createCopyableCodeBlockState(props: CopyableCodeBlockProps) {
	return {
		get props() {
			return props;
		}
	};
}

export default createCopyableCodeBlockState;
