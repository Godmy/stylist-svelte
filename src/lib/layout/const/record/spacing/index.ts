import { TOKEN_SIZE_REM } from '$stylist/layout/const/enum/size-rem/index';
import type { TokenSizeRem } from '$stylist/layout/type/enum/size-rem/index';
import type { RecordSpacing } from '$stylist/layout/type/record/spacing';

export const RECORD_SPACING: RecordSpacing = Object.fromEntries(
	TOKEN_SIZE_REM.map((size) => [size, size] as const)
) as Record<TokenSizeRem, TokenSizeRem>;
