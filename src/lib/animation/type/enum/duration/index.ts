import { TOKEN_DURATION } from '$stylist/interaction/const/map/duration';

/**
 * Тип токена длительности
 */
export type TokenDuration = typeof TOKEN_DURATION[keyof typeof TOKEN_DURATION];
