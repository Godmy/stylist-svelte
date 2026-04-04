import { TOKEN_INFORMATION_CONTRACT } from '$stylist/information/const/enum/contract';

export type TokenContract = (typeof TOKEN_INFORMATION_CONTRACT)[keyof typeof TOKEN_INFORMATION_CONTRACT];
export type TokenInformationContract = TokenContract;
