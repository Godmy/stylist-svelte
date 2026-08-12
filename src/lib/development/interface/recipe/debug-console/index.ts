import type { HTMLAttributes } from 'svelte/elements';
import type { DebugConsoleLogLevel } from '$stylist/development/type/alias/debug-console-log-level';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeDebugConsole extends ComputeIntersectAll<[((HTMLAttributes<HTMLDivElement> & {
logs?: ({
	id: string;
	timestamp: Date;
	level: DebugConsoleLogLevel;
	message: string;
	data?: any;
})[];
	title?: string;
	showTimestamps?: boolean;
	showLogLevel?: boolean;
	maxHeight?: string;
	allowClear?: boolean;
	allowFilter?: boolean;
	initialLogLevelFilter?: DebugConsoleLogLevel[];
	onClear?: () => void;
	onLog?: (entry: ({
	id: string;
	timestamp: Date;
	level: DebugConsoleLogLevel;
	message: string;
	data?: any;
})) => void;
	class?: string;
	headerClass?: string;
	consoleClass?: string;
	entryClass?: string;
	footerClass?: string;
}))]> {}
