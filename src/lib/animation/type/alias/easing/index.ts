import { TOKEN_EASING } from '$stylist/animation/const/object/easing';

export type TokenEasing = (typeof TOKEN_EASING)[keyof typeof TOKEN_EASING];
