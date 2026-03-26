export interface InterfaceZoomStep<TValue = number> {
	id: number;
	value: TValue;
	label: string;
	preview?: string;
}
