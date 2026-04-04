import { TOKEN_ANIMATION } from '$stylist/interaction/const/map/animation';

export type TokenAnimation = (typeof TOKEN_ANIMATION)[keyof typeof TOKEN_ANIMATION];
