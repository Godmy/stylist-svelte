import { TOKEN_CURSOR } from '$stylist/interaction/const/map/cursor';

export type TokenCursor = (typeof TOKEN_CURSOR)[keyof typeof TOKEN_CURSOR];
