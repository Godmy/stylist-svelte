import { TOKEN_DURATION } from '$stylist/animation/const/object/duration';

export type TokenDuration = (typeof TOKEN_DURATION)[keyof typeof TOKEN_DURATION];
