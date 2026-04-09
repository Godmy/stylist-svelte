import { TOKEN_EASING } from '$stylist/animation/const/map/easing';

export type TokenEasing = typeof TOKEN_EASING[keyof typeof TOKEN_EASING];
