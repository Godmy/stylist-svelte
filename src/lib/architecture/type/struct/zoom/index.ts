export type ZoomStep<TValue = number> = {
	id: number;
	value: TValue;
	label: string;
	preview?: string;
};

export type Zoom<TValue = number> = {
	id: string;
	label: string;
	display: 'number' | 'icon' | 'preview';
	steps: ZoomStep<TValue>[];
};
