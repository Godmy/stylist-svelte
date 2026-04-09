import { TOKEN_ANIMATION } from '$stylist/animation/const/map/animation';

/**
 * Тип токена анимации
 */
export type TokenAnimation = typeof TOKEN_ANIMATION[keyof typeof TOKEN_ANIMATION];
