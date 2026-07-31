import type { TokenWbdParticipantRole } from '$stylist/wbd/type/alias/participant-role';

export type StructWbdParticipant = {
	id: string;
	displayName: string;
	role: TokenWbdParticipantRole;
	hasSubmitted?: boolean;
};
