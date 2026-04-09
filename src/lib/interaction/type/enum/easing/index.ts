import { TOKEN_EASING } from '$stylist/interaction/const/map/easing';

export type TokenEasing = typeof TOKEN_EASING[keyof typeof TOKEN_EASING];
