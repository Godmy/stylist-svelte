export type CubeDebugLogEntry = {
	ts: number;
	source: 'stage' | 'icon' | 'title' | 'cell';
	action: string;
	id?: string;
	faceIndex?: number;
	cellIndex?: number;
	pointerType?: string;
	x?: number;
	y?: number;
};

export default CubeDebugLogEntry;
