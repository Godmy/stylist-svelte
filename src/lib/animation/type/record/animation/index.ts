import { TOKEN_ANIMATION } from '$stylist/animation/const/map/animation';

export type TokenAnimation = (typeof TOKEN_ANIMATION)[keyof typeof TOKEN_ANIMATION];
