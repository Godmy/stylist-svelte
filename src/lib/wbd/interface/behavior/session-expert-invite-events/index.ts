export interface BehaviorWbdSessionExpertInviteEvents {
	onInviteExpert?: (email: string) => void;
	onRemoveExpert?: (expertId: string) => void;
	onResendInvite?: (expertId: string) => void;
}
