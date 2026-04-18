export type StepIconContent = 
	| { type: 'icon'; icon: 'check' | 'x'; size: number }
	| { type: 'number'; value: number | undefined };
