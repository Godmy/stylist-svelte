import type { HTMLAttributes } from 'svelte/elements';
import type { DebugConsoleLogEntry } from '$stylist/development/type/struct/debug-console-log-entry';
import type { DebugConsoleLogLevel } from '$stylist/development/type/alias/debug-console-log-level';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeDebugConsole extends ComputeIntersectAll<[((HTMLAttributes<HTMLDivElement> & {
logs?: DebugConsoleLogEntry[];
	title?: string;
	showTimestamps?: boolean;
	showLogLevel?: boolean;
	maxHeight?: string;
	allowClear?: boolean;
	allowFilter?: boolean;
	initialLogLevelFilter?: DebugConsoleLogLevel[];
	onClear?: () => void;
	onLog?: (entry: DebugConsoleLogEntry) => void;
	class?: string;
	headerClass?: string;
	consoleClass?: string;
	entryClass?: string;
	footerClass?: string;
}))]> {}
