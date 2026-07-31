import type { TokenWbdRoundStatus } from '$stylist/wbd/type/alias/round-status';

export type StructWbdRound = {
	id: string;
	index: number;
	status: TokenWbdRoundStatus;
};
