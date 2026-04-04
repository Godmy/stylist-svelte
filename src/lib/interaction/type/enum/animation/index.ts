import { TOKEN_ANIMATION } from '$stylist/interaction/const/map/animation';

/**
 * Тип токена анимации
 */
export type TokenAnimation = typeof TOKEN_ANIMATION[keyof typeof TOKEN_ANIMATION];
