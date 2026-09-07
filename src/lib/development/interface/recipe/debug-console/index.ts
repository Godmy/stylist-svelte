import type { HTMLAttributes } from 'svelte/elements';
import type { DebugConsoleLogLevel } from '$stylist/development/type/alias/debug-console-log-level';
import type { DebugConsoleLogEntry as SlotDebugConsoleLogEntry } from '$stylist/development/interface/slot/debug-console-log-entry';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeDebugConsole
	extends ComputeIntersectAll<
		[
			HTMLAttributes<HTMLDivElement> & {
				logs?: SlotDebugConsoleLogEntry[];
				title?: string;
				showTimestamps?: boolean;
				showLogLevel?: boolean;
				maxHeight?: string;
				allowClear?: boolean;
				allowFilter?: boolean;
				initialLogLevelFilter?: DebugConsoleLogLevel[];
				onClear?: () => void;
				onLog?: (entry: SlotDebugConsoleLogEntry) => void;
				class?: string;
				headerClass?: string;
				consoleClass?: string;
				entryClass?: string;
				footerClass?: string;
			}
		]
	> {}
