import { TOKEN_CURSOR } from '$stylist/interaction/const/map/cursor';

/**
 * Тип токена курсора
 */
export type TokenCursor = typeof TOKEN_CURSOR[keyof typeof TOKEN_CURSOR];
