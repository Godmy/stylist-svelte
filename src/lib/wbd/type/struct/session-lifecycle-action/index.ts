export type StructWbdSessionLifecycleAction = {
	id: 'open_round' | 'close_round' | 'reveal_results' | 'advance_round' | 'finalize';
	label: string;
	disabled?: boolean;
	variant?: 'default' | 'primary' | 'danger';
};
