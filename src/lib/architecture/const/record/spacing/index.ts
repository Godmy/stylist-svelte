import { TOKEN_SIZE_REM } from '$stylist/architecture/const/token/size-rem/index';
import type { TokenSizeRem } from '$stylist/architecture/type/token/size-rem/index';
import type { RecordSpacing } from '$stylist/architecture/type/record/spacing';

const RECORD_SPACING_REM = Object.fromEntries(
	TOKEN_SIZE_REM.map((size) => [size, size] as const)
) as Record<TokenSizeRem, TokenSizeRem>;

export const RECORD_SPACING: RecordSpacing = {
	...RECORD_SPACING_REM,
	full: '9999px'
};
