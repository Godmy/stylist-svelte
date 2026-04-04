/**
 * TokenStatus — универсальный токен статусов для информационных компонентов.
 *
 * Таксономия: Information
 * Используется в: IStepIconProps, IFeedbackProps, IErrorBoundaryProps, etc.
 */
export const TOKEN_STATUS = [
	'default',
	'success',
	'error',
	'warning',
	'info'
] as const;

export type TokenStatus = (typeof TOKEN_STATUS)[number];
