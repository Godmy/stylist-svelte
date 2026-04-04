import { TOKEN_CURSOR } from '$stylist/interaction/const/enum/cursor';

/**
 * Тип токена курсора
 */
export type TokenCursor = typeof TOKEN_CURSOR[keyof typeof TOKEN_CURSOR];
