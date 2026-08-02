export interface BehaviorWbdSessionListEvents {
	onSelectSession?: (sessionId: string) => void;
	onCreateSession?: () => void;
}
