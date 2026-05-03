import { TOKEN_DURATION } from '$stylist/animation/const/map/duration';

/**
 * Тип токена длительности
 */
export type TokenDuration = typeof TOKEN_DURATION[keyof typeof TOKEN_DURATION];
