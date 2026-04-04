import { TOKEN_EASING } from '$stylist/interaction/const/enum/easing';

/**
 * Тип токена easing функции
 */
export type TokenEasing = typeof TOKEN_EASING[keyof typeof TOKEN_EASING];
