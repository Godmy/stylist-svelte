import type { StructWbdSession } from '$stylist/wbd/type/struct/session';

export interface BehaviorWbdSessionSetupEvents {
	onUpdateSession?: (session: Partial<StructWbdSession>) => void;
	onChangeStep?: (step: 'basics' | 'questions' | 'experts' | 'review') => void;
	onCreateSession?: () => void;
}
