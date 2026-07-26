export interface BehaviorActionable {
	actions?: Array<{
		label: string;
		onClick: () => void;
	}>;
}
