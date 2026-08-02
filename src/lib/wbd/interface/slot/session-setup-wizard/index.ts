import type { StructWbdSession } from '$stylist/wbd/type/struct/session';

export interface SlotWbdSessionSetupWizard {
	session: Partial<StructWbdSession>;
	step?: 'basics' | 'questions' | 'experts' | 'review';
	class?: string;
}
